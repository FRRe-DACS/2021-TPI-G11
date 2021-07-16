const express = require('express')
//pedimos las imagenes almacenads localmente
const upload = require('../libs/storage')
//destructuramos el controlador de product
const{ addProduct, getProducts } = require('../controllers/productController')
//permitimos que a travez de exprres se puedan registrar los endpoints
const api = express.Router()

//funcion para agragar producto


api.post('/products', upload.single('image'), addProduct)

api.get('/products', getProducts) 

module.exports = api

