// "use strict";

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const ProductoSchema = new Schema({
  denominacion: {
    type: String,
    require: [true, "Denominación es requerido."],
    trim: true,
  },
  codigoEAN: {
    type: Number,
    require: [true, , "Código EAN es requerido."],
    trim: true,
    unique: [true, "Código EAN debe ser único."],
  },
  precioUnidad: {
    type: Number,
    require: [true, , "Precio por Unidad es requerido."],
    trim: true,
  },
  unidadMedida: {
    type: String,
    require: [true, , "Unidad de Medida es requerido."],
    trim: true,
  },
  cantidaProd: {
    type: Number,
    require: [true, , "Cantidad Producida es requerido."],
    trim: true,
  },
  cantidadVen: {
    type: Number,
    require: [true, "Cantidad Vendida es requerido."],
    trim: true,
  },
});

ProductoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// ProductoSchema.path("codigoEAN").validate(async (ean) => {
//   const countEAN = await models.Producto.countDocuments({ ean });
//   return !countEAN;
// }, "Código EAN debe ser único.");

ProductoSchema.plugin(uniqueValidator);

module.exports = model("Producto", ProductoSchema);
