const express = require('express');
const mongoose = require('mongoose');
const galaxiaController = require('./controllers/galaxiaController');
const estrellaController = require('./controllers/estrellaController');
const planetaController = require('./controllers/planetaController');
const sateliteController = require('./controllers/sateliteController');
const misionEspacialController = require('./controllers/misionEspacialController');

const app = express();
app.use(express.json());

const uri = 'mongodb://localhost:27017/universo';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Conectado a la base de datos');
});


galaxiaController.crearGalaxia({ nombre: 'Vía Láctea', tipo: 'Espiral', distanciaTierra: 0 });

galaxiaController.obtenerGalaxias().then(galaxias => console.log(galaxias));

estrellaController.crearEstrella({ nombre: 'Sol', tipo: 'Enana amarilla', masa: 1 });

estrellaController.obtenerEstrellas().then(estrellas => console.log(estrellas));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

