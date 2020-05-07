require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

const routes = require('./routes.js');

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(port, () => {
  console.log('Listening on port %s', port);
});
