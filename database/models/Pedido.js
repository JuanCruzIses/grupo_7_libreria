const PedidoDetalle = require('./PedidoDetalle');
const Usuario = require('./Usuario');

module.exports = (sequelize, dataTypes) => {
    let alias = "Pedido";

    let cols = {        
        pedido_id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        pedido_usuario_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'Usuario',
                key: 'usuario_id'}
        },
        pedido_direccion: {
            type: dataTypes.STRING(60),
        },
        pedido_precio: {
            type: dataTypes.DECIMAL,
        },
        pedido_metodo_pago: {
            type: dataTypes.STRING(60),
        },
    };

    let config = {
        tablename: "Pedido",
        timestamps: false
    };


    const Pedido = sequelize.define(alias, cols, config)

    Pedido.associate = function(){
        Pedido.hasMany(Usuario, {
            as: "usuarios_pedidos",
            foreignKey: "pedido_usuario_id"
        })
    }

    
    Pedido.associate = function(){
        Pedido.belongsTo(PedidoDetalle, {
            as: "pedido_detalle",
            foreignKey: "pedidoDetalle_pedido_id"
        })
    }

    return Pedido
}



   