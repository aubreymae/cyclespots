import { getStore } from "../services/storeService.js";

async function getStoreController(req, res) {
  try {
    const data = await getStore();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getStoreController };
