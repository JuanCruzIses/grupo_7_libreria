const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { localsName } = require('ejs');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getAllUsers(){return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));}

const loginController = {
    vistaLogin : (req, res) => {
        res.render('login')
    },

    login : (req, res) => {
        const listaUsuarios = getAllUsers();
        const usuarioEncontrado = listaUsuarios.find(usuario => usuario.email == req.body.email)

        let errores = validationResult(req)
        
        let verificaContraseñaHash = bcrypt.compareSync(req.body.contraseña, usuarioEncontrado.contrasenia)

        if (locals.usuarioEncontrado && verificaContraseñaHash) {
            res.send("Estas registrado")
        } else {
            return res.render('login', {errores: [{ msg: 'Por favor verifique ingresar correctamente sus datos' }] } ) 
        }
    } 
};



module.exports = loginController;

module.exports = loginController;