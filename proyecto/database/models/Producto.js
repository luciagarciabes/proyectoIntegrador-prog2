module.exports= function(sequelize, dataTypes) {
    let alias= "Producto"
    let cols= { }
    let config= {
        tableName: 'tabla_productos', 
        timestamps: false, 
        underscored: true,
    }
    let Producto= sequelize.define(alias, cols, config)
    return Producto
} 