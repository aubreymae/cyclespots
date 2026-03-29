import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import { parse } from "csv-parse/sync";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: join(__dirname, "../.env") });

const storesPath = join(__dirname, "temp_data", "stores.csv");
const servicesPath = join(__dirname, "temp_data", "services.csv");
const mappingPath = join(__dirname, "temp_data", "store_services.csv");

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);

async function rebuild() {
  try {
    const storesData = parse(fs.readFileSync(storesPath, "utf8"), {
      columns: true,
    });
    const servicesData = parse(fs.readFileSync(servicesPath, "utf8"), {
      columns: true,
    });
    const mappingData = parse(fs.readFileSync(mappingPath, "utf8"), {
      columns: true,
    });

    // Insert services
    const { data: insertedServices, error: servicesError } = await supabase
      .from("services")
      .upsert(servicesData, { onConflict: "service_name" })
      .select();
    if (servicesError) throw servicesError;

    const serviceMap = Object.fromEntries(
      insertedServices.map((s) => [s.service_name, s.service_id]),
    );

    // Insert stores
    const { data: insertedStores, error: storesError } = await supabase
      .from("stores")
      .insert(
        storesData.map((row) => ({
          store_name: row.store_name,
          street_address: row.street_address,
          rating: parseFloat(row.rating),
          slug: row.slug,
          location: row.location,
        })),
      )
      .select();
    if (storesError) throw storesError;

    const storeMap = Object.fromEntries(
      insertedStores.map((s) => [s.store_name, s.store_id]),
    );

    // Link both tables
    const joinEntries = mappingData
      .map((row) => ({
        store_id: storeMap[row.store_name],
        service_id: serviceMap[row.service_name],
      }))
      .filter((entry) => entry.store_id && entry.service_id);

    const { error: joinError } = await supabase
      .from("store_services")
      .insert(joinEntries);
    if (joinError) throw joinError;
  } catch (err) {
    console.error("Migration failed: ", err.message);
  }
}

rebuild();
