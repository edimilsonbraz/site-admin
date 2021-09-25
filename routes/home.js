//Carregar os modulos
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
require("../models/HomeTopo");
const HomeTopo = mongoose.model('hometopos')

router.get('/', (req, res) => {
  HomeTopo.findOne({}).then((hometopo) => {
    console.log(hometopo)
    res.render("home/home", {hometopo: hometopo})
  }).catch((err) => {
    res.send("Nenhum topo encontrado")
  })
})


module.exports = router;