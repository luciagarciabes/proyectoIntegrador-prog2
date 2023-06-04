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

//ruta de registración
router.get('/register', indexControlador.register)

// ruta de crear usuario
router.post('/register', indexControlador.create)




module.exports = router;
