const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('!hola mundo!');
})

app.listen(port, ()=>{
    console.log(`el servidor esta corriendo en http://localhost:${port}`)
})