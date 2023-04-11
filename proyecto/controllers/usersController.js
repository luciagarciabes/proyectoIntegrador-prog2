const datos= require("../data/datos")

const usersControlador= {
   profile: function(req, res){
    return res.render("profile" ,{usuario: datos.usuario, productos:datos.productos})
  },
  editarPerfil: function(req,res){
    return res.render("profile-edit", {usuario: datos.usuario})
  }

}





module.exports= usersControlador