var express = require('express');
var router = express.Router();

const datos= require("../data/datos")

// ruta de lista de productos
router.get("/lista",  function(req, res) {
    return res.render()
    
})


//ruta de detalle de producto o search result
router.get("/detalle/id/:id", function(req,res){
    return res.render()
})

//ruta de product add (solo tiene que renderizar una vista)
router.get('/agegarProducto', function(req,res){
    
})



module.exports = router;