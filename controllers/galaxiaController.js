const Galaxia = require('../models/galaxia');

exports.crearGalaxia = async (data) => {
  const galaxia = new Galaxia(data);
  return await galaxia.save();
};

exports.obtenerGalaxias = async () => {
  return await Galaxia.find();
};

exports.actualizarGalaxia = async (id, data) => {
  return await Galaxia.findByIdAndUpdate(id, data, { new: true });
};

exports.eliminarGalaxia = async (id) => {
  return await Galaxia.findByIdAndDelete(id);
};
