const express = require("express");
const app = express();

app.get("/redirecionar", (req, res) => {
  res.redirect("https://www.google.com.br/");
});

app.get("/", (req, res) => {
  res.send({ message: "https://www.google.com.br/" });
});

app.listen(3030, () => {
  console.log("Servidor iniciado na porta 3000");
});
