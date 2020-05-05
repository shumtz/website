require('dotenv').config();

const express = require('express');

const app = express();

app.listen(process.env.PORT || 3333);
