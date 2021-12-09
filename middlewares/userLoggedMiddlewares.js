function userLoggedMiddlewares(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.usuarioLogeado){
        res.locals.isLogged = true;
        res.locals.usuarioLogeado = req.session.usuarioLogeado
    }
    next();
} 

module.exports = userLoggedMiddlewares