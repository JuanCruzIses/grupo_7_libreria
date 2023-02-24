export const recordameMiddleware = (req, res, next)=>{
    if(req.cookies.recordarme != undefined){
        return console.log(req.cookies.recordarme)
    }
    next();
}