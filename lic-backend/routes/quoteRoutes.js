import express from "express";
import { getDailyQuote, addQuote } from "../controllers/quoteController.js";

const router = express.Router();

router.get("/daily", getDailyQuote);
router.post("/add", addQuote); 

export default router;
