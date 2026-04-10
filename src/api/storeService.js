import supabase from "../api/supabaseClient.js";

async function getStores() {
  try {
    const { data, error } = await supabase
      .from("stores")
      .select("*, store_services (services (service_id, service_name))");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getStoreBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from("stores")
      .select("*, store_services (services (service_id, service_name))")
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
