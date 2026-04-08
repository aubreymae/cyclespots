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

create table opening_hours (
    store_hours_id int generated always as identity primary key,
    store_id int references stores(store_id) on delete cascade,
    day_of_week int not null, -- 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    open_time time, -- null if closed
    close_time time -- null if closed
);

create index stores_location_idx on stores using gist (location);