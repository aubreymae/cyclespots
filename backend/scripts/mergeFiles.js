import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "temp_data", "toronto-shops.json");

async function readFromJSON() {
  try {
    const jsonStores = fs.readFile(filePath, "utf-8");

    return JSON.parse(await jsonStores);
  } catch (err) {
    console.error(err.message);
  }
}

async function combineServices() {
  try {
    const jsonStores = await readFromJSON();

    const rows = ["store_name,service_name"];

    jsonStores.forEach((store) => {
      if (store.services.repairs) {
        rows.push(`"${store.name}","Repairs"`);
      }
      if (store.services.rentals) {
        rows.push(`"${store.name}","Rentals"`);
      }
      if (store.services.customBuilds) {
        rows.push(`"${store.name}","Custom Builds"`);
      }
    });

    const csvStores = rows.join("\n");

    await fs.writeFile("temp_data/store_services.csv", csvStores, "utf-8");
  } catch (err) {
    console.error(err.message);
  }
}

async function combineHours() {
  try {
    const jsonStores = await readFromJSON();

    const rows = ["store_name,day_of_week,open_time,close_time"];
    const daysOfWeek = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    jsonStores.forEach((store) => {
      store.openingHours.forEach((h) => {
        const dayIndex = daysOfWeek[h.day];
        const open = h.open ? h.open : "";
        const close = h.close ? h.close : "";

        rows.push(`"${store.name}",${dayIndex},"${open}","${close}"`);
      });
    });

    const csvStores = rows.join("\n");

    await fs.writeFile("temp_data/store_hours.csv", csvStores, "utf-8");
  } catch (err) {
    console.error(err.message);
  }
}

async function convertToCSV() {
  try {
    const jsonStores = await readFromJSON();

    const csvRows = [
      "store_name,street_address,rating,location,slug,phone,website,image_url,google_maps_url",
      ...jsonStores.map(
        (store) =>
          `"${store.name}","${store.address}",${store.rating},POINT(${store.coordinates.longitude} ${store.coordinates.latitude}),"${store.slug}","${store.phone}","${store.website}","${store.image}","${store.google}"`,
      ),
    ];

    const csvStores = csvRows.join("\n");

    await fs.writeFile("temp_data/stores.csv", csvStores, "utf-8");
  } catch (err) {
    console.error(err.message);
  }
}

convertToCSV();
combineServices();
combineHours();
