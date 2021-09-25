//Carregar os modulos
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
require("../models/HomeTopo");
const HomeTopo = mongoose.model('hometopos')

router.get('/', (req, res) => {
  new HomeTopo({
    titulo: "Temos a solução que sua empresa precisa!",
    subtitulo: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.",
    titulobtn: "ENTRE EM CONTATO",
    urlbtn: "http://localhost:8080/contato"
  }).save().then(() => {
    console.log("Topo cadastrado com sucesso!")
  }).catch((erro) =>{
    console.log("Erro: Topo não pôde ser cadastrado!" + erro)
  })
})


module.exports = router;