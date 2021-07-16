const mongoose = require('mongoose')

//nos ayuda a definir nuestros modelos
const Schema = mongoose.Schema

//propiedades de la colecciones (tabla)
const ProductSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice:Number,
    imgUrl: String,
    description: String
}, {
    timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgurl () {
    const {host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

// exportamos el modelo con moongoose, 
module.exports = mongoose.model('Products', ProductSchema) 