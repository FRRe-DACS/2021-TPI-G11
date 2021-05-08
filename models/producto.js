"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
  denominacion: String,
  codigoEAN: Number,
  precio: Number,
});

module.exports = mongoose.model("Producto", ProductoSchema);
