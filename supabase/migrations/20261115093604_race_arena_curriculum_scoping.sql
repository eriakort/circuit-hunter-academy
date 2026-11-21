-- Race Arena curriculum scoping and mixed-review support.
-- Keep the server-owned race catalogue aligned with the app's grade registry.

alter table public.race_rooms
  add constraint race_rooms_grade_subject_check check (
    (grade = 'grade5' and subject in ('science', 'math5', 'italian')) or
    (grade = 'grade9' and subject in ('cs', 'phys', 'math', 'italian', 'chem')) or
    (grade = 'grade10' and subject in ('chem10', 'italian')) or
    (grade = 'grade11' and subject in ('chem11', 'italian'))
  );

alter table public.race_question_bank
  add constraint race_question_bank_grade_subject_check check (
    (grade = 'grade5' and subject in ('science', 'math5', 'italian')) or
    (grade = 'grade9' and subject in ('cs', 'phys', 'math', 'italian', 'chem')) or
    (grade = 'grade10' and subject in ('chem10', 'italian')) or
    (grade = 'grade11' and subject in ('chem11', 'italian'))
  );

-- "mix" means a random review across every mission in the selected grade/subject.
-- The answer key remains server-side: only prompt and choices are returned.
create or replace function public.race_start_atomic(
  p_room_id uuid,
  p_user_id uuid,
  p_question_count integer default 10
)
returns jsonb
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  v_room public.race_rooms%rowtype;
  v_questions jsonb;
  v_count integer;
  v_started_at timestamptz := clock_timestamp();
begin
  if p_question_count < 1 or p_question_count > 20 then
    raise exception 'Invalid question count' using errcode = '22023';
  end if;

  select * into v_room from public.race_rooms where id = p_room_id for update;
  if not found then raise exception 'Room not found' using errcode = 'P0002'; end if;
  if v_room.created_by <> p_user_id then raise exception 'Host only' using errcode = '42501'; end if;
  if v_room.status <> 'lobby' then raise exception 'Race already started' using errcode = '40001'; end if;

  with chosen as (
    select id
    from public.race_question_bank
    where grade = v_room.grade
      and subject = v_room.subject
      and active = true
      and (v_room.mission_id = 'mix' or mission_id = v_room.mission_id)
    order by random()
    limit p_question_count
  ), inserted as (
    insert into public.race_room_questions(room_id, position, question_id)
    select p_room_id, row_number() over (order by random()) - 1, id
    from chosen
    returning question_id, position
  )
  select count(*), coalesce(jsonb_agg(jsonb_build_object(
    'id', q.id, 'prompt', q.prompt, 'choices', q.choices
  ) order by i.position), '[]'::jsonb)
  into v_count, v_questions
  from inserted i
  join public.race_question_bank q on q.id = i.question_id;

  if v_count <> p_question_count then
    raise exception 'Not enough approved questions' using errcode = '22023';
  end if;

  update public.race_rooms
  set status = 'running', started_at = v_started_at
  where id = p_room_id and status = 'lobby';

  update public.race_room_members
  set question_started_at = v_started_at
  where room_id = p_room_id;

  return jsonb_build_object('status', 'running', 'questions', v_questions);
end;
$$;

revoke all on function public.race_start_atomic(uuid, uuid, integer) from public, anon, authenticated;
grant execute on function public.race_start_atomic(uuid, uuid, integer) to service_role;
