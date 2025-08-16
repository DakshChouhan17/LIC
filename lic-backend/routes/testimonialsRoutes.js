import express from "express";
import {
  createTestimonial,
  getApprovedTestimonials,
  getAllTestimonials,
  approveTestimonial
} from "../controllers/testimonialController.js";

const router = express.Router();

// User: Submit testimonial
router.post("/", createTestimonial);

// Public: Get approved testimonials
router.get("/", getApprovedTestimonials);

// Admin: Get all testimonials
router.get("/all", getAllTestimonials);

// Admin: Approve testimonial
router.patch("/approve/:id", approveTestimonial);

export default router;
