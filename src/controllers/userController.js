const path = require('path');

const db = require('../../database/models');
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

    registrar : async (req, res) => {
        let resultadoValidacion = validationResult(req)
        // let ultimoId = db.Usuario.findOne({where: {usuario_id : Usuario.length-1} })
        //         .then((usuario) =>{
        //             return usuario
        //         }).catch(error => console.log(error))
        
		// let nuevoUltimoId = (ultimoId + 1).toString();
        
        let usuarioEnDB = await db.Usuario.findOne({where: {usuario_email : {[Op.like] : req.body.email} }})
           /* .then(usuarioEncontrado => {return usuarioEncontrado} */ //funciona con o sin esta linea
        
        //const usuarioEnDB = usuarios.find((user)=>{
        //    return user.email===email;});

        if (!resultadoValidacion.errors.length && !usuarioEnDB && req.body.contraseña === req.body.confirmaContraseña ) {
            db.Usuario.create({
                
                usuario_nombre: req.body.nombre,
                usuario_apellido: req.body.apellido,
                usuario_imagen: 'demo.jpg',
                usuario_email: req.body.email,
                usuario_contrasenia: bcrypt.hashSync(req.body.contraseña, 12),
                usuario_rol_id: 2,
                
            }).then(function(Usuario) {
                // req.session.userLogged = Usuario;
                res.redirect('/user/login')
            })
        }
         
        else {
           
        
        if (usuarioEnDB){
            return res.render('register', {errores: [{msg: 'Este email ya se encuentra registrado'}],old : req.body })
        }
        if (req.body.contraseña != req.body.confirmaContraseña){
            return res.render('register', {errores: [{msg: 'Las contraseñas no coinciden'}],old : req.body })
        }
 else {
                
    return res.render ("register", { errores : resultadoValidacion.array(), old : req.body })
            }
        }
    
    },

        vistaLogin : (req, res) => {
            if (req.cookies.recordarme){
                let errores = undefined;
                let infoUsuario = req.cookies.recordarme;
                res.render('login', {infoUsuario , errores})
                console.log(infoUsuario)
            } else {
                let infoUsuario = null;
                let errores = undefined;
                res.render('login', {infoUsuario , errores})
            }
        },
    
        login : async (req, res) => {
                let errores = validationResult(req)          
                
    
                // let verificaContraseñaHash = bcrypt.compareSync(req.body.contraseña, usuarioEncontrado.contrasenia)
                
                // var usuarioEncontrado = usuarios.find(usuario => usuario.email == req.body.email)
                
                let usuarioEncontrado = await db.Usuario.findOne({where: {usuario_email : {[Op.like] : req.body.email} }})
                let usuarioContraseña = ''
                
                //------------COOKIES PARA RECORDAR USUARIO-----------
                if(req.body.recordarme != undefined){
                    res.cookie('recordarme', usuarioEncontrado, {maxAge : 100000})
                }
                //----------------------------------------------------
                
                if(usuarioEncontrado){
                    usuarioContraseña = usuarioEncontrado.usuario_contrasenia
                }

                let verificaContraseñaHash = bcrypt.compareSync(req.body.contraseña, usuarioContraseña)


                if (usuarioEncontrado && verificaContraseñaHash){
                    req.session.usuarioLogeado = usuarioEncontrado
                    res.redirect("/")
                } else {
                    let infoUsuario = null
                    let errores = 'Por favor verifique ingresar correctamente sus datos'
                    return res.render('login', {errores , infoUsuario} ) 
                }
            

        },

        logout : (req, res) => {
            delete req.session.usuarioLogeado;
            return res.redirect("/user/login")
        },

        vistaProfile : (req, res) => {
            res.render('profile');
            console.log(req.session)
        },

        editProfile: (req, res) => {
		// let userToEdit = usuarios.filter(usuario => usuario.email == user.email)
        // let userToEdit = await db.Usuario.findOne({ where: {usuario_email : {[Op.like] : user.usuario_email} }})
        const user = req.session.usuarioLogeado;
        // let verificaContraseñaHash =  bcrypt.compareSync(req.body.contraseña, user.usuario_contrasenia)
            
        // if (verificaContraseñaHash){
        if(req.file == undefined){
            db.Usuario.update ({
                usuario_nombre: req.body.nombreProfile,
                usuario_apellido: req.body.apellidoProfile,
                usuario_email: req.body.emailProfile,
            },
            {
                where: {usuario_id : user.usuario_id}
            })
            .catch(error => console.log(error))
            .then(function(libro){
                res.redirect('/user/profile/' + user.usuario_id)}); 
        } else {
	        db.Usuario.update ({
                usuario_nombre: req.body.nombreProfile,
                usuario_apellido: req.body.apellidoProfile,
                usuario_email: req.body.emailProfile,
                usuario_imagen: req.file.filename,
            },
            {
                where: {usuario_id : user.usuario_id}
            })
            .catch(error => console.log(error))
            .then(function(libro){
                res.redirect('/user/profile/' + user.usuario_id)});
            }
                // req.session.usuarioLogeado = await db.Usuario.findByPk(req.params.id)
                
        // }
        
		// let newUser = usuarios.map(usuario => {
        //     let verificaContraseñaHash = bcrypt.compareSync(req.body.contraseña, userToEdit.contrasenia)   
		//  	if (verificaContraseñaHash){
		//  		return usuarios = {...newUserData};}
        //         return usuarios
		// })

		// fs.writeFileSync(usersFilePath, JSON.stringify(newUser, null, ' '));
        }
    
};

module.exports = userController;

