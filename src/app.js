//"puxa" o express
const express = require('express');

//puxa as rotas CRUD
const router = require('./routes/rotas')


const app = express();

//Porta que o app vai ser rodado
const {PORT = 3000} = process.env;



//rotas
app.use("/", router);

//porta
app.listen(PORT);