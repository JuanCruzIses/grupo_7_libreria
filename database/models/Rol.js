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
        tablename: "Roles",
        timestamps: false
    };


    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function(models){
        Rol.belongsTo(models.Usuario, {
            as: "usuario",//aca tiene que ir el nombre de alias que esta en usuario.js
            foreignKey: "usuario_rol_id"
        })
    }

    return Rol
}


