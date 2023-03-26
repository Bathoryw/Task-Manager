const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (_req, res, _next) {
  res.json({ message: "hello from task manager" });
});

module.exports = router;
