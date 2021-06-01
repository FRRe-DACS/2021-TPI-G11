import mongoose from "mongoose";

(async () => {
  try {
    const mongooseOption = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
    const db = await mongoose.connect(
      "mongodb://localhost:27017/api-empresas",
      mongooseOption
    );
    console.log("Conexion con la base de datos: api-empresas");
  } catch (error) {
    console.log(`Error al conectarse a la base de datos: ${error}`);
  }
})();
