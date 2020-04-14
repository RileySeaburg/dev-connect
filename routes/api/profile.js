const express = require("express");
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Yeah it works profile"));

module.exports = router;
