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
        // si el usuario esta logueado, redigirlo a home 
          if(req.session.usuario != undefined) {
            return res.redirect("/")
          } else {
            return res.render("login")
          }
        
      },

    processLogin: function(req, res) {
      //1 buscar los datos de la db
         // req.body para traer el dato del form y de ahi buscarlo en la db para traer el usuario 
          db.Usuario.findOne({
            where: [
                    {usuario: req.body.usuario} ]
          })

          .then(data => {

          })
          
      // 2 ponerlos en session (condicional que vea si el usuario esta en la base, si el usuario esta en la base, definir el session con los datos)
          req.session.usuarioLogueado = {
          usuario: req.body.usuario,
          contraseña: req.body.contraseña
        }

     // 3 preguntar si el usuario tildó el checkbox de recordarme. If checkeado, creo una cookie 
     if (req.body.recordarme != undefined){
      res.cookie("cookieUsuario", [req.session.usuarioLogueado.usuario, req.session.usuarioLogueado.contraseña], {maxAges: 1000*60 * 23484444924} )

     }
        return  res.redirect("/")


     
    },
    logout: function(req, res) {
      //Destruyo la sesión
      req.session.destroy()   
      //Destruyo la cookie
          res.clearCookie("cookieUsuario")
      return res.redirect("/")
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