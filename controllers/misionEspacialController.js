const MisionEspacial = require('../models/misionEspacial');

exports.crearMision = async (data) => {
  const mision = new MisionEspacial(data);
  return await mision.save();
};

exports.obtenerMisiones = async () => {
  return await MisionEspacial.find();
};

exports.actualizarMision = async (id, data) => {
  return await MisionEspacial.findByIdAndUpdate(id, data, { new: true });
};

exports.eliminarMision = async (id) => {
  return await MisionEspacial.findByIdAndDelete(id);
};
