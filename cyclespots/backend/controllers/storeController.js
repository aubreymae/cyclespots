import { getStore } from "../services/storeService.js";

async function getStoreController(req, res) {
  try {
    const data = await getStore();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getStoreController };
