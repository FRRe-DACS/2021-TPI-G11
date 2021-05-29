module.exports = (app) => {
  const PORT = app.get("port");

  app.listen(PORT, () => {
    console.log(`API REST corriendo en http://localhost:${PORT}`);
  });
};
