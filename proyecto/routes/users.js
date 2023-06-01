var express = require('express');
var router = express.Router();
const usersControlador= require("../controllers/usersController")


//ruta de perfil
router.get("/profile/id/:id", usersControlador.profile)

//ruta de editar perfil
router.get("/editarPerfil", usersControlador.editarPerfil)



module.exports = router;
