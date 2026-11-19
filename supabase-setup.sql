create table if not exists public.categories (
  id text primary key,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.videos (
  id text primary key,
  title text not null,
  category_id text not null,
  source text,
  file_name text,
  file_path text,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
alter table public.videos enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, delete on public.categories to anon, authenticated;
grant select, insert, delete on public.videos to anon, authenticated;

drop policy if exists "Public read categories" on public.categories;
create policy "Public read categories" on public.categories for select using (true);
drop policy if exists "Public write categories" on public.categories;
create policy "Public write categories" on public.categories for insert with check (true);
drop policy if exists "Public delete categories" on public.categories;
create policy "Public delete categories" on public.categories for delete using (true);

drop policy if exists "Public read videos" on public.videos;
create policy "Public read videos" on public.videos for select using (true);
drop policy if exists "Public write videos" on public.videos;
create policy "Public write videos" on public.videos for insert with check (true);
drop policy if exists "Public delete videos" on public.videos;
create policy "Public delete videos" on public.videos for delete using (true);

insert into storage.buckets (id, name, public)
values ('videos', 'videos', true)
on conflict (id) do update set public = true;

drop policy if exists "Public read video files" on storage.objects;
create policy "Public read video files" on storage.objects for select using (bucket_id = 'videos');
drop policy if exists "Public upload video files" on storage.objects;
create policy "Public upload video files" on storage.objects for insert with check (bucket_id = 'videos');
drop policy if exists "Public update video files" on storage.objects;
create policy "Public update video files" on storage.objects for update using (bucket_id = 'videos') with check (bucket_id = 'videos');
drop policy if exists "Public delete video files" on storage.objects;
create policy "Public delete video files" on storage.objects for delete using (bucket_id = 'videos');
