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
            type: dataTypes.VARCHAR(2000)
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