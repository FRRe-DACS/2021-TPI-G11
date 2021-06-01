import { Schema, model } from "mongoose";

const VentaSchema = new Schema({
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

module.exports = model("Venta", VentaSchema);
