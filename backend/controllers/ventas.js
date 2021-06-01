import Venta from "../models/venta";

export function getVentas(req, res) {
  console.log("GET ALL /api/ventas");

  Venta.find({}, (err, venta) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la peticion: ${err}` });
    if (!venta)
      return res.status(404).send({ message: "NO existen ventas." });

    res.status(200).send({ venta });
  });
}

export function getVenta(req, res) {
  console.log("GET BY ID /api/ventas/:id");
  let id = req.params.id;

  Venta.findById(id, (err, venta) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Error al realizar la peticion." });
    if (!venta)
      return res.status(404).send({ message: "El venta no existe." });

    res.status(200).send({ venta });
  });
}

export function addVenta(req, res) {
  console.log("POST /api/ventas");
  console.log(req.body);

  let venta = new Venta(req.body);

  venta.save((err, ventaStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err}` });

    res.status(200).send({ venta: ventaStored });
  });
}

export function updateVenta(req, res) {
  console.log("PUT /api/ventas/:id");
  console.log(req.body);

  let id = req.params.id;
  let update = req.body;

  Venta.findByIdAndUpdate(
    id,
    update,
    { new: true },
    (err, ventaUpdate) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al actualizar el venta: ${err}` });

      res.status(200).send({ venta: ventaUpdate });
    }
  );
}

export function deleteVenta(req, res) {
  console.log("DELET /api/ventas/:id");
  let id = req.params.id;

  Venta.findById(id, (err, venta) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al borrar el venta: ${err}` });

    venta.remove((err) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al borrar el venta: ${err}` });
      res.status(200).send({ message: "El venta a sido eliminado." });
    });
  });
}
