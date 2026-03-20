import supabase from "../db/supabaseClient.js";

async function getStore() {
  try {
    const { data, error } = await supabase.from("stores").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getStore };
