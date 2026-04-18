import supabase from "../api/supabaseClient.js";

async function getStores({ lat, lng, service = null, page = 1, size = 12 }) {
  try {
    const { data, error } = await supabase.rpc("get_stores_by_distance", {
      user_lat: lat,
      user_lng: lng,
      target_service: service,
      page_number: page,
      page_size: size,
    });

    if (error) throw error;
    return data; // This now contains the store data + total_count
  } catch (error) {
    console.error("Error in getStores:", error.message);
    return [];
  }
}

async function getStoreBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from("stores")
      .select(
        "*, store_services (services (service_id, service_name)), store_hours (day_of_week, open_time, close_time)",
      )
      .eq("slug", slug)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    console.log("Fetched store data:", data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getStores, getStoreBySlug };
