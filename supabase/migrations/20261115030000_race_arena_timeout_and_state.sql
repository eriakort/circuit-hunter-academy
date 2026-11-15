-- Permit an explicit timeout sentinel while keeping the selected answer index constrained.
alter table public.race_answer_events
  add column if not exists timed_out boolean not null default false;

create or replace function public.race_submit_answer_atomic(
  p_room_id uuid, p_user_id uuid, p_selected_index integer, p_question_count integer default 10
)
returns jsonb
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  v_member public.race_room_members%rowtype;
  v_room public.race_rooms%rowtype;
  v_question public.race_question_bank%rowtype;
  v_position integer;
  v_elapsed integer;
  v_correct boolean;
  v_points integer;
  v_next_index integer;
  v_finished boolean;
  v_next_question jsonb;
  v_finished_count integer;
  v_member_count integer;
begin
  if p_selected_index < -1 then raise exception 'Invalid answer' using errcode = '22023'; end if;

  select * into v_room from public.race_rooms where id = p_room_id for update;
  if not found or v_room.status <> 'running' then
    raise exception 'Race is not accepting answers' using errcode = '40001';
  end if;

  select * into v_member from public.race_room_members
  where room_id = p_room_id and user_id = p_user_id for update;
  if not found or v_member.finished_at is not null then
    raise exception 'Player is not eligible to answer' using errcode = '42501';
  end if;

  v_position := v_member.next_question_index;
  if v_position >= p_question_count then raise exception 'No question pending' using errcode = '40001'; end if;

  select q.* into v_question
  from public.race_room_questions rq
  join public.race_question_bank q on q.id = rq.question_id
  where rq.room_id = p_room_id and rq.position = v_position;
  if not found then raise exception 'Question not found' using errcode = 'P0002'; end if;
  if p_selected_index >= jsonb_array_length(v_question.choices) then
    raise exception 'Answer out of range' using errcode = '22023';
  end if;

  v_elapsed := greatest(0, floor(extract(epoch from (clock_timestamp() - coalesce(v_member.question_started_at, clock_timestamp()))) * 1000)::integer);
  v_correct := p_selected_index >= 0 and v_elapsed <= 20000 and p_selected_index = v_question.correct_index;
  v_points := case when v_correct then 50 + round(greatest(0, 20000 - v_elapsed)::numeric / 20000 * 50)::integer else 0 end;

  insert into public.race_answer_events(room_id, user_id, position, selected_index, is_correct, points, timed_out)
  values (p_room_id, p_user_id, v_position, greatest(0, p_selected_index), v_correct, v_points, p_selected_index = -1);

  v_next_index := v_position + 1;
  v_finished := v_next_index >= p_question_count;
  update public.race_room_members set
    score = score + v_points,
    correct_count = correct_count + case when v_correct then 1 else 0 end,
    next_question_index = v_next_index,
    question_started_at = case when v_finished then null else clock_timestamp() end,
    finished_at = case when v_finished then clock_timestamp() else null end
  where id = v_member.id
  returning * into v_member;

  if v_finished then
    select count(*) filter (where finished_at is not null), count(*)
    into v_finished_count, v_member_count
    from public.race_room_members where room_id = p_room_id;
    if v_finished_count >= v_member_count then
      update public.race_rooms set status = 'finished', finished_at = clock_timestamp()
      where id = p_room_id and status = 'running';
    end if;
  else
    select jsonb_build_object('id', q.id, 'prompt', q.prompt, 'choices', q.choices)
    into v_next_question
    from public.race_room_questions rq
    join public.race_question_bank q on q.id = rq.question_id
    where rq.room_id = p_room_id and rq.position = v_next_index;
  end if;

  return jsonb_build_object(
    'correct', v_correct, 'points', v_points, 'score', v_member.score,
    'correctCount', v_member.correct_count, 'finished', v_finished,
    'nextQuestion', v_next_question
  );
end;
$$;

revoke all on function public.race_submit_answer_atomic(uuid, uuid, integer, integer) from public, anon, authenticated;
grant execute on function public.race_submit_answer_atomic(uuid, uuid, integer, integer) to service_role;
