var express = require('express');
var router = express.Router();
const productosControlador= require("../controllers/productosController")

const datos= require("../data/datos")

// ruta de lista de productos
router.get("/detalleProducto",  function(req, res) {
    return res.render("product")
    
})


//ruta de detalle de producto o search result
router.get("/searchResult", function(req,res){       // hay que poner uno solo? o poner una ruta parametrica
    return res.render("search-results")
})

//ruta de product add (solo tiene que renderizar una vista)
router.get('/agregarProducto', function(req,res){
    return res.render("product-add")
})



module.exports = router;