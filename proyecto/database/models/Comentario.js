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
        foreignKey: {
            
        },
        foreignKey: {
            
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