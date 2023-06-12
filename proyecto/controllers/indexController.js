const datos= require("../data/datos");
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const indexControlador = {
    index: function(req, res, next) {
      let rel =  
      db.Producto.findAll({
        include: [{association: "productoUsuarios"}],
        order: [['createdAt', 'DESC']]}
        )
        .then((data) => {
          //console.log(data)
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
            return res.render("login", {mensaje: ""})
          }
        
      },

    processLogin: function(req, res) {
      
         //1  traigo el dato del form y lo busco en la db para traer el usuario 
       
          db.Usuario.findOne({
            where: [{email: req.body.email} ]
          })

          .then(data => {
            
                  // 2 ponerlos en session (condicional que vea si el usuario esta en la base, si el usuario esta en la base, definir el session con los datos
                 if (data != null) {
                  // res.send(data)
                        //validar la contraseña
                        let check= bcrypt.compareSync(req.body.contrasenia, data.contrasennia)
                        console.log(check);
                        if (check) {
                              //creo la session
                              req.session.usuarioLogueado= data
                              // 3 preguntar si el usuario tildó el checkbox de recordarme. If checkeado, creo una cookie  
                              if (req.body.recordarme != undefined){
                              res.cookie("cookieUsuario", req.session.usuarioLogueado.id , {maxAges: 1000*60 * 15} )
                              // redirigimos al perfil
                              res.redirect("/users/profile/id/"+ data.id) 
                              }
                              res.redirect("/users/profile/id/"+ data.id) 
                          
                        }else {
                          //si no es correcta la contraseña
                          return res.render("login", {mensaje: "Contraseña Incorrecta"})
                        }
                    
                 } else {
                  req.session.usuarioLogueado= undefined
                  let mensaje= "Usuario no registrado"
                  console.log(mensaje);
                  res.render("login",{mensaje: mensaje} )
                 }

          }).catch((error) => {
            res.send(error)
          }
          )
     
    },
    logout: function(req, res) {
      //Destruyo la sesión
      req.session.destroy()   
      //Destruyo la cookie
          res.clearCookie("cookieUsuario")
      return res.redirect("/")
    },

    register: function (req, res) {
      let error= ""
      res.render('register', {error: error})
    },

    createUsuario: function(req,res) {
      //traigo los datos del formulario
      let emailForm = req.body.email
      let contraseñaForm = req.body.contraseña
      // encripto la contraseña y la comparo
      let contraseñaEncriptada = bcrypt.hashSync(contraseñaForm, 10);
      let check = bcrypt.compareSync(contraseñaForm, contraseñaEncriptada);
      console.log(check); // true

      //validaciones
      if (emailForm == ""){
        return res.render("register", {error: "Ingrese un mail"})
      } else if (contraseñaForm.length < 4) {
        return res.render("register", {error: "La contraseña debe tener al menos 4 caracteres"})
      } else {
        // busco en la base de datos si ya existe el usuario
        db.Usuario.findOne({
          where: [{email: emailForm}]
        })
        .then((data) => {
          if (data != undefined) {
            return res.render("register", {error: "El mail ya existe"})
        } else {
          // Creo el usuario
          db.Usuario.create({
            email: emailForm,
            contrasennia: contraseñaEncriptada,
            usuario: req.body.usuario,
            fecha_nacimiento: req.body.fecha_nacimiento,
            documento: req.body.nro_documento,
            foto_perfil: req.body.foto_perfil
          })
          return res.redirect('/login')
        }
      }).catch((error) => {
        res.send(error)
      } )
    }}     
}





module.exports= indexControlador