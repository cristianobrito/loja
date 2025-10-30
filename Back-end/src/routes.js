// src/routes.js
const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no banco' });
  }
});

module.exports = router;
