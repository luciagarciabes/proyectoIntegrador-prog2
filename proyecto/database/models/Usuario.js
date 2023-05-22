module.exports= function(sequelize, dataTypes) {
    let alias= "Usuario"
    let cols= { }
    let config= {
        tableName: 'tabla_de_usuarios', 
        timestamps: true, 
        underscored: true,
    }
    let Usuario= sequelize.define(alias, cols, config)
    // relacion
    // Un usuario tiene muchos productos
   
    Usuario.associate= function(models){
     Usuario.hasMany(models.Producto, {
        as: "Productos",
        foreignKey: "usuario_id"
     }) 
    }
    return Usuario
} 