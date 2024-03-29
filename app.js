// Imports
const cors = require("cors");
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");
require("dotenv").config();
require("ejs");

// Se conecta a la Base de Datos  
const { sequelize } = require("./database");

sequelize
  .authenticate()
  .then(() => console.log("Base de Datos Conectada"))
  .catch((error) => {
    console.log(error);
    process.exit();
  });

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
// app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
  return res.status(404).render("404");
});

// Starting the server
app.listen(port, () => console.log(`Server on http://localhost:${port}`));