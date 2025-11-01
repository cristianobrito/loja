// src/server.js
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.send('Loja Backend rodando!');
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

const FRONTEND_PATH = '/app/Front-end';
app.use(express.static(FRONTEND_PATH));

app.get('/', (req, res) => res.sendFile(path.join(FRONTEND_PATH, 'index.html')));

app.get('/favoritos', (req, res) => res.sendFile(path.join(FRONTEND_PATH, 'html/Favoritos.html')));

app.get('/Btc', (req, res) => res.sendFile(path.join(FRONTEND_PATH, 'html/Btc.html')));

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
