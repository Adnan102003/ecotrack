import mongoose from "mongoose";

const receiptSchema = new mongoose.Schema(
  {
    user:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    original:   { type: String, required: true },   // original file name
    filename:   { type: String, required: true },   // stored on disk
    mimeType:   { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Receipt", receiptSchema);
