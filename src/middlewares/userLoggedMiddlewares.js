function userLoggedMiddlewares(req, res, next) {
  console.log("middleware funcionando")

    if (req.session.usuarioLogeado){
        res.locals.isLogged = true;
        res.locals.usuarioLogeado = req.session.usuarioLogeado
    } else{
        res.locals.isLogged = false
    }
    next();
} 

module.exports = userLoggedMiddlewares