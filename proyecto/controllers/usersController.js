const datos= require("../data/datos")
let db= require("../database/models")

const usersControlador= {
   profile: function(req, res){
    let id= req.params.id

    let criterio = {
      include: [{association: "productoUsuarios"}],
      where: [{
        usuario_id: id
      }],
      order: [["createdAt", "DESC"]]
    };

    db.Producto.findAll(criterio)
    .then(function(result) {
      let losProductos = result;
      let elUsuario = result[0].productoUsuarios;
      
      return res.render("profile", {productos: losProductos, usuario: elUsuario})
    })
    .catch(function(error) {
      console.log(error);
    })


    
  },
  editarPerfil: function(req,res){
    return res.render("profile-edit", {usuario: datos.usuario})
  },
  editarPerfilPost: function(req,res) {

  }

}





module.exports= usersControlador