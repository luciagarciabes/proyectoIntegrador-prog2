var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//ruta de perfil
router.get("/profile", function(req, res){
  return res.render()
})

//ruta de editar perfil
router.get("/editarPerfil", function(req,res){
  return res.render()
})

module.exports = router;
