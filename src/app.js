//"puxa" o express
const express = require('express');
const app = express();

//Porta que o app vai ser rodado
const {PORT} = require('./utils/appConfig')


//middleware
app.use(express.json())
app.use((req, res, next) => {
    next()
})

//puxa as rotas CRUD
const router = require('./routes/rotas')

//rotas
app.use("/", router);

//porta
app.listen(PORT);

module.exports = app;