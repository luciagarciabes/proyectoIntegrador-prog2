module.exports= function(sequelize, dataTypes) {
    let alias= "Producto"
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            unsigned: true
        },
        imagen: {
            type: dataTypes.VARCHAR(300),
        },
        nombre_producto: {
            type: dataTypes.VARCHAR(250)
        },
        descripcion_producto: {
            type: dataTypes.VARCHAR(1000)
        },
        fecha_carga: {
            type: dataTypes.DATE
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
     }
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
         Producto.belongsToMany(models.Comentario, {
            as: "Comentarios",
            through: "comentarios",
            foreignKey: "post_id",
            otherKey: "usuario_id",
            timestamps: false

         })
        }

    return Producto
} 