const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const home = require('./routes/home');
const sobre = require('./routes/sobre');
const contato = require('./routes/contato');
const path = require('path') //trabalhar com arquivos e diretorios


//configuração Body parser / Pega dados do front
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handlebars 
app.engine('handlebars', handlebars({defaultLayout: "main"}));
app.set('view engine', 'handlebars');



//ROTAS
app.use('/home', home)
app.use('/sobre', sobre)
app.use('/contato', contato)


const PORT = 8080;
app.listen(PORT, () => console.log('Servidor iniciado'));