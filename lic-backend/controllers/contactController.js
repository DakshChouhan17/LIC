import ClientContact from "../models/ClientsContact.js";

export const createContact = async (req, res) => {
  try {
    const newContact = new ClientContact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: "Error saving contact" });
  }
};

export const getAllContacts = async (req, res) => {
  const contacts = await ClientContact.find().sort({ createdAt: -1 });
  res.json(contacts);
};
