const datos= require("../data/datos")
let db= require("../database/models")

const usersControlador= {
   profile: function(req, res){
    let rel= {include:[{association: "usuarioProductos"}]}

    let id= req.params.id
    db.Usuario.findByPk(id, rel, {raw:true, nest:true}, {
      order: [
        'fecha_carga', 'DESC'
      ]})
    .then((data) => {
      console.log(data);
      return res.render("profile", {usuario: data})
      
    }) 


    
  },
  editarPerfil: function(req,res){
    return res.render("profile-edit", {usuario: datos.usuario})
  }

}





module.exports= usersControlador