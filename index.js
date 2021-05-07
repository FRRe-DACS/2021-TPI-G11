"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/empresa/:name", (req, res) => {
//   res.send({ message: `Hola ${req.params.name}` });
// });

app.get("/api/producto", (req, res) => {
  res.status(200).send({ producto: [] });
});

app.get("/api/producto/:id", (req, res) => {});

app.post("/api/producto", (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "Producto guardado." });
});

app.put("/api/producto/:id", (req, res) => {});

app.delete("/api/producto/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});
