const Libro = require('./Libro');

module.exports = (sequelize, dataTypes) => {
    let alias = "Subgenero";

    let cols = {        
        subgenero_id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        subgenero_descripcion : {
            type: dataTypes.STRING(30),
        } 
    };

    let config = {
        tablename: "Subgeneros",
        timestamps: false
    };


    const Subgenero = sequelize.define(alias, cols, config)

    Subgenero.associate = function(models){
        Subgenero.belongsTo(models.Libro, {
            as: "libros",
            foreignKey: "libro_subgenero_id"
        })
    }

    return Subgenero
}
   