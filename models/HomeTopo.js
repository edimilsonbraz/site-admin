const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HomeTopo = new Schema({
  titulo: {
    type: String,
    required: true
  },
  subtitulo: {
    type: String,
    required: true
  },
  titulobtn: {
    type: String,
    required: true
  },
  urlbtn: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    required: false
  }
})

mongoose.model("hometopos", HomeTopo)