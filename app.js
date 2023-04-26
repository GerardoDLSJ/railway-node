var hbs = require("hbs");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.port;

// __dirname para saber donde se encuentra desplegada toda la aplicación

// HandleBars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// Servir contenido estatico
app.use(express.static("public")); // Esto descarta el path root '/'

// MiddleWare

// app.get("/", function (req, res) {
//   res.send("Hola mundo");
// });

app.get("/hola-mundo", function (req, res) {
  res.send("Hello mundo en su respectiva ruta");
});

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Gerardo De Los Santos",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Gerardo De Los Santos",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Gerardo De Los Santos",
    titulo: "Curso de Node",
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Esta pagina esta corriendo en el puerto ${port}`);
});
