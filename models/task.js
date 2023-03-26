const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["to do", "in progress", "done"],
    default: "to do",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
