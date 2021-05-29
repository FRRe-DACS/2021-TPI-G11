import Producto from "../models/producto";

module.exports = (app) => {
  // GET ALL
  app.get("/api/productos", (req, res) => {
    console.log("GET ALL /api/productos");

    Producto.find({}, (err, producto) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al realizar la peticion: ${err}` });
      if (!producto)
        return res.status(404).send({ message: "NO existen productos." });

      res.status(200).send({ producto });
    });
  });

  // GET by id
  app.get("/api/productos/:id", (req, res) => {
    console.log("GET BY ID /api/productos/:id");
    let id = req.params.id;

    Producto.findById(id, (err, producto) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error al realizar la peticion." });
      if (!producto)
        return res.status(404).send({ message: "El producto no existe." });

      res.status(200).send({ producto });
    });
  });

  // POST producto
  app.post("/api/productos", (req, res) => {
    console.log("POST /api/productos");
    console.log(req.body);

    let producto = new Producto(req.body);

    producto.save((err, productoStored) => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al salvar en la base de datos: ${err}` });

      res.status(200).send({ producto: productoStored });
    });
  });

  // PUT producto
  app.put("/api/productos/:id", (req, res) => {
    console.log("PUT /api/productos/:id");
    console.log(req.body);

    let id = req.params.id;
    let update = req.body;

    Producto.findByIdAndUpdate(
      id,
      update,
      { new: true },
      (err, productoUpdate) => {
        if (err)
          return res
            .status(500)
            .send({ message: `Error al actualizar el producto: ${err}` });

        res.status(200).send({ producto: productoUpdate });
      }
    );
  });

  // DELETE producto
  app.delete("/api/productos/:id", (req, res) => {
    console.log("DELET /api/productos/:id");
    let id = req.params.id;

    Producto.findById(id, (err, producto) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al borrar el producto: ${err}` });

      producto.remove((err) => {
        if (err)
          return res
            .status(500)
            .send({ message: `Error al borrar el producto: ${err}` });
        res.status(200).send({ message: "El producto a sido eliminado." });
      });
    });
  });
};
