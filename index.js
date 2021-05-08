"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Producto = require("./models/producto");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET ALL
app.get("/api/producto", (req, res) => {
  Producto.find({}, (err, producto) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la peticion: ${err}` });
    if (!producto)
      return res.status(404).send({ message: "NO existen productos." });

    res.send(200, { producto });
  });
});

// GET by id
app.get("/api/producto/:id", (req, res) => {
  let id = req.params.id;

  Producto.findById(id, (err, producto) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Error al realizar la peticion." });
    if (!producto)
      return res.status(404).send({ message: "El producto no existe." });

    res.status(200).send({ producto });
  });
});

// POST producto
app.post("/api/producto", (req, res) => {
  console.log("POST /api/producto");
  console.log(req.body);

  let producto = new Producto();
  producto.denominacion = req.body.denominacion;
  producto.codigoEAN = req.body.codigoEAN;
  producto.precio = req.body.precio;

  producto.save((err, productoStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err}` });

    res.status(200).send({ producto: productoStored });
  });
});

// PUT producto
app.put("/api/producto/:id", (req, res) => {
  let id = req.params.id;
  let update = req.body;

  Producto.findByIdAndUpdate(id, update, (err, productoUpdate) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al actualizar el producto: ${err}` });

    res.status(200).send({ producto: productoUpdate });
  });
});

// DELETE producto
app.delete("/api/producto/:id", (req, res) => {
  let id = req.params.id;

  Producto.findById(id, (err, producto) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al borrar el producto: ${err}` });

    producto.remove((err) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al borrar el producto: ${err}` });
      res.status(200).send({ message: "El producto a sido eliminado." });
    });
  });
});

mongoose.connect("mongodb://localhost:27017/api-empresas", (err, res) => {
  if (err) {
    return console.log(`Error al conectarse a la base de datos: ${err}`);
  }
  console.log("Conexion a la base de datos establesida...");

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  });
});
