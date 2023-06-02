const datos= require("../data/datos");
const db = require('../database/models');

const indexControlador = {
    index: function(req, res, next) {
      let rel =  
      db.Producto.findAll({
        include: [{association: "productoUsuarios"}],
        order: [['createdAt', 'DESC']]}
        )
        .then((data) => {
          console.log(data)
          res.render("index", {productos: data})
        })
        .catch((error)=>{
          return res.send(error);
        })
      },



    login:  function(req,res){
        return res.render("login")
      },
    register: function(req,res) {
      return res.render("register")
    },

    create: function(req,res){
      let errors = {}
      //Validacion mail
      if (req.body.email == "") {
        errors.message = "Email no puede estar vacio.";
        res.locals.errors = errors;
        return res.render("register")

      } else if (req.bodyemail ) {     // falta el condicional 
        errors.message = "El email ingresado ya existe";
        res.locals.errors = errors;
        return res.render("register")
      }

      // validacion contrasena
      if (req.body.contraseña == ""){
        errors.message = "Contraseña no puede estar vacia.";
        res.locals.errors = errors;
        return res.render("register")

      } else if (req.body.contraseña.length < 3){  // chequear si esta OK el 'length'
        errors.message = "La contraseña debe tener mas de tres caracteres.";
        res.locals.errors = errors;
        return res.render("register")
      } 
      let passEncriptada = bcrypt.js.hashSync(req.body.contraseña, 12)
      let usuario = {
        email: req.body.email,
        contraseña: passEncriptada
      }
      User.create(usuario);
      res.redirect('/')  // chequear a donde tiene que redireccionar   
      }
     
}





module.exports= indexControlador