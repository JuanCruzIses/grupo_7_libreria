const Usuario = require('./Usuario');

module.exports = (sequelize, dataTypes) => {
    let alias = "Rol";

    let cols = {        
        rol_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            notNull: true
        },
        rol_descripcion: {
            type: dataTypes.STRING(20),
        } 
    };

    let config = {
        tablename: "Rol",
        timestamps: false
    };


    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function(){
        Rol.belongsTo(Usuario, {
            as: "usuarios_roles",
            foreignKey: "usuario_rol_id"
        })
    }

    return Rol
}


