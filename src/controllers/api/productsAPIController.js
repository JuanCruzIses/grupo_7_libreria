import { pool } from '../db.js'
const promisePool = pool.promise();

export const list = async (req, res) => {
    try {

        db.Libro.findAll()
            .then(products => {
                const response = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products.map(product => {
                        return {
                            id: product.libro_id,
                            titulo: product.libro_titulo,
                            editorial: product.libro_editorial,
                            stock: product.libro_stock,
                            precio: product.libro_precio,
                            image: "/images/profileImages/" + product.usuario_email,

                        }
                    })
                }
                res.json(response)
            })
            .catch(error => console.log(error))
    } catch (error) {
        const response = {
            meta: {
                status: 400,
                error: error,
                url: 'api/v1/products'
            }
        }
        res.json(response)
    }
}

export const ultimo = async (req, res) => {
    db.Libro.findAll({ order: [["libro_id", "DESC"]], limit: 1 })
        .then(function (product) {
            product[0].setDataValue("endpoint", "/api/products/lastProduct/" + product.length)

            let apiResponse = {
                meta: {
                    status: 200,
                    url: "/api/products/lastProduct",
                    total: product.length
                },
                data: product
            }
            res.json(apiResponse)
        })
        .catch(function (error) {
            res.json({ status: 500 })
        })
}

export const generos = async (req, res) => {
    db.Genero.findAll()
        .then(generos => {
            let arrayGeneros = []
            for (let i = 0; i < generos.length; i++) {
                arrayGeneros.push({
                    nombre: generos[i].dataValues.genero_descripcion,

                })
            }
            const response = {
                meta: {
                    status: 200,
                    url: "/api/products/generos",
                    total: generos.length,
                    generoNames: arrayGeneros

                },
                data: generos.map(genero => {
                    return {
                        id: genero.genero_id,
                        name: genero.genero_descripcion,


                    }
                })
            }
            res.json(response)
        })
        .catch(error => console.log(error))
}

