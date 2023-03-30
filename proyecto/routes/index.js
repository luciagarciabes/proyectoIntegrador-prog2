var express = require('express');
var router = express.Router();
const indexControlador = require("../controllers/indexController")


/* GET home page. */
router.get('/', indexControlador.index);


//ruta de index
//router.get('/index', function (req,res) {
 // return res.render("")
  
//})

//ruta de login
router.get('/login', indexControlador.login)

//ruta de registración
router.get('/register', indexControlador.register)

//ruta de header logueado
router.get("/headerLogueado", indexControlador.headerLogueado)

module.exports = router;
