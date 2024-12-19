const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes/index.js');

const app = express();

// Middleware global
app.use(helmet()); // Keamanan header HTTP
app.use(cors()); // Izinkan request dari domain lain
app.use(morgan('dev')); // Log semua request
app.use(express.json()); // Parse request body sebagai JSON
app.use(express.urlencoded({ extended: true })); // Untuk parsing data dari form

// Routes utama
app.use('/api/v1', router);

// Handle route yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Handle error global
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

module.exports = app;
