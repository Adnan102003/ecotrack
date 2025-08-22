import express from "express";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/hello", protect, (req, res) =>
  res.json({ message: `Hello ${req.user.name}! (email ${req.user.email})` })
);

export default router;
