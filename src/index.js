const express = require('express');
const userController = require('./Controllers/userController')

require('dotenv').config();
const app = express();

app.use(express.json);
app.use('/api/users', userController);


const port = 3000;

app.get('/',(req,res)=>{
    res.send('!hola mundo!');
})

app.listen(port, ()=>{
    console.log(`el servidor esta corriendo en http://localhost:${port}`)
})