require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('Listening on port %s', port);
});
