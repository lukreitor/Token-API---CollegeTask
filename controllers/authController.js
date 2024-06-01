// controllers/authController.js
const jwt = require('jsonwebtoken');
const pool = require('../config/database');

// Gera um token JWT com uma mensagem aleatória

exports.generateToken = (req, res) => {
  const randomMessage = Math.random().toString(36).substring(7); // Gera uma mensagem aleatória
  const token = jwt.sign(
    { message: randomMessage }, // Gera um token JWT com a mensagem aleatória
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
  res.json({ token });
};

// Recebe um token e retorna a mensagem decodificada se o token for válido
exports.decodeToken = (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: decoded.message });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
