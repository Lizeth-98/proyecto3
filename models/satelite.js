const mongoose = require('mongoose');

const sateliteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: String,
  masa: Number, 
  planeta: { type: mongoose.Schema.Types.ObjectId, ref: 'Planeta' }
});

module.exports = mongoose.model('Satelite', sateliteSchema);
