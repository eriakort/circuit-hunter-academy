-- Serialize lobby joins on the room row so concurrent requests cannot exceed MAX_PLAYERS.
create or replace function public.race_join_atomic(
  p_room_id uuid,
  p_user_id uuid,
  p_display_name text,
  p_max_players integer default 8
)
returns jsonb
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  v_room public.race_rooms%rowtype;
  v_existing public.race_room_members%rowtype;
  v_member_count integer;
begin
  if p_max_players < 2 or p_max_players > 8 then
    raise exception 'Invalid room capacity' using errcode = '22023';
  end if;
  if p_display_name is null or char_length(trim(p_display_name)) not between 1 and 20 then
    raise exception 'Invalid display name' using errcode = '22023';
  end if;

  select * into v_room from public.race_rooms where id = p_room_id for update;
  if not found then raise exception 'Room not found' using errcode = 'P0002'; end if;
  if v_room.status <> 'lobby' then
    raise exception 'Room is no longer accepting players' using errcode = '40001';
  end if;

  select * into v_existing from public.race_room_members
  where room_id = p_room_id and user_id = p_user_id;
  if found then
    return jsonb_build_object('joined', false, 'alreadyMember', true);
  end if;

  select count(*) into v_member_count
  from public.race_room_members where room_id = p_room_id;
  if v_member_count >= p_max_players then
    raise exception 'Room is full' using errcode = '23514';
  end if;

  insert into public.race_room_members(room_id, user_id, display_name)
  values (p_room_id, p_user_id, trim(p_display_name));

  return jsonb_build_object('joined', true, 'alreadyMember', false);
end;
$$;

revoke all on function public.race_join_atomic(uuid, uuid, text, integer) from public, anon, authenticated;
grant execute on function public.race_join_atomic(uuid, uuid, text, integer) to service_role;
