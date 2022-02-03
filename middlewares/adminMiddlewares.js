function adminMiddlewares(req, res, next) {
    if (!req.session.usuarioLogeado || (req.session.usuarioLogeado.usuario_rol_id === 2)){
        return res.redirect("/")
    }
    next();
} 

module.exports = adminMiddlewares