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
        autor_apellido: {
            type: dataTypes.STRING(100),
        },
        autor_biografia: {
            type: dataTypes.TEXT,
        },
    };

    let config = {
        tablename: "Autor",
        timestamps: false
    };


    const Autor = sequelize.define(alias, cols, config)

    return Autor
}
   
