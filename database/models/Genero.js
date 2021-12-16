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
        tablename: "Genero",
        timestamps: false
    };


    const Genero = sequelize.define(alias, cols, config)

    return Genero
}

