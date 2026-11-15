-- Race Arena Stage 2: server-owned race state and scoring.
-- All writes are performed by the authenticated Edge Function using its server-only key.
create table if not exists public.race_rooms (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code ~ '^[A-Z0-9]{4}$'),
  created_by uuid not null references auth.users(id) on delete cascade,
  grade text not null,
  subject text not null,
  mission_id text not null,
  status text not null default 'lobby' check (status in ('lobby','running','finished','cancelled')),
  started_at timestamptz,
  finished_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.race_room_members (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.race_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 20),
  score integer not null default 0 check (score >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  next_question_index integer not null default 0 check (next_question_index >= 0),
  question_started_at timestamptz,
  joined_at timestamptz not null default now(),
  finished_at timestamptz,
  unique (room_id, user_id)
);

create table if not exists public.race_question_bank (
  id uuid primary key default gen_random_uuid(),
  grade text not null,
  subject text not null,
  mission_id text not null,
  prompt jsonb not null,
  choices jsonb not null check (jsonb_typeof(choices) = 'array' and jsonb_array_length(choices) between 2 and 6),
  correct_index integer not null check (correct_index >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  check (correct_index < jsonb_array_length(choices))
);

create table if not exists public.race_room_questions (
  room_id uuid not null references public.race_rooms(id) on delete cascade,
  position integer not null check (position >= 0),
  question_id uuid not null references public.race_question_bank(id),
  primary key (room_id, position),
  unique (room_id, question_id)
);

create table if not exists public.race_answer_events (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.race_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  position integer not null check (position >= 0),
  selected_index integer not null check (selected_index >= 0),
  is_correct boolean not null,
  points integer not null check (points between 0 and 100),
  answered_at timestamptz not null default now(),
  unique (room_id, user_id, position)
);

create index if not exists race_rooms_code_status_idx on public.race_rooms(code, status);
create index if not exists race_members_room_idx on public.race_room_members(room_id, joined_at);
create index if not exists race_questions_filter_idx on public.race_question_bank(grade, subject, mission_id) where active;

alter table public.race_rooms enable row level security;
alter table public.race_room_members enable row level security;
alter table public.race_question_bank enable row level security;
alter table public.race_room_questions enable row level security;
alter table public.race_answer_events enable row level security;

-- No direct client access: the Edge Function authenticates the caller and uses a server-only key.
revoke all on public.race_rooms, public.race_room_members, public.race_question_bank,
  public.race_room_questions, public.race_answer_events from anon, authenticated;
