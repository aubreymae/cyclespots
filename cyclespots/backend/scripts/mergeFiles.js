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

async function convertToCSV() {
  try {
    const jsonStores = await readFromJSON();

    const csvRows = [
      "store_name,street_address,rating",
      ...jsonStores.map(
        (store) => `${store.name},${store.address},${store.rating}`,
      ),
    ];

    const csvStores = csvRows.join("\n");

    await fs.writeFile("temp_data/stores.csv", csvStores, "utf-8");
  } catch (err) {
    console.error(err.message);
  }
}

convertToCSV();
