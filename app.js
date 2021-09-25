const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const home = require('./routes/home');
const sobre = require('./routes/sobre');
const contato = require('./routes/contato');
const usuario = require('./routes/usuario');
const add_bd = require('./routes/add_bd');
const mongoose = require('mongoose');
const path = require('path') //trabalhar com arquivos e diretorios


//configuração Body parser / Pega dados do front
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handlebars 
app.engine('handlebars', handlebars({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

//Arquivos Estaticos
app.use(express.static(path.join(__dirname, "public")))

//Conexão com Banco de de
mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com MongoDB realizada com sucesso!")
}).catch((erro) => {
  console.log("Erro: Conexão com MongoDB não foi realizada " + erro)
})



//ROTAS
app.use('/home', home)
app.use('/sobre', sobre)
app.use('/contato', contato)
app.use('/usuario', usuario)
app.use('/add_bd', add_bd)


const PORT = 8080;
app.listen(PORT, () => console.log('Servidor iniciado'));