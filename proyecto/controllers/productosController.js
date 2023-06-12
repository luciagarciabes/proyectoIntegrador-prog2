const db= require("../database/models")
const datos= require("../data/datos");
const Comentario = require("../database/models/Comentario");
const Producto= db.Producto
const op= db.Sequelize.Op;


const productosControlador= {
    detalleProducto: function(req, res) { 
        let id= req.params.id
        //relaciones

        Producto.findByPk(id, {include: [
                                            {association: 'productoComentarios', include: [{association: "comentarioUsuarios"}]},
                                            {association: 'productoUsuarios'}],
                                            order: [[{model: db.Comentario, as: "productoComentarios"}, "createdAt", "DESC"]]
                                        })

            .then((data)=> {
                console.log(id);
                console.log(data);
                //res.send(data)
                return res.render("product", {producto:data}) //le paso otros datos
                
            }). catch((error)=> {
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
                return res.render( "search-results", {productos:data})

            })  
            
            .catch(error =>  {
                res.send(error)
            })
        
    },
    agregarProducto: function(req,res){
        return res.render("product-add")
    },
    crearProducto: function(req, res){
        db.Producto.create ({
            usuario_id: req.session.usuarioLogueado.id,
            imagen: req.body.imagen,
            nombre_producto: req.body.nombreProducto,
            descripcion_producto: req.body.descripcion,
            fecha_carga: req.body.fecha
        })
        .then((data)=> {
            return res.redirect('/')
        })
        .catch((error)=>{
            res.send(error)
        })
        
    },
    crearComentario: function(req,res){
        db.Comentario.create({
            usuario_id: req.session.usuarioLogueado.id,
            post_id: req.params.id,
            comentario: req.body.comentario
        })
        .then((data)=> {
            return res.redirect('/')
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    editarProducto: function (req, res) {
        db.Producto.update({
            imagen: req.body.imagen,
            nombre_producto: req.body.nombreProducto,
            descripcion_producto: req.body.descripcion,
            fecha_carga: req.body.fecha
        }, {where: {id: req.params.id}}
        
        )  
        .then((data)=> {
            return res.redirect('/')
        })
        .catch((error) => {
            res.send(error)
        })
    },
    editarProductoGet: function(req, res){
        let id= req.params.id
        Producto.findByPk(id)

            .then((data)=> {
            //res.send(data)
            return res.render("product-edit", {producto:data}) //le paso otros datos

            }). catch((error)=> {
            res.send(error)
            })
                  
    },
    eliminarProducto: function(req,res) {
        let id= req.params.id
        Producto.destroy({where: {id: id}})
        .then((data) => {
            return res.redirect('/')
        })
        .catch((error)=> {
            res.send(error)
        })
    }

}




module.exports= productosControlador