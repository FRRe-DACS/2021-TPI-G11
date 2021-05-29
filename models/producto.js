"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  denominacion: {
    type: String,
    require: true,
    trim: true,
  },
  codigoEAN: { type: Number, require: true, trim: true },
  precioUnidad: { type: Number, require: true, trim: true },
  unidadMedida: {
    type: String,
    require: true,
    trim: true,
  },
  cantidaProd: { type: Number, require: true, trim: true },
  cantidadVen: { type: Number, require: true, trim: true },
});

module.exports = mongoose.model("Producto", ProductoSchema);
