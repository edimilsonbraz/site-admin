//Carregar os modulos
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
require("../models/HomeTopo");
const HomeTopo = mongoose.model('hometopos')
require("../models/Servico")
const Servico = mongoose.model('servicos')


router.get('/', (req, res) => {
  HomeTopo.findOne({}).then((hometopo) => {
    Servico.findOne({}).then((servico) => {
      res.render("home/home", {hometopo: hometopo, servico: servico})
    }).catch((erro) => {
      res.send("Nenhum serviço encontrado, entre em contato com o administrador")
    })
  }).catch((err) => {
    res.send("Nenhum serviço encontrado, entre em contato com o administrador")
  })
})


module.exports = router;