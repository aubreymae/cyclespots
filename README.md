# CycleSpots 🚲

A directory for Toronto cyclists to find specialized bike services.

CycleSpots is a full-stack web application designed to solve a specific local problem: finding the right bike shop based on proximity and specialized service offerings.

The project highlights a transition from design-centric development to systems-focused engineering, utilizing spatial indexing and efficient data modeling to handle geographic queries.

## 🛠️ Tech Stack

**Frontend**: React, JavaScript, Vite

**Backend**: Supabase (PostgreSQL)

**Geospatial**: PostGIS

**API**: Photon/Komoot (OpenStreetMap)

**Database Schema**: Custom relational design with stores, services, and store_services join tables.

## 🚀 Key Engineering Features

1. Spatial Search with PostGIS  
   Instead of calculating distances on the client side, CycleSpots offloads heavy math to the database. I implemented a custom PostgreSQL function using the nearest neighbour operator and the PostGIS extension.
   - **Benefit:** Sub-millisecond query times even as the store list grows
   - **Efficiency:** Uses a GIST spatial index for ultra-fast lookups

2. Relational Data Modeling  
   The application uses a many-to-many relationship to link stores with their specific services.
   - **Architecture:** Complex SQL RPC calls return nested JSON arrays, reducing total network round-trips to a single request per search

## 🏗️ Architecture & Decisions

### Why React & Supabase?

While the project started in Astro, I migrated to React to better handle the complex, real-time state management required for a live-filtering search interface. Supabase was chosen for its robust PostgreSQL environment, allowing for deep integration with PostGIS without the overhead of managing a dedicated backend server.

### Bespoke vs. Automated

In line with my engineering philosophy, I chose to build the search and distance logic from scratch rather than relying on high-level "black box" libraries. This ensured a deep understanding of the underlying coordinate systems and SQL performance.

## 🗺️ Roadmap

[x] Geocoding integration with Photon API

[x] Distance-based sorting via PostGIS

[x] Multi-service filtering logic

[x] Client-rendered individual store pages

[ ] User reviews and rating system

[ ] Interactive Map view (MapLibre/Mapbox)

## 🔧 Getting Started

_Clone the repo_: git clone https://github.com/your-username/cyclespots.git

_Install dependencies_: npm install

_Environment variables_: Create a .env file with your Supabase URL and Anon Key.

_Run_: npm run dev

## 👩🏻 Author

Developed by Aubrey Garcia, a Software Developer based in Toronto.
