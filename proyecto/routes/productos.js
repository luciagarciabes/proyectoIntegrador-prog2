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

// ruta por post de crear producto
router.post("/agregarProducto", productosControlador.crearProducto)

// ruta por post de crear comentario
router.post("/detalleProducto/:id", productosControlador.crearComentario)

//ruta por get de editar producto
router.get("/editarProducto/:id", productosControlador.editarProductoGet)

//ruta por post de editar producto
router.post("/editarProducto/:id", productosControlador.editarProducto)

// ruta por post eliminar producto
router.post("/eliminarProducto/:id", productosControlador.eliminarProducto)



module.exports = router;