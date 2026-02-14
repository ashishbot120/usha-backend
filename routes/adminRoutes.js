const router = require("express").Router();
const { login, updateContent } = require("../controllers/adminController");
const requireAdmin = require("../middleware/auth");

router.post("/login", login);
router.put("/content", requireAdmin, updateContent);

module.exports = router;
