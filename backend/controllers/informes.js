import Informe from "../models/informe";

export function getInformes(req, res) {
  console.log("GET ALL /api/informes");

  Informe.find({}, (err, informe) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la peticion: ${err}` });
    if (!informe)
      return res.status(404).send({ message: "NO existen informes." });

    res.status(200).send({ informe });
  });
}

export function getInforme(req, res) {
  console.log("GET BY ID /api/informes/:id");
  let id = req.params.id;

  Informe.findById(id, (err, informe) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Error al realizar la peticion." });
    if (!informe)
      return res.status(404).send({ message: "El informe no existe." });

    res.status(200).send({ informe });
  });
}

export function addInforme(req, res) {
  console.log("POST /api/informes");
  console.log(req.body);

  let informe = new Informe(req.body);

  informe.save((err, informeStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err}` });

    res.status(200).send({ informe: informeStored });
  });
}

export function updateInforme(req, res) {
  console.log("PUT /api/informes/:id");
  console.log(req.body);

  let id = req.params.id;
  let update = req.body;

  Informe.findByIdAndUpdate(
    id,
    update,
    { new: true },
    (err, informeUpdate) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al actualizar el informe: ${err}` });

      res.status(200).send({ informe: informeUpdate });
    }
  );
}

export function deleteInforme(req, res) {
  console.log("DELET /api/informes/:id");
  let id = req.params.id;

  Informe.findById(id, (err, informe) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al borrar el informe: ${err}` });

    informe.remove((err) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al borrar el informe: ${err}` });
      res.status(200).send({ message: "El informe a sido eliminado." });
    });
  });
}
