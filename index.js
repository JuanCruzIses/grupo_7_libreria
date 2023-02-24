// const app = require('./src/app')

import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use("/", (req, res)=>{
    res.json({message: "Esta andando esto"})
})

app.listen(port)
console.log(`Listen on PORT ${port}`)