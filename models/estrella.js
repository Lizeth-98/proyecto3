const mongoose = require('mongoose');

const estrellaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: String,
  masa: Number, 
  galaxia: { type: mongoose.Schema.Types.ObjectId, ref: 'Galaxia' }
});

module.exports = mongoose.model('Estrella', estrellaSchema);
