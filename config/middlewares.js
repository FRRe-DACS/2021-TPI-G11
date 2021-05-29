import express from "express";

module.exports = (app) => {    
  app.set("json spaces", 4);
  app.set("port", process.env.PORT || 3000);

  app.use(express.json()); // para que la api acepte json
  app.use(express.urlencoded({ extended: false })); // para interpretar json
};
