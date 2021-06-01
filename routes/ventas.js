import * as ventaCtrl from "../controllers/ventas";

module.exports = (app) => {
  // GET ALL
  app.get("/api/ventas", ventaCtrl.getVentas);

  // GET by id
  app.get("/api/ventas/:id", ventaCtrl.getVenta);

  // POST venta
  app.post("/api/ventas", ventaCtrl.addVenta);

  // PUT venta
  app.put("/api/ventas/:id", ventaCtrl.updateVenta);

  // DELETE venta
  app.delete("/api/ventas/:id", ventaCtrl.deleteVenta);
};
