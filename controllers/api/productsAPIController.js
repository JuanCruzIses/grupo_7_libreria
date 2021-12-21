const db = require('../../database/models');

const productsAPIController = {
    list: (req, res) => {
        db.Libro.findAll()
        .then(products => {
            const response = {
            meta: {
                status: 200,
                total: usuario.length,
                url: 'api/products'
            },
            data: products
            }
            res.json(response)
        })
        .catch(error => console.log(error))
    }
}

module.exports = productsAPIController;