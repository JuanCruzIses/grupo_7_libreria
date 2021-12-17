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
        tablename: "Subgenero",
        timestamps: false
    };


    const Subgenero = sequelize.define(alias, cols, config)

    Subgenero.associate = function(){
        Subgenero.belongsTo(Libro, {
            as: "libro_subgenero",
            foreignKey: "libro_subgenero_id"
        })
    }

    return Subgenero
}
   