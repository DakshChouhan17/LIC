import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "lic_service_gallery",
    resource_type: "auto"
  }
});
const upload = multer({ storage });
export default upload;
