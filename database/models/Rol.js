module.exports = (sequelize, dataTypes) => {
    let alias = "Rol";

    let cols = {        
        rol_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        rol_descripcion: {
            type: dataTypes.VARCHAR(20),
        } 
    };

    let config = {
        tablename: "Rol",
        timestamps: false
    };


    const Rol = sequelize.define(alias, cols, config)

    return Rol
}


