'use strict';

// Importa Express y los middlewares necesarios.
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middlewares base de seguridad y parsing.
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ruta de verificación del servicio.
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Spinwork backend funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
