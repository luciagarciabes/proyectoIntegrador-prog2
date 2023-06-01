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
            type: dataTypes.STRING,
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion_producto: {
            type: dataTypes.STRING
        },
        fecha_carga: {
            type: dataTypes.DATE
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
        tableName: 'tabla_productos', 
        timestamps: true, 
        
    }
    let Producto= sequelize.define(alias, cols, config)

    //relaciones
    // Un producto pertenece a un usuario 
    Producto.associate= function(models){
        Producto.belongsTo(models.Usuario, {
            as: "productoUsuarios", 
            foreignKey: "usuario_id",
        }),
    //Un producto tiene muchos comentarios
    Producto.hasMany(models.Comentario, {
        as: "productoComentarios",
        foreignKey: "post_id",

         })
        }
    return Producto
} 