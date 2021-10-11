const express = require('express')
const app = express()
const path = require("path")
const PUERTO = 3000
app.use(express.static('./public'));


app.get('/', function(req,res){res.sendFile(path.join(__dirname, './views/index.html'))});

app.listen(PUERTO, () => console.log('Servidor corriendo'));