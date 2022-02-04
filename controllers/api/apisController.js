const db = require('../../database/models');
const bcrypt = require("bcryptjs");

const apis = {
    updateCart: async function (req, res) {
        await db.Item.update({
            subtotal: Number(req.body.quantity) * Number(req.body.unit_price),
            quantity: Number(req.body.quantity),
        }, {
            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: null,
                product_name: req.body.product_name
            }
        })
        let item = await db.Item.findOne({
            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: null,
                product_name: req.body.product_name
            }
        })

        res.json(item)
    }
}

module.exports = apis