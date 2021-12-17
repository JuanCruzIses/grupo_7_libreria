const Rol = require('./Rol');
const Pedido = require('./Pedido');

module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";

    let cols = {
        usuario_id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        usuario_nombre : {
            type: dataTypes.STRING(20),
            notNull: true
        }, 
        usuario_apellido : {
            type: dataTypes.STRING(20),
            notNull: true
        },
        usuario_imagen: {
            type: dataTypes.STRING(20),
        },
        usuario_email: {
            type : dataTypes.STRING(20),
            notNull : true
        },
        usuario_contraseña : {
            type : dataTypes.STRING(20),
            notNull : true
        },
        usuario_rol_id: {
            type : dataTypes.INTEGER,
            notNull : true,
            references: {
                model: 'Roles',
                key: 'rol_id'}
        }
    }

    let config = {
        tablename: "Usuario",
        timestamps: false
    };


    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = function(){
        Usuario.hasMany(Rol, {
            as: "usuarios_roles",
            foreignKey: "usuario_rol_id"
        })
    }
    
    Usuario.associate = function(){
        Usuario.belongsTo(Pedido, {
            as: "usuarios_pedidos",
            foreignKey: "pedido_usuario_id"
        })
    }

    return Usuario
}