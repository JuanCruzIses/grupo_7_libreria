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
            type: dataTypes.VARCHAR(20),
            notNull: true
        }, 
        usuario_apellido : {
            type: dataTypes.VARCHAR(20),
            notNull: true
        },
        usuario_email: {
            type : dataTypes.VARCHAR(20),
            notNull : true
        },
        usuario_contraseña : {
            type : dataTypes.VARCHAR(20),
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

    return Usuario
}