const Libro = require('./Libro');

module.exports = (sequelize, dataTypes) => {
    let alias = "Autor";

    let cols = {        
        autor_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        autor_nombre: {
            type: dataTypes.STRING(100),
        },
        autor_biografia: {
            type: dataTypes.TEXT,
        },
    };

    let config = {
        tableName: "autores",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'

    };


    const Autor = sequelize.define(alias, cols, config)
    
    
    Autor.associate = function(models){
        Autor.hasMany(models.Libro, {
            as: "libro_autor",
            foreignKey: "libro_autor_id"
        })
    }
    
    return Autor
}
   
