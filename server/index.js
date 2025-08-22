// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();                    // read .env

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("EcoTrack API");
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () =>
//   console.log(`✅  API running on http://localhost:${PORT}`)
// );
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
await connectDB();                      // connects to Atlas

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);       // register & login
app.get("/", (_, res) => res.send("EcoTrack API"));

const PORT = process.env.PORT || 4000;
import privateRoute from "./routes/privateRoute.js";
app.use("/api/private", privateRoute);

app.listen(PORT, () =>
  console.log(`✅  API running at http://localhost:${PORT}`)
);
