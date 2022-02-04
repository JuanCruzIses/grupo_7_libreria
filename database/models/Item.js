module.exports = function (sequelize, dataTypes) {

    const Item = sequelize.define("Item", {
        item_libro_id:dataTypes.INTEGER,
        product_name: dataTypes.STRING,
        unit_price: dataTypes.INTEGER,
        user_id: dataTypes.INTEGER,
        image: dataTypes.STRING,
        subtotal: dataTypes.INTEGER,
        quantity: dataTypes.INTEGER,


    });


    Item.associate = (models) => {


        Item.belongsTo(models.Pedido, {
            as: 'pedidos',
            foreignKey: 'order_id'
        });

        Item.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'user_id'
        });
    };

    /*Item.associate = (models) => {
        Item.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'order_id'
        });
        
        Item.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id' 
        });
    };*/

    return Item;
}