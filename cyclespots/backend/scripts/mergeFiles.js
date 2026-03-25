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
        rows.push(`"${store.name}",Repairs`);
      }
      if (store.services.rentals) {
        rows.push(`"${store.name}",Rentals`);
      }
      if (store.services.customBuilds) {
        rows.push(`"${store.name}",Custom Builds`);
      }
    });

    const csvStores = rows.join("\n");

    await fs.writeFile("temp_data/store_services.csv", csvStores, "utf-8");
  } catch (err) {
    console.error(err.message);
  }
}

async function convertToCSV() {
  try {
    const jsonStores = await readFromJSON();

    const csvRows = [
      "store_name,street_address,rating,location,slug",
      ...jsonStores.map(
        (store) =>
          `"${store.name}","${store.address}",${store.rating},POINT(${store.coordinates.longitude} ${store.coordinates.latitude}),${store.slug}`,
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
