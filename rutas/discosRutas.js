var express = require('express');
var rutaDis = express.Router();

rutaDis.get('/', (req, res) => {
  res.render("Discos/pagDiscos");
});

module.exports = rutaDis;
