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

    return Subgenero
}
   