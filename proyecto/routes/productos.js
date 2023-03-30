var express = require('express');
var router = express.Router();
const productosControlador= require("../controllers/productosController")

const datos= require("../data/datos")

// ruta de lista de productos
router.get("/producto",  function(req, res) {
    return res.render("product")
    
})


//ruta de detalle de producto o search result
router.get("/detalle/id/:id", function(req,res){
    return res.render("search-results")
})

//ruta de product add (solo tiene que renderizar una vista)
router.get('/agegarProducto', function(req,res){
    return res.render("product-add")
})



module.exports = router;