import supabase from "../db/supabaseClient";

async function getStore() {
  try {
    const data = await supabase.from("stores").select("*");

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { getStore };
