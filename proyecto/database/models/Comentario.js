module.exports= function(sequelize, dataTypes) {
    let alias= "Comentario"
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        post_id: {
            type: dataTypes.INTEGER,
            unsigned: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            unsigned: true
        },
        comentario: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
            AllowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            AllowNull: true
        },
        deletedAt: {
            type: dataTypes.DATE,
            AllowNull: true
        }
     }
    let config= {
        tableName: 'comentarios', 
        timestamps: true, 
        underscore: true
    }
    let Comentario= sequelize.define(alias, cols, config)

    //relacion
    // Muchos comentarios pertenecen a un producto
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Producto, {
            as: "comentarioProductos",
            foreignKey: "post_id"
        })
    // Muchos comentarios pertenecen a un usuario
        Comentario.belongsTo(models.Usuario, {
            as: "comentarioUsuarios",
            foreignKey: "usuario_id"
        })
    }
    return Comentario
} 