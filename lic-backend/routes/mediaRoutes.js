import express from "express";
import upload from "../middlewares/cloudinaryUpload.js";
import {
  uploadMedia,
  getMedia,
  deleteMedia
} from "../controllers/mediaController.js";

const router = express.Router();
router.post("/", upload.single("file"), uploadMedia);
router.get("/", getMedia);
router.delete("/:id", deleteMedia);
export default router;
