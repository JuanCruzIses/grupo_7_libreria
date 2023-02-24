import { pool } from '../db.js'
const promisePool = pool.promise();

export const listardetallesPedidos = async (req, res) => {
        let pedido = req.params.id;
        console.log(req.params.id)
        let items = await db.Item.findAll({
            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: Number(pedido)//{ [Op.ne] :null},order_id:req.params.id
            }
        })
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.subtotal
        })

        let nroorden = req.body.nroorden;
        console.log(nroorden)

        return res.render("detallesdepedidos", { items, nroorden, totalPrice });
    }