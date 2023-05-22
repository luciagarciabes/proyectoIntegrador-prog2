module.exports= function(sequelize, dataTypes) {
    let alias= "Comentario"
    let cols= { }
    let config= {
        tableName: 'comentarios', 
        timestamps: true, 
        underscored: true,
    }
    let Comentario= sequelize.define(alias, cols, config)

    //relacion
    // Muchos comentarios pertenecen a muchos productos (la pivot es comenatios también). muchos a muchos
    Comentario.associate= function(models){
        Comentario.belongsToMany(models.Producto, {
            as: "Productos",
            through: "comentarios",
            foreignKey: "usuario_id",
            otherKey: "post_id",
            timestamps: false
        })
       
    }
    return Comentario
} 