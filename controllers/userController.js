const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { localsName } = require('ejs');
const {Writable}=require('stream');

const usersFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
let db = require("../database/models");
const Sequelize = require("sequelize")
const Op = Sequelize.Op

const userController = {
    vistaRegistro : (req, res) => {
        res.render("register")
    },

    registrar : (req, res) => {
        let ultimoId = db.Usuario.findAll()
            .then(function(usuarios){
                let id = usuarios.length -1;
                return id
            })
        //let ultimoId = Number(usuarios[usuarios.length -1].id);
		let nuevoUltimoId = (ultimoId + 1).toString();
        let errores = validationResult(req)
    
        const email = req.body.email;
        const usuarioEnDB = db.Usuario.findOne({where: {email : {[Op.like] : req.body.email} }})
            .then(function(usuario){
                return usuario
            })
        //const usuarioEnDB = usuarios.find((user)=>{
        //    return user.email===email;});
        
        if (usuarioEnDB){
            return res.render('register', {errores: [{msg: 'Este email ya se encuentra registrado'}] })
        }

        else if (req.body.contraseña === req.body.confirmaContraseña && errores.isEmpty() ) {
            const nuevoUsuario = {
                usuario_id: nuevoUltimoId,
                usuario_nombre: req.body.nombre,
                usuario_apellido: req.body.apellido,
                usuario_imagen: req.body.imagen,
                usuario_email: req.body.email,
                usuario_contraseña: bcrypt.hashSync(req.body.contraseña, 12),
                usuario_rol_id: 1,
            }
            db.Usuario.create({nuevoUsuario: nuevoUsuario})
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
