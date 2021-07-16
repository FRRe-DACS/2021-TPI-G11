const mongoose = require('mongoose')

//proyectamos por pantalla si el servidor se conecto a la bd
mongoose.connection.on('open', () => console.log('db connected'))

//destructuramos  para ver las propiedades del objeto que tratamos
async function connectDb ({ host, port, dbName }) {

    //concatenamos 
    const uri = `mongodb://${host}:${port}/${dbName}`

    //pasamos por paramotro al uri y el segundo parametro es para los mensajes por consola
    await mongoose.connect(uri, { useNewUrlParser: true })

}


module.exports = connectDb 
