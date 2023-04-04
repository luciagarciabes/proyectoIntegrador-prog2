const datos= require("../data/datos")

const productosControlador= {
    detalleProducto: function(req, res) {
        return res.render("product", {datos})  
    },
    searchResult: function(req,res){       
        return res.render("search-results", {datos})
    },
    agregarProducto: function(req,res){
        return res.render("product-add")
    }
}




module.exports= productosControlador