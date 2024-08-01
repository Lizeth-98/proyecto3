const Satelite = require('../models/satelite');

exports.crearSatelite = async (data) => {
  const satelite = new Satelite(data);
  return await satelite.save();
};

exports.obtenerSatelites = async () => {
  return await Satelite.find().populate('planeta');
};

exports.actualizarSatelite = async (id, data) => {
  return await Satelite.findByIdAndUpdate(id, data, { new: true });
};

exports.eliminarSatelite = async (id) => {
  return await Satelite.findByIdAndDelete(id);
};
