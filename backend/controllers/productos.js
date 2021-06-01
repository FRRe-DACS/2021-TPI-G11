import Producto from "../models/producto";

export function getProductos(req, res) {
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
}

export function getProducto(req, res) {
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
}

export function addProducto(req, res) {
  console.log("POST /api/productos");
  console.log(req.body);

  let producto = new Producto(req.body);

  producto.save((err, productoStored) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
      // .send({ message: `Error al salvar en la base de datos: ${err}` });
    }

    res.status(200).send({ producto: productoStored });
  });
}

export function updateProducto(req, res) {
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
}

export function deleteProducto(req, res, next) {
  console.log("DELET /api/productos/:id");
  const { id } = req.params;

  // findByIdAndDelete
  Producto.findById(id, (err, producto) => {
    if (err) {
      console.log("error", err.name);
      return res
        .status(500)
        .send({ message: `Error al borrar el producto: ${err}` });
    }

    producto.remove((err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error al borrar el producto: ${err}` });
      }
      res.status(200).send({ message: "El producto a sido eliminado." });
    });
  });

  // Producto.findByIdAndRemove(id)
  //   .then((result) => {
  //     return res
  //       .status(204)
  //       .send({ message: `El producto ${id} a sido eliminado.` });
  //   })
  //   .catch((error) => next(error));
}

// middleware
export function next(error, req, res, next) {
  console.log(error);
  if (error.name === "CastError") {
    res.status(400).send({ error: "ID mal formado." });
  } else {
    res.status(500).end();
  }
}
