create database csdb;

create table stores (
    store_id int generated always as identity primary key,
    store_name text not null,
    street_address text,
    rating numeric(2,1),
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