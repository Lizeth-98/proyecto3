const mongoose = require('mongoose');

const planetaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: String,
  masa: Number,
  estrella: { type: mongoose.Schema.Types.ObjectId, ref: 'Estrella' }
});

module.exports = mongoose.model('Planeta', planetaSchema);
