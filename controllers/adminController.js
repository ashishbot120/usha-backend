const SiteContent = require("../models/SiteContent");

// POST /api/admin/login
async function login(req, res) {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({
      token: process.env.ADMIN_TOKEN,
      message: "Login success",
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
}

// PUT /api/admin/content  (protected)
async function updateContent(req, res) {
  const payload = req.body;

  let doc = await SiteContent.findOne();
  if (!doc) doc = await SiteContent.create(payload);
  else {
    Object.assign(doc, payload);
    await doc.save();
  }

  res.json({ message: "Content updated successfully" });
}

module.exports = { login, updateContent };
