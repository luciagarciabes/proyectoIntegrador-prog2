var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//ruta de perfil
router.get("/profile", function(req, res){
  return res.render("profile")
})

//ruta de editar perfil
router.get("/editarPerfil", function(req,res){
  return res.render("profile-edit")
})

module.exports = router;
