create database csdb;

drop table if exists store_services;
drop table if exists opening_hours;
drop table if exists services;
drop table if exists stores;

create extension if not exists postgis;

create table stores (
    store_id int generated always as identity primary key,
    store_name text not null,
    street_address text,
    rating numeric(2,1),
    location geography(point, 4326),
    slug text unique,
    phone text,
    website text,
    image_url text,
    google_maps_url text,
    created_at timestamptz default now()
);

create table services (
    service_id int generated always as identity primary key,
    service_name text unique
);

create table store_services (
    store_id int not null,
    service_id int not null,
    primary key (store_id, service_id),
    foreign key (store_id) references stores(store_id) on delete cascade,
    foreign key (service_id) references services(service_id) on delete cascade
);

create table store_hours (
    store_hours_id int generated always as identity primary key,
    store_id int references stores(store_id) on delete cascade,
    day_of_week int not null, -- 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    open_time time, -- null if closed
    close_time time -- null if closed
);

create index stores_location_idx on stores using gist (location);

-- get stores by distance function
drop function if exists get_stores_by_distance(float, float, text, int, int);

create or replace function get_stores_by_distance(
  user_lat float, 
  user_lng float, 
  target_service text default null,
  page_number int default 1,
  page_size int default 10
)
returns table (
  store_id int,
  store_name text,
  street_address text,
  rating numeric,
  slug text,
  phone text,
  website text,
  image_url text,
  google_maps_url text,
  dist_meters float,
  services jsonb,
  total_count bigint
) as $$
declare
  offset_val int := (page_number - 1) * page_size;
begin
  return query
  with filtered_stores as (
    select 
      s.*,
      ST_Distance(s.location, ST_SetSRID(ST_MakePoint(user_lng, user_lat), 4326)::geography) AS d_meters
    from stores s
    where (
      target_service is null or exists (
        select 1
        from store_services ss
        join services serv on ss.service_id = serv.service_id
        where ss.store_id = s.store_id and serv.service_name = target_service
      )
    )
  )
  select 
    f.store_id, 
    f.store_name, 
    f.street_address,
    f.rating,
    f.slug,
    f.phone,
    f.website,
    f.image_url,
    f.google_maps_url,
    f.d_meters,
    (
      select jsonb_agg(jsonb_build_object('id', serv.service_id, 'name', serv.service_name))
      from store_services ss
      join services serv on ss.service_id = serv.service_id
      where ss.store_id = f.store_id
    ) as services,
    count(*) over() as total_count
  from filtered_stores f
  -- FIX: Order by the calculated distance alias 'd_meters' instead of 's.location'
  order by f.d_meters asc
  limit page_size
  offset offset_val;
end;
$$ language plpgsql;