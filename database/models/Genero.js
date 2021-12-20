const Libro = require('./Libro');


module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";

    let cols = {        
        genero_id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        genero_descripcion : {
            type: dataTypes.STRING(30),
        } 
    };

    let config = {
        tablename: "Generos",
        timestamps: false
    };
    
    const Genero = sequelize.define(alias, cols, config)
    /*
    Genero.associate = function(){
        Genero.belongsTo(Libro, {
            as: "libro_genero",
            foreignKey: "libro_genero_id"
        })
    }*/
    
    return Genero
}

