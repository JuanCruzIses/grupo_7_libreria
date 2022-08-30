
function authMiddleware(req, res, next) {
    console.log("middlewares auth funcionando")
    if (req.session.usuarioLogeado){
        return next();
    }
    return res.redirect("/user/login")
    
} 

module.exports = authMiddleware;