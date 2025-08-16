import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import testimonialRoutes from "./routes/testimonialsRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/quotes", quoteRoutes);
app.use("/api/testimonials", testimonialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
