const express = require('express')
const app = express()
const path = require("path")
const PUERTO = 3000
app.use(express.static('./public'));


app.get('/', function(req,res){res.sendFile(path.join(__dirname, './views/index.html'))});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'))
    
})
app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/carrito.html'))
})
app.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})    

app.listen(PUERTO, () => console.log('Servidor corriendo; PUERTO 3000'));