const productosControlador= {
    detalleProducto: function(req, res) {
        return res.render("product")  
    },
    searchResult: function(req,res){       
        return res.render("search-results")
    },
    agregarProducto: function(req,res){
        return res.render("product-add")
    }
}




module.exports= productosControlador