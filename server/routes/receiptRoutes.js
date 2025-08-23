import express from "express";
import multer from "multer";
import path from "path";
import { protect } from "../middleware/auth.js";
import Receipt from "../models/Receipt.js";

const router = express.Router();

// storage config: keep original extension, randomize name
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, "uploads/"),
  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, name);
  },
});
const upload = multer({ storage });

router.post("/upload", protect, upload.single("file"), async (req, res) => {
  try {
    const { originalname, filename, mimetype } = req.file;

    const receipt = await Receipt.create({
      user: req.user._id,
      original: originalname,
      filename,
      mimeType: mimetype,
    });

    res.status(201).json({
      id: receipt._id,
      url: `/uploads/${filename}`,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

