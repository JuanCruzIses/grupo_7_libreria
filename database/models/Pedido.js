const PedidoDetalle = require('./PedidoDetalle');
const Usuario = require('./Usuario');

module.exports = (sequelize, dataTypes) => {
    let alias = "Pedido";

    let cols = {
        pedido_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        pedido_usuario_id: {
            type: dataTypes.INTEGER,
            /* references: {
                 model: 'Usuario',
                 key: 'usuario_id'}*/
        },
        pedido_direccion: {
            type: dataTypes.STRING(200),
        },
        pedido_precio: {
            type: dataTypes.DECIMAL,
        },
        pedido_metodo_pago: {
            type: dataTypes.STRING(60),
        },
    };

    let config = {
        tablename: "Pedidos",
        timestamps: false
    };


    const Pedido = sequelize.define(alias, cols, config)

    Pedido.associate = (models) => {
        Pedido.hasMany(models.Item, {
            as: 'items',
            foreignKey: 'order_id'
        });


        Pedido.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'pedido_usuario_id'
        });


        /* Pedido.belongsTo(models.PedidoDetalle, {
             as: "pedidos",
             foreignKey: "pedidoDetalle_pedido_id"
         });*/
    }

    return Pedido;

}




