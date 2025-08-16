import Media from "../models/Media.js";
import cloudinary from "../config/cloudinary.js";

// Upload Media
export const uploadMedia = async (req, res) => {
  try {
    const { title, type, serviceId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "File upload failed" });
    }

    const fileUrl = req.file.path;
    const public_id = req.file.filename; // ✅ Correct public_id from Cloudinary

    const media = new Media({
      title,
      type,
      serviceId,
      fileUrl,
      public_id,
    });

    await media.save();
    res.status(201).json(media);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to upload media" });
  }
};

// Get Media by serviceId (optional)
export const getMedia = async (req, res) => {
  try {
    const { serviceId } = req.query;
    const filter = serviceId ? { serviceId } : {};
    const media = await Media.find(filter);
    res.json(media);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch media" });
  }
};

// Delete Media (Cloudinary + DB)
export const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    await cloudinary.uploader.destroy(media.public_id, {
      resource_type: media.type === "video" ? "video" : "image",
    });

    await media.deleteOne();
    res.json({ message: "Media deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting media" });
  }
};
