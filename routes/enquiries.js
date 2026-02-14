const express = require("express");
const Enquiry = require("../models/Enquiry");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name?.trim() || !phone?.trim()) {
      return res.status(400).json({ message: "Name and phone are required." });
    }

    const doc = await Enquiry.create({
      name,
      phone,
      email,
      message,
      source: "website",
    });

    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
