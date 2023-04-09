const datos= require("../data/datos")
const indexControlador = {
    index: function(req, res, next) {
       return res.render("index", {productos: datos.productos});
      },
    login:  function(req,res){
        return res.render("login")
      },
    register:  function(req,res){
        return res.render("register")
      },
}




module.exports= indexControlador