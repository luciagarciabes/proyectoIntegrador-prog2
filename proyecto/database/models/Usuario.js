module.exports= function(sequelize, dataTypes) {
    let alias= "Usuario"
    let cols= { }
    let config= {
        tableName: 'tabla_de_usuarios', 
        timestamps: false, 
        underscored: true,
    }
    let Usuario= sequelize.define(alias, cols, config)
    // relacion
    Usuario.associate= function(models){
        Usuario.hasMany(models.Comentrio, {
            as: "comentario", 
            foreignKey: "usuario_id"
        }),
        Usuario.belongsToMany(models.Producto, {
            as:"productos",
            through:"comentarios",
            foreignKey: "usuario_id",
            otherKey: "post_id",
            timestamps: false
        })
    } 
    return Usuario
} 