-- Idempotent, bounded ingestion for the generated Race Arena question bank.
-- Only the Edge Function / trusted service-role loader may execute this RPC.
create or replace function public.race_seed_question_batch(p_rows jsonb)
returns integer
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  v_inserted integer := 0;
begin
  if p_rows is null or jsonb_typeof(p_rows) <> 'array' then
    raise exception 'Question batch must be a JSON array' using errcode = '22023';
  end if;
  if jsonb_array_length(p_rows) < 1 or jsonb_array_length(p_rows) > 100 then
    raise exception 'Question batch must contain between 1 and 100 rows' using errcode = '22023';
  end if;

  insert into public.race_question_bank
    (grade, subject, mission_id, prompt, choices, correct_index)
  select
    incoming.grade,
    incoming.subject,
    incoming.mission_id,
    incoming.prompt,
    incoming.choices,
    incoming.correct_index
  from jsonb_to_recordset(p_rows) as incoming(
    grade text,
    subject text,
    mission_id text,
    prompt jsonb,
    choices jsonb,
    correct_index integer
  )
  where not exists (
    select 1
    from public.race_question_bank existing
    where existing.grade = incoming.grade
      and existing.subject = incoming.subject
      and existing.mission_id = incoming.mission_id
      and existing.prompt = incoming.prompt
      and existing.choices = incoming.choices
      and existing.correct_index = incoming.correct_index
  );

  get diagnostics v_inserted = row_count;
  return v_inserted;
end;
$$;

revoke all on function public.race_seed_question_batch(jsonb) from public, anon, authenticated;
grant execute on function public.race_seed_question_batch(jsonb) to service_role;
