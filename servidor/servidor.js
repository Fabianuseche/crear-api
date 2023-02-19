const express = require("express");
const bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

const items = [];

// devuelve todos
app.get("/products", function (peticion, respuesta) {
  respuesta.json(items);
});

// devuelve uno por nombre
app.get("/products/:nombre", function (req, res) {
  const nombre = req.params.nombre;
  const item = items.find((item) => item.nombre === nombre);
  res.json(item);
});

// crear
app.post("/products", function (req, res) {
  const item = req.body;
  items.push(item);
  res.json(item);
});

app.put("/products/:nombre", function (req, res) {
  const nombre = req.params.nombre;
  const itemIdx = items.findIndex((item) => item.nombre === nombre);
  items.splice(itemIdx, 1);
  items.push(req.body);
  res.json(req.body);
});

app.delete("/products/:nombre", function (req, res) {
  const nombre = req.params.nombre;
  const itemIdx = items.findIndex((item) => item.nombre === nombre);
  items.splice(itemIdx, 1);
  res.send();
});

app.listen(3000);
