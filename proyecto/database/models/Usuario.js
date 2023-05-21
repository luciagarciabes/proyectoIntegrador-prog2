module.exports= function(sequelize, dataTypes) {
    let alias= "Usuario"
    let cols= { }
    let config= {
        tableName: 'tabla_de_usuarios', 
        timestamps: false, 
        underscored: true,
    }
    let Producto= sequelize.define(alias, cols, config)
    return Producto
} 