// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/generate-token', authController.generateToken);
router.post('/decode-token', authController.decodeToken);

module.exports = router;
