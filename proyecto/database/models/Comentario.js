module.exports= function(sequelize, dataTypes) {
    let alias= "Comentario"
    let cols= { }
    let config= {
        tableName: 'comentarios', 
        timestamps: false, 
        underscored: true,
    }
    let Comentario= sequelize.define(alias, cols, config)
    return Comentario
} 