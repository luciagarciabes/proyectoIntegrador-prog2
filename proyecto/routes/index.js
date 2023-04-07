var express = require('express');
var router = express.Router();
const indexControlador = require("../controllers/indexController")


/* GET home page. */
router.get('/', indexControlador.index);


//ruta de login
router.get('/login', indexControlador.login)

//ruta de registración
router.get('/register', indexControlador.register)


module.exports = router;
