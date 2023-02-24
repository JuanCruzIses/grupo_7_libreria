import { pool } from '../db.js'
const promisePool = pool.promise();

export const listarPedidos = async (req, res) => {
        let pedidos = await db.Pedido.findAll({

            where: {
                pedido_usuario_id: Number(req.session.usuarioLogeado.usuario_id),
            }
        })
        let items = await db.Item.findAll({

            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: { [Op.ne]: null },//{ [Op.ne] :null},order_id:req.params.id
            }
        })
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.subtotal
        })

        return res.render("pedidos", { items, totalPrice, pedidos });
    }