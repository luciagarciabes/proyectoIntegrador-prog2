var express = require('express');
var router = express.Router();
const usersControlador= require("../controllers/usersController")


//ruta de perfil
router.get("/profile/id/:id", usersControlador.profile)

//ruta de editar perfil
router.get("/editarPerfil/:id", usersControlador.editarPerfil)

//ruta edita perfil
router.post("/editarPerfil/:id", usersControlador.editarPerfilPost)



module.exports = router;
