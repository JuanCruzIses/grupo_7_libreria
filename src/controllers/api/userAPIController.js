import { pool } from '../db.js'
const promisePool = pool.promise();
import bcrypt from 'bcryptjs';

export const list = async (req, res) => {
        db.Usuario.findAll()
        .then(users => {
            const response = {
            meta: {
                status: 200,
                total: users.length,
                url: 'api/users'
            },
            data: users.map(user => {
                return{
                    id: user.usuario_id,
                    usuario: user.usuario_nombre,
                    apellido:user.usuario_apellido,
                    email: user.usuario_email,
                    image: "/images/profileImages/" + user.usuario_email,
                    
                }
            })
            }
            res.json(response)
        })
        .catch(error => console.log(error))
    }

export const ultimo = async (req, res) => {
        db.Usuario.findAll({order:[["usuario_id", "DESC"]], limit:1})
        .then(function (user) {
            user[0].setDataValue("endpoint", "/api/users/lastUser/" + user.length)

            let apiResponse= {
                meta: {
                    status: 200,
                    url:"/api/users/lastUser",
                    total: user.length
                },
                data: user
            }
            res.json(apiResponse)
        })
        .catch(function(error){
            res.json({status:500})
        })
    }

export const create = async (req, res) => {
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

