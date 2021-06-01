import {Schema, model} from 'mongoose'

// Informes / Declaracion jurada

const InformeSchema = new Schema({
    cuil: Number,
    year: Number,
    month: Number,
    ventas: [{
        type: Schema.Types.ObjectId,
        ref: 'Venta'
    }]
})

module.exports = model("Informe", InformeSchema);
