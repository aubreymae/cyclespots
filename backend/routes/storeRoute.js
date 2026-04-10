import express from "express";
import { getStoreController } from "../controllers/storeController.js";

const router = express.Router();

router.get("/", getStoreController);

export default router;
