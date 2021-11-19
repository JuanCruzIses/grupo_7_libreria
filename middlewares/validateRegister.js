const { body, Result } = require('express-validator');


const validateRegister = [
    body("nombre").notEmpty().withMessage("Por favor complete con su nombre").bail(),
    body("apellido").notEmpty().withMessage("Por favor complete con su apellido").bail(),
    body("email").notEmpty().withMessage("Por favor complete con su email").isEmail().withMessage("Por favor ingrese un email válido").bail(),
    body("contraseña").notEmpty().withMessage("Por favor complete con una contraseña").isLength( {min: 5} ).withMessage("La contraseña debe tener al menos 5 digitos"),
    body("confirmaContraseña").notEmpty().withMessage("Complete nuevamente la contraseña").isLength( {min: 5} ).withMessage("La contraseña debe tener al menos 5 digitos")
]

module.exports = validateRegister;