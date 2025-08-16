import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const Service = mongoose.model("Service", serviceSchema);

export default Service;