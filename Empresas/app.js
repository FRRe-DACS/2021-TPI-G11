const express = require('express')
//ayuda a parsear los mensajes que vienen por los endpoints
const bodyParser = require('body-parser')
//requerimiento para la coneccion desde el front end a traves de metedos internos del back end
const cors = require('cors')
const productRoutes = require('./routes/product')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ exteded: false }))
//por si recibo del tipo json
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs)`))

app.use('/v1', productRoutes)

module.exports = app