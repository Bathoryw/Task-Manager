const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

/* GET home page. */
router.get("/", function (_req, res, _next) {
  res.json({ message: "hello from task manager" });
});

router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
