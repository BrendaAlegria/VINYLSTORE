var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use("/web",express.static(path.join(__dirname,"/web")));
app.use(express.static('public'));
app.use("/",express.static(path.join(__dirname,"/web")));

require("dotenv").config();
app.use(session({
  secret:process.env.SESSION_SECRETO,
  resave:true,
  saveUnitialized:true
}));

var rutaUsu = require('./rutas/usuariosRutas');
var rutasDis = require('./rutas/discosRutas');
const { session } = require('inspector');


app.use('/', rutaUsu);
app.use('/discos', rutasDis);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
