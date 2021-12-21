// const fs = require('fs');
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { localsName } = require('ejs');
const {Writable}=require('stream');
const { Console } = require('console');


const userController = {
    vistaRegistro : (req, res) => {
        res.render("register")
    },

    registrar : (req, res) => {
        let errores = validationResult(req)
        // let ultimoId = db.Usuario.findOne({where: {usuario_id : Usuario.length-1} })
        //         .then((usuario) =>{
        //             return usuario
        //         }).catch(error => console.log(error))
        
		// let nuevoUltimoId = (ultimoId + 1).toString();
        
        const usuarioEnDB = db.Usuario.findOne({where: {usuario_email : {[Op.like] : req.body.email} }})
            .then(usuarioEncontrado => {return usuarioEncontrado} )
        
        //const usuarioEnDB = usuarios.find((user)=>{
        //    return user.email===email;});
        
        if (usuarioEnDB){
            return res.render('register', {errores: [{msg: 'Este email ya se encuentra registrado'}] })
        }

        else if (req.body.contraseña === req.body.confirmaContraseña && errores.isEmpty() ) {
            const nuevoUsuario = {
                usuario_nombre: req.body.nombre,
                usuario_apellido: req.body.apellido,
                usuario_email: req.body.email,
                usuario_contrasenia: bcrypt.hashSync(req.body.contraseña, 12),
                usuario_rol_id: 2,
                // usuario_imagen: req.body.imagen,
            }
            Usuario.create({nuevoUsuario: nuevoUsuario})
            //usuarios.push(nuevoUsuario);
            //fs.writeFileSync(usersFilePath, JSON.stringify(nuevoUsuario, null, ' '))
            res.redirect('/user/login')
        }
        
        else {
            return res.render ("register", { errores : errores.array(), old : req.body })
        }},

        vistaLogin : (req, res) => {
            res.render('login')
        },
    
        login : (req, res) => {
            let errores = validationResult(req)          
            var usuarioEncontrado = usuarios.find(usuario => usuario.email == req.body.email)
            console.log(usuarioEncontrado)
            let verificaContraseñaHash = bcrypt.compareSync(req.body.contraseña, usuarioEncontrado.contrasenia)    
            
            if (usuarioEncontrado && verificaContraseñaHash){
                req.session.usuarioLogeado = usuarioEncontrado
                res.redirect("/")
            } else {
                return res.render('login', {errores: [{ msg: 'Por favor verifique ingresar correctamente sus datos' }] } ) 
            }
        },

        logout : (req, res) => {
            delete req.session.usuarioLogeado;
            console.log(req.session.usuarioLogeado)
            console.log("Usuario cerro sesión")
            return res.redirect("/user/login")
        },

        vistaProfile : (req, res) => {
            user : req.session.usuarioLogeado; 
            res.render('profile');
        },

        editProfile: (req, res) => {
		let userToEdit = usuarios.filter(usuario => usuario.email == user.email)
        console.log(userToEdit)
		newUserData = {
			nombre: req.body.nombreProfile,
			apellido: req.body.apellidoProfile,
            email: userToEdit.emailProfile,
        	contrasenia: req.body.nuevaContraseñaProfile,
            id: userToEdit.id,
            categoria: userToEdit.categoria 
        	};
        console.log(newUserData)
		
		let newUser = usuarios.map(usuario => {
            let verificaContraseñaHash = bcrypt.compareSync(req.body.contraseña, userToEdit.contrasenia)   
			if (verificaContraseñaHash){
				return usuarios = {...newUserData};}
            return usuarios
		})

		fs.writeFileSync(usersFilePath, JSON.stringify(newUser, null, ' '));
		res.redirect('/profile'); 
        },
        
    
};

module.exports = userController;
