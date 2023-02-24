export const authMiddleware = async (req, res, next)=>{
    if (req.session.usuarioLogeado){
        return next();
    }
    return res.redirect("/user/login")
} 