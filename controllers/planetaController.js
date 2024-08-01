const Planeta = require('../models/planeta');

exports.crearPlaneta = async (data) => {
  const planeta = new Planeta(data);
  return await planeta.save();
};

exports.obtenerPlanetas = async () => {
  return await Planeta.find().populate('estrella');
};

exports.actualizarPlaneta = async (id, data) => {
  return await Planeta.findByIdAndUpdate(id, data, { new: true });
};

exports.eliminarPlaneta = async (id) => {
  return await Planeta.findByIdAndDelete(id);
};
