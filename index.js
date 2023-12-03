const express = require('express');
var path = require('path');
var cors=require("cors");
//const session=require('express-session');
const  rutaUsu = require('./rutas/usuariosRutas');
const rutasDis = require('./rutas/discosRutas');

var session=require("cookie-session");
require("dotenv").config();

var app = express();

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
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



app.use('/', rutaUsu);
app.use('/dis', rutasDis);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
