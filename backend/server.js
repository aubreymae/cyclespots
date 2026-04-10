import express from "express";
import router from "./routes/storeRoute.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use("/stores", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}/`);
});
