import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

import authRoutes    from "./routes/authRoutes.js";     // Day 2
import privateRoute  from "./routes/privateRoute.js";   // Day 3
import receiptRoutes from "./routes/receiptRoutes.js";  // Day 4

dotenv.config();
await connectDB();                                     // MongoDB connection

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));        // serve files

/* route groups */
app.use("/api/auth",     authRoutes);
app.use("/api/private",  privateRoute);
app.use("/api/receipts", receiptRoutes);

app.get("/", (_, res) => res.send("EcoTrack API"));    // health-check

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`✅  API running at http://localhost:${PORT}`)
);
