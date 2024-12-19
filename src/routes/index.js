const express = require('express');
const userRoutes = require('./user.routes.js');

const router = express.Router();

// Route ke /api/v1/users
router.use('/users', userRoutes);

module.exports = router;
