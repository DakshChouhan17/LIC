import Quote from "../models/Quote.js";

export const getDailyQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    if (count === 0) return res.status(404).json({ message: "No quotes found" });

    // Rotate quote daily by using date
    const dayIndex = new Date().getDate() % count;
    const quote = await Quote.findOne().skip(dayIndex);

    res.json(quote);
  } catch (err) {
    res.status(500).json({ message: "Error fetching quote" });
  }
};

// Admin add quote
export const addQuote = async (req, res) => {
  try {
    const { text, author } = req.body;
    const quote = new Quote({ text, author });
    await quote.save();
    res.status(201).json(quote);
  } catch (err) {
    res.status(500).json({ message: "Error adding quote" });
  }
};
