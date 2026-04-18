import supabase from "../api/supabaseClient.js";

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

async function handleSearch(address, serviceName) {
  const { lat, lng } = await getCoords(address);

  const { data, error } = await supabase.rpc("get_stores_by_distance", {
    user_lat: lat,
    user_lng: lng,
    target_service: serviceName || null,
    page_number: 1,
    page_size: 12,
  });

  if (error) console.error(error);
  return data;
}

export { handleSearch };
