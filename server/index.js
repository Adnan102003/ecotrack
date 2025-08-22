import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();                    // read .env

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EcoTrack API");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`✅  API running on http://localhost:${PORT}`)
);
