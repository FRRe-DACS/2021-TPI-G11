import express from "express";
import consign from "consign";
import "./config/database";

const app = express();

// cargar automáticamente modelos, rutas, esquemas, configuraciones, controladores
consign()
  .include("config/middlewares.js")
  .then("routes")
  .then("config/boots.js")
  .into(app);
