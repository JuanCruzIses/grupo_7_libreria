const express = require('express')
const app = express()
const path = require("path")
const PUERTO = 3000
app.use(express.static('./public'));

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Rutas
const mainRouter = require('./routes/mainRoutes');

//Uso de rutas
app.use('/', mainRouter);

/*app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/index.ejs'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/register.ejs'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/login.ejs'))
    
})
app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/carrito.ejs'))
})
app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/productDetail.ejs'))
})    
*/

app.listen(PUERTO, () => console.log('Servidor corriendo; PUERTO 3000'));