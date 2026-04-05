import { getStores } from "../services/storeService.js";

async function getStoreController(req, res) {
  try {
    const data = await getStores();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getStoreController };
