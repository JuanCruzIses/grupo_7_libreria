const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const registerController = {
    vistaRegistro : (req, res) => {
        res.render("register")
    },

    registrar : (req, res) => {
        const nuevoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: req.body.contraseña,
            confirmaContraseña: req.body.confirmaContraseña,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            calleYNumero: req.body.calleYNumero,
            piso: req.body.piso,
        }
        listaUsuarios.push(nuevoUsuario);
        fs.writeFileSync(usersFilePath, JSON.stringify(listaUsuarios, null))
        res.redirect('/')
    }
};

module.exports = registerController;