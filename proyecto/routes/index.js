var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});


//ruta de index
//router.get('/index', function (req,res) {
 // return res.render("")
  
//})

//ruta de login
router.get('/login', function(req,res){
  return res.render("login")
})

//ruta de registración
router.get('/register', function(req,res){
  return res.render("register")
})

//ruta de header logueado
router.get("/headerLogueado", function(req,res){
  return res.render("headerLogueado")
})

module.exports = router;
