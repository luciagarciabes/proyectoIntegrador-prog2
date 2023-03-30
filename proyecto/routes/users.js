var express = require('express');
var router = express.Router();
const usersControlador= require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//ruta de perfil
router.get("/profile", usersControlador.profile)

//ruta de editar perfil
router.get("/editarPerfil", usersControlador.editarPerfil)

module.exports = router;
