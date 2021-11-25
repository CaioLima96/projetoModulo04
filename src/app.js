const express = require('express');

const router = require('./routes/rotas')

const app = express();

const {PORT = 3000} = process.env;



//rotas
app.use("/", router);

//porta
app.listen(PORT);