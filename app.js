require("dotenv").config();
const express = require("express");
const cors = require("cors"); // para evitar problemas de permisos
const mongoose = require("mongoose"); // conecta la base de datos
const taskRouter = require("./routes/tasks"); // importa las rutas de datos de tareas

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

app.use(cors()); // Evita problemas de permisos con la API
app.use(express.json());

// conecta las rutas de tareas que estan en otro archivo
// para hacer mas facil el manejo
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log("server running");
});
console.log(uri)