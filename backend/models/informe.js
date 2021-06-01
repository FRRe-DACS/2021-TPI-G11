import {Schema, model} from 'mongoose'

// Informes / Declaracion jurada

const InformeSchema = new Schema({
    cuil: Number,
    year: Number,
    month: Number,
    rectificacion: Bool,
    ventas: [{
        type: Schema.Types.ObjectId,
        ref: 'Venta'
    }]
})

module.exports = model("Informe", InformeSchema);
