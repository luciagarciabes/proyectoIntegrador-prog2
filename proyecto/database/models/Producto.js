module.exports= function(sequelize, dataTypes) {
    let alias= "Producto"
    let cols= { }
    let config= {
        tableName: 'tabla_productos', 
        timestamps: true, 
        underscored: true,
    }
    let Producto= sequelize.define(alias, cols, config)

    //relaciones
    // Un producto pertenece a un usuario y un producto tiene muchos comentarios
    Producto.associate= function(models){
        Producto.belongsTo(models.Usuario, {
            as: "Usuarios", 
            foreignKey: "usuario_id",
        }),
         Producto.hasMany(models.Comentario, {
            as: "Comentarios",
            foreignKey: ""
         })
        }

    return Producto
} 