const indexControlador = {
    index: function(req, res, next) {
        res.render("index");
      },
    login:  function(req,res){
        return res.render("login")
      },
    register:  function(req,res){
        return res.render("register")
      },
    headerLogueado: function(req,res){
        return res.render("headerLogueado")
      },
}




module.exports= indexControlador