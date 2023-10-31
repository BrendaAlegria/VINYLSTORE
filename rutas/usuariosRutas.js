var express = require('express');
var ruta= express.Router();

ruta.get('/', (req, res) => {
  res.render("Usuarios/pagInicio");
});

ruta.get("/galeria", (req, res) => {
  res.render("Usuarios/galeria");
});
ruta.get("/inicio", (req, res) => {
  res.render("Usuarios/pagInicio");
});


ruta.get("/registro", (req, res) => {
  res.render("Usuarios/registrarme");
});
module.exports = ruta;