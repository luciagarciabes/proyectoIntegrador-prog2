const datos= require("../data/datos")
let db= require("../database/models")
const bcrypt = require('bcryptjs');


const usersControlador= {
   profile: function(req, res){

    let id= req.params.id
    db.Usuario.findByPk(id, {
      include:[{association: "usuarioProductos"}],
      order: [[{model: db.Producto, as:"usuarioProductos"}, "createdAt", "DESC"]]}
      
        )
    .then((data) => {
      console.log(data);
      //res.send(data)
      return res.render("profile", {usuario: data})
    })

    .catch((error)=> {
      res.send(error)
    })


    
  },
  editarPerfil: function(req,res){
    let id= req.params.id
    db.Usuario.findByPk(id)
    .then((data)=>{
      return res.render("profile-edit", {usuario: data, error: ""})

    })
    .catch((error)=> {
      res.send(error)
    })

  },
  editarPerfilPost: function(req,res) {
    let id= req.params.id
    if (req.body.contrasennia == "") {
      db.Usuario.update(
        {
          usuario: req.body.usuario,
          fecha_nacimiento: req.body.fecha_nacimiento,
          documento: req.body.nro_documento,
          foto_perfil: req.body.foto_perfil,
  
        }, {where: {id: id}}
      )
      .then((data) => {
        return res.redirect("/users/profile/id/"+id)
      })
      .catch((error )=> {
        res.send(error)
      })
          
    } else{

        //traigo dato del formulario
        let contraseñaForm = req.body.contrasennia
        //validaciones
        if (contraseñaForm.length < 4) {
          return res.render("profile-edit", {error: "La contraseña debe tener al menos 4 caracteres"})
        } else {
        // encripto la contraseña
        let contraseñaEncriptada = bcrypt.hashSync(contraseñaForm, 10); 

          db.Usuario.update(
            {
              usuario: req.body.usuario,
              contrasennia: contraseñaEncriptada,
              fecha_nacimiento: req.body.fecha_nacimiento,
              documento: req.body.nro_documento,
              foto_perfil: req.body.foto_perfil,
            
            }, {where: {id: id}}
          )
          .then((data) => {
            return res.redirect("/")
          })
          .catch((error )=> {
            res.send(error)
          })
      
        }

        }}

}


module.exports= usersControlador