module.exports = (app) => {
  app.get("/", (req, res) => {
    console.log("GET /");

    res.status(200).send({ message: "API EMPRESAS FUNCIONANDO." });
  });
};
