const db = require('../../database/models');
const bcrypt = require('bcryptjs');

const userAPIController = {
    list: (req, res) => {
        db.Usuario.findAll()
        .then(users => {
            const response = {
            meta: {
                status: 200,
                total: users.length,
                url: 'api/users'
            },
            data: users
            }
            res.json(response)
        })
        .catch(error => console.log(error))
    },
    create : (req, res) => {
        Usuario.create(
            {
                usuario_nombre: req.body.nombre,
                usuario_apellido: req.body.apellido,
                usuario_email: req.body.email,
                usuario_contrasenia: bcrypt.hashSync(req.body.contraseña, 12),
                usuario_rol_id: 2,
            }
            .then(confirm => {
                const response = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/create'
                    },
                    data: confirm
                }
                res.json(response)
                })
                .catch(error => console.log(error))
        )
    }
}

module.exports = userAPIController;