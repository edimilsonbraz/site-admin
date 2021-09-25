const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render("usuario/login", {layout: 'login.handlebars'})
})

module.exports = router;