const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.send('bem-vindo')
})

app.listen(3008, ()=> {
    console.log('Servidor rodando em: localhost:3008')
})