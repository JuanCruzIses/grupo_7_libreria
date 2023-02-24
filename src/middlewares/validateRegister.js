import { body, Result } from 'express-validator';


export const validateRegister = [
    body("nombre").notEmpty().withMessage("Por favor complete con su nombre").isLength( {min: 1} ).withMessage("El Nombre debe tener al menos 5 caracteres").isLength( {max: 20} ).withMessage("El Nombre debe tener menos de 20 caracteres"),
    body("apellido").notEmpty().withMessage("Por favor complete con su apellido").isLength( {min: 1} ).withMessage("El Apellido debe tener al menos 5 digitos").isLength( {max: 20} ).withMessage("El Apellido debe tener menos de 20 caracteres"),
    body("email").notEmpty().withMessage("Por favor complete con su email").isEmail().withMessage("Por favor ingrese un email válido").bail(),
    body("contraseña").notEmpty().withMessage("Por favor complete con una contraseña").isLength( {min: 5} ).withMessage("La contraseña debe tener al menos 5 digitos").isLength( {max: 20} ).withMessage("La contraseña debe tener menos de 20 caracteres"),
    body("confirmaContraseña").notEmpty().withMessage("Complete nuevamente la contraseña").isLength( {min: 5} ).withMessage("La contraseña debe tener al menos 5 digitos")
]