import Testimonial from "../models/Testimonial.js";

// Add new testimonial (user)
export const createTestimonial = async (req, res) => {
  try {
    const { name, feedback } = req.body;
    const testimonial = new Testimonial({ name, feedback });
    await testimonial.save();
    res.status(201).json({ message: "Testimonial submitted for review" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create testimonial" });
  }
};

// Get approved testimonials (public)
export const getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isApproved: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
};

// Get all testimonials (admin)
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all testimonials" });
  }
};

// Approve testimonial (admin)
export const approveTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }
    res.json({ message: "Testimonial approved", testimonial });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve testimonial" });
  }
};
