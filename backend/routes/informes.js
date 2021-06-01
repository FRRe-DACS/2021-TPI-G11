import * as informeCtrl from "../controllers/informes";

module.exports = (app) => {
  // GET ALL
  app.get("/api/informes", informeCtrl.getInformes);

  // GET by id
  app.get("/api/informes/:id", informeCtrl.getInforme);

  // POST informe
  app.post("/api/informes", informeCtrl.addInforme);

  // PUT informe
  app.put("/api/informes/:id", informeCtrl.updateInforme);

  // DELETE informe
  app.delete("/api/informes/:id", informeCtrl.deleteInforme);
};
