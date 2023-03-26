const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

/* GET home page. */
router.get("/", async function (_req, res, _next) {
  try {
    const allTasks = await Task.find({});
    res.json(allTasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
