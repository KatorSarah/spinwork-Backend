'use strict';

// Carga variables de entorno antes de iniciar la app.
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Spinwork backend corriendo en http://localhost:${PORT}`);
});
