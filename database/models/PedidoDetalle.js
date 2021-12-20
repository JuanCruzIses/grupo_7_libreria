const Libro = require('./Libro');
const Pedido = require('./Pedido');

module.exports = (sequelize, dataTypes) => {
    let alias = "PedidoDetalle";

    let cols = {        
        pedidoDetalle_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        pedidoDetalle_pedido_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'Pedido',
                key: 'pedido_id'}
        },
        pedidoDetalle_libro_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'Libro',
                key: 'libro_id'}
        },
        pedidoDetalle_descripcion: {
            type: dataTypes.STRING(100),
        },
        pedidoDetalle_cantidad: {
            type: dataTypes.INTEGER,
        },
        pedidoDetalle_precio: {
            type: dataTypes.DECIMAL,
            notNull: true
        }
    };

    let config = {
        tablename: "PedidoDetalles",
        timestamps: false
    };


    const PedidoDetalle = sequelize.define(alias, cols, config)

    PedidoDetalle.associate = function(models){
        PedidoDetalle.belongsTo(models.Pedido, {
            as: "pedidoDetalles",
            foreignKey: "pedidoDetalle_pedido_id"
        })
    }
    
    PedidoDetalle.associate = function(models){
        PedidoDetalle.belongsTo(models.Libro, {
            as: "libros",
            foreignKey: "pedidoDetalle_libro_id"
        })
    }
    return PedidoDetalle
}
                