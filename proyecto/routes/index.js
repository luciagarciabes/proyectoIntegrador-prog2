var express = require('express');
var router = express.Router();
const indexControlador = require("../controllers/indexController")


/* GET home page. */
router.get('/', indexControlador.index);

//ruta de login
router.get('/login', indexControlador.login)

//ruta de process login
router.post("/", indexControlador.processLogin)   

// ruta de logout
router.post("/logout", indexControlador.logout)

//ruta de registración por post
router.post('/register', indexControlador.createUsuario)

//ruta de registración por get
router.get('/register', indexControlador.register)






module.exports = router;
