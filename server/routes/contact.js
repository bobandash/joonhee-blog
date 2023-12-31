const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/create", contactController.create_message);
router.get("/", contactController.get_all_messages);

module.exports = router;
