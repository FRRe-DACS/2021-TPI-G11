import * as productoCtrl from "../controllers/productos";

module.exports = (app) => {
  // GET ALL
  app.get("/api/productos", productoCtrl.getProductos);

  // GET by id
  app.get("/api/productos/:id", productoCtrl.getProducto);

  // POST producto
  app.post("/api/productos", productoCtrl.addProducto);

  // PUT producto
  app.put("/api/productos/:id", productoCtrl.updateProducto);

  // DELETE producto
  app.delete("/api/productos/:id", productoCtrl.deleteProducto);
};
