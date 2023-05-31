module.exports= function(sequelize, dataTypes) {
    let alias= "Usuario"
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        usuario: {
            type: dataTypes.STRING,
            unique: true
        },
        contrasena: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        documento: {
            type: dataTypes.INTEGER
        },
        foto_perfil: {
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
        tableName: 'tabla_de_usuarios', 
        timestamps: true, 
        underscored: true,
    }
    let Usuario= sequelize.define(alias, cols, config)
    // relacion
    // Un usuario tiene muchos productos
    Usuario.associate= function(models){
        Usuario.hasMany(models.Producto, {
        as: "usarioProductos",
        foreignKey: "usuario_id"
        },
    // Un usuario tiene muchos comentarios
        Usuario.hasMany(models.Comentario, {
            as: "usuarioComentarios",
            foreignKey: "usuario_id"
        })
        ) 
    }
    return Usuario
} 