var express = require('express');
var router = express.Router();
const productosControlador= require("../controllers/productosController")

const datos= require("../data/datos")

// ruta de detqlle de productos
router.get("/detalleProducto/:id", productosControlador.detalleProducto)


//ruta de  search result
router.get("/searchResult", productosControlador.searchResult)   


//ruta de product add (solo tiene que renderizar una vista)
router.get('/agregarProducto', productosControlador.agregarProducto )



module.exports = router;