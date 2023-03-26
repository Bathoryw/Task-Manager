require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

const uri = process.env.MONGO_DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

app.get("/", (req, res) => {
  res.send("Hi babies");
});

app.listen(port, () => {
  console.log("server running");
});
