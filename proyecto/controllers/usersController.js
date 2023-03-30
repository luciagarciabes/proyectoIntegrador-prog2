const usersControlador= {
   profile: function(req, res){
    return res.render("profile")
  },
  editarPerfil: function(req,res){
    return res.render("profile-edit")
  }

}





module.exports= usersControlador