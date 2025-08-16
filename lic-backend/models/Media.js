import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  type: { type: String, enum: ["photo", "video"], required: true },
  title: { type: String, required: true },
  fileUrl: { type: String, required: true },
  public_id: { type: String, required: true },  
  createdAt: { type: Date, default: Date.now }
});

const Media = mongoose.model("Media", mediaSchema);

export default Media;
