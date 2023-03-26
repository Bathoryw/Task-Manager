require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const taskRouter = require("./routes/tasks");

const app = express();
const port = process.env.PORT;

const uri = process.env.MONGO_DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Connected to mongo DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hi babies");
});

app.use(express.json());
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log("server running");
});
