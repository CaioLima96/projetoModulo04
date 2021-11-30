//"puxa" o express
const express = require('express');
const app = express();
//puxa as rotas CRUD
const router = require('./routes/rotas')




//Porta que o app vai ser rodado
//const {PORT = 3000} = process.env.PORT;
const {PORT} = require('./utils/appConfig')


//rotas
app.use("/", router);

//porta
app.listen(PORT);