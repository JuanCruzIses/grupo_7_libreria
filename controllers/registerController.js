const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const {Writable}=require('stream');

const usersFilePath = path.join(__dirname, '../data/users.json');


function getAllUsers(){
return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}


const registerController = {
    vistaRegistro : (req, res) => {
        res.render("register")
    },

    registrar : (req, res) => {
        const listaUsuarios= getAllUsers();
        let ultimoId = Number(listaUsuarios[listaUsuarios.length -1].id);
		let nuevoUltimoId = (ultimoId + 1).toString();
        let errores = validationResult(req)
    
        const user={
            email:req.body.email,
        }
        const email=req.body.email;
        const usuarioEnDB=listaUsuarios.find((user)=>{
            return user.email===email;
        });
        
         
        if (usuarioEnDB){
            return res.render('register', {errores: [{msg: 'Este email ya se encuentra registrado'}] })
        }

        else if (req.body.contraseña === req.body.confirmaContraseña && errores.isEmpty() ) {
            const nuevoUsuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contrasenia: bcrypt.hashSync(req.body.contraseña, 12),
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