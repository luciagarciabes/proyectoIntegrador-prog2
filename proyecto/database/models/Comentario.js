module.exports= function(sequelize, dataTypes) {
    let alias= "Comentario"
    let cols= { }
    let config= {
        tableName: 'comentarios', 
        timestamps: false, 
        underscored: true,
    }
    let Comentario= sequelize.define(alias, cols, config)

    //relacion
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Usuario, {
            as: "tabla_de_usuarios", 
            foreignKey: "usuario_id"
        })
    }
    return Comentario
} 