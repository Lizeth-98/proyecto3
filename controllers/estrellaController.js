const Estrella = require('../models/estrella');

exports.crearEstrella = async (data) => {
  const estrella = new Estrella(data);
  return await estrella.save();
};

exports.obtenerEstrellas = async () => {
  return await Estrella.find().populate('galaxia');
};

exports.actualizarEstrella = async (id, data) => {
  return await Estrella.findByIdAndUpdate(id, data, { new: true });
};

exports.eliminarEstrella = async (id) => {
  return await Estrella.findByIdAndDelete(id);
};
