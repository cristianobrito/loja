// src/server.js
const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Loja Backend rodando!');
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
