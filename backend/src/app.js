require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

const routes = require('./routes.js');

const port = process.env.PORT || 3333;

app.use(cors());
app.use('/api', routes);

app.listen(port, () => {
  console.log('Listening on port %s', port);
});
