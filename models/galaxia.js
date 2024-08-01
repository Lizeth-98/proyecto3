const mongoose = require('mongoose');

const galaxiaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: String,
  distanciaTierra: Number
});

module.exports = mongoose.model('Galaxia', galaxiaSchema);
