//Carregar os modulos
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
require("../models/HomeTopo");
const HomeTopo = mongoose.model('hometopos')
require("../models/Servico")
const Servico = mongoose.model('servicos')



router.get('/', (req, res) => {
  /*new HomeTopo({
    titulo: "Temos a solução que sua empresa precisa!",
    subtitulo: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.",
    titulobtn: "ENTRE EM CONTATO",
    urlbtn: "http://localhost:8080/contato"
  }).save().then(() => {
    console.log("Topo cadastrado com sucesso!")
  }).catch((erro) =>{
    console.log("Erro: Topo não pôde ser cadastrado!" + erro)
  })*/

  new Servico({
    titulo: "Servicos",
    iconeservum: "fas fa-truck-moving",
    tituloservum: "Serviço um",
    descservum: "This card has supporting text below as a natural lead-in to additional content.",
    iconeservdois: "fas fa-truck-loading",
    tituloservdois: "Serviço dois",
    descservdois: "This card has supporting text below as a natural lead-in to additional content.",
    iconeservtres: "fas fa-boxes",
    tituloservtres: "Serviço tres",
    descservtres: "This card has supporting text below as a natural lead-in to additional content."
  }).save().then(() => {
    //console.log("Serviço cadastrado com sucesso!")
    res.send("Serviço cadastrado com sucesso")
  }).catch((erro) =>{
    //console.log("Erro: Serviço não pôde ser cadastrado!" + erro)
    res.send("Erro: Serviço não pôde sercadastrado!" + erro)
  })
})


module.exports = router;