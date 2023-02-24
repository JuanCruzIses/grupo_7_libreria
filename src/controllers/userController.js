import { pool } from '../db.js'
const promisePool = pool.promise();
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';


export const vistaRegistro = (req, res) => {
        res.render("register")
    }

export const registrar = async (req, res) => {
        let resultadoValidacion = validationResult(req)
        let usuarioEnDB = await db.Usuario.findOne({where: {usuario_email : {[Op.like] : req.body.email} }})
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
    
    }

export const vistaLogin = (req, res) => {
            if (req.cookies.recordarme){
                let errores = undefined;
                let infoUsuario = req.cookies.recordarme;
                res.render('login', {infoUsuario , errores})
            } else {
                let infoUsuario = null;
                let errores = undefined;
                res.render('login', {infoUsuario , errores})
            }
        }
    
export const login = async (req, res) => {
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
            

        }

export const logout = (req, res) => {
            delete req.session.usuarioLogeado;
            return res.redirect("/user/login")
        }

export const vistaProfile = (req, res) => {
            res.render('profile');
            console.log(req.session)
        }

export const editProfile = (req, res) => {
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
        }
    
