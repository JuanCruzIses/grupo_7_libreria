const db = require("../database/models");
const { Op } = require('sequelize');
const carritoController = {
    carrito: async (req, res) => {
        let items = await db.Item.findAll({

            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: null
            }
        })
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.subtotal
        })
        return res.render("carrito", { items, totalPrice });
    },


    addProduct: async (req, res, next) => {
        let libro = await db.Libro.findByPk(req.params.id);

        let libroencarrito = await db.Item.findOne({
            where: {
                [Op.and]: [
                    { product_name: { [Op.like]: libro.libro_titulo } },
                    { user_id: { [Op.like]: req.session.usuarioLogeado.usuario_id } },
                    { order_id: null }


                ]
            }
        });




        if (!libroencarrito) {
            await db.Item.create({
                item_libro_id:libro.libro_id,
                product_name: libro.libro_titulo,
                unit_price: Number(libro.libro_precio),
                subtotal: Number(req.body.cantidad) * Number(libro.libro_precio),
                quantity: Number(req.body.cantidad),
                image: libro.libro_imagen,
                user_id: Number(req.session.usuarioLogeado.usuario_id),
            }).then(function (item) {

                res.redirect("/carrito")
            })
        }

        else {
            let quantityencontrado = (libroencarrito.quantity) + 1;
            let preciounitarioencontrado = (libroencarrito.unit_price)
            if (libroencarrito) {
                db.Item.update({
                    quantity: quantityencontrado,
                    subtotal: Number(quantityencontrado) * Number(preciounitarioencontrado)
                },
                    {
                        where: {
                            [Op.and]: [
                                { product_name: { [Op.like]: libro.libro_titulo } },
                                { user_id: { [Op.like]: req.session.usuarioLogeado.usuario_id } }

                            ]
                        }
                    }).then(function (item) {

                        res.redirect("/carrito")
                    })
            }
        }
    },





    destroyItem: async (req, res) => {
        await db.Item.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/carrito")
    },
    addOrder: async (req, res) => {

        let items = await db.Item.findAll({
            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: null
            }
        })
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.subtotal
        })
        let orderNew = await db.Pedido.create({
            pedido_precio: totalPrice,
            pedido_usuario_id: Number(req.session.usuarioLogeado.usuario_id),
            pedido_direccion: (req.body.calle + " " + req.body.altura + ", " + "CP:" + req.body.cp + ", " + req.body.localidad + ", " + req.body.pciaId + ", " + req.body.countryId),
            pedido_metodo_pago: (req.body.formadepago),
        })
        await db.Item.update({
            order_id: orderNew.pedido_id
        }, {
            where: {
                user_id: Number(req.session.usuarioLogeado.usuario_id),
                order_id: null
            }
        })
       
     /*  let libro = await db.Libro.findByPk(req.params.id);
        await db.Libro.update({
            libro_stock: Number(libro.libro_stock)-Number(quantityencontrado)
        }, {
            where: {
                libro_titulo: libroencarrito.product_name
            }
        })*/

        return res.redirect("/")
    }

};


module.exports = carritoController;