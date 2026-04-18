import supabase from "../api/supabaseClient.js";
import { getStores } from "./storeService.js";

async function getCoords(address) {
  const query = `${address}, Toronto`;
  const response = await fetch(
    `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=1`,
  );
  const data = await response.json();

  if (data.features && data.features.length > 0) {
    const [lng, lat] = data.features[0].geometry.coordinates;
    return { lat, lng };
  }
  return null;
}

async function handleSearch(address, service) {
  const coords = await getCoords(address);

  if (!coords || coords.lat == null || coords.lng == null) {
    console.error("Could not find coordinates for provided address.");
    return null;
  }

  console.log("Search coords:", { ...coords, service: service || null });
  return { ...coords, service: service || null };
}

export { handleSearch };
