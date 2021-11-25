const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const registerController = {
    vistaRegistro : (req, res) => {
        res.render("register")
    },

    registrar : (req, res) => {
        let ultimoId = Number(listaUsuarios[listaUsuarios.length -1].id);
		let nuevoUltimoId = (ultimoId + 1).toString();
        let errores = validationResult(req)
        let usuarioEnBD = listaUsuarios.filter(usuario => usuario.email == req.body.email)
        
        if (usuarioEnBD){
            return res.render('register', {errores: [{msg: 'Este email ya se encuentra registrado'}] })
        }

        if (req.body.contraseña == req.body.confirmaContraseña && errores.isEmpty() ) {
            const nuevoUsuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: bcrypt.hashSync(req.body.email, 10),
                contraseña: req.body.contraseña,
                confirmaContraseña: req.body.confirmaContraseña,
                id: nuevoUltimoId,
                categoria:"users",
            }
            listaUsuarios.push(nuevoUsuario);
            fs.writeFileSync(usersFilePath, JSON.stringify(listaUsuarios, null, ' '))
            res.redirect('/login')
        }
        else {
            return res.render ("register", { errores : errores.array(), old : req.body })
        } 
         
        } 
};

module.exports = registerController;