const db= require("../database/models")
const datos= require("../data/datos")
const Producto= db.Producto

const productosControlador= {
    detalleProducto: function(req, res) { 
        let id= req.params.id
        //relaciones

        Producto.findByPk(id, {raw:true})
            .then(function (data) {
                console.log(id);
                console.log(data);
                return res.render("product", {datos}) //le paso otros datos
                
            }). catch(function(error){
                res.render()
            })

       
    },
    searchResult: function(req,res){       
        return res.render("search-results", {datos})
    },
    agregarProducto: function(req,res){
        return res.render("product-add")
    }
}




module.exports= productosControlador