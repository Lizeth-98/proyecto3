const mongoose = require('mongoose');

const misionEspacialSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  agencia: String,
  objetivo: String,
  fechaLanzamiento: Date
});

module.exports = mongoose.model('MisionEspacial', misionEspacialSchema);
