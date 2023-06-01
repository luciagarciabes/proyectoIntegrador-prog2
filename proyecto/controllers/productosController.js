const db= require("../database/models")
const datos= require("../data/datos")
const Producto= db.Producto
const op= db.Sequelize.Op;


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
        let busqueda= req.query.search
             db.Producto.findAll({ 
                include: [{association: "productoUsuarios"}], 
                where: {
                    [op.or]: [
                        {nombre_producto: {[op.like] : "%" + busqueda+ "%"}},
                        {descripcion_producto:   {[op.like] : "%" + busqueda+ "%"}}]} ,
                order:[[ "createdAt", "DESC"]]
            }) 
            .then(data => {
                return res.send(data)

            })  
            
            .catch(error =>  {
                res.send(error)
            })
        
    },
    agregarProducto: function(req,res){
        return res.render("product-add")
    }
}




module.exports= productosControlador