require('dotenv').config();
const express = require('express');

const app = express();

const cors = require('cors');
const { errors } = require("celebrate")
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes.js');
const cookie = require('cookie-parser');
const swaggerPatient = require('./util/patient.json');
const swaggerDoctor = require('./util/doctor.json');

const port = process.env.PORT || 3333;

app.use(cookie())
app.use(express.json());
app.use(cors());
app.use(errors())
app.use('/api', routes);
app.use('/api-docs/patient', swaggerUi.serve, swaggerUi.setup(swaggerPatient));
app.use('/api-docs/doctor', swaggerUi.serve, swaggerUi.setup(swaggerDoctor));
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
  next();
});

app.listen(port, () => {
  console.log('Listening on port %s', port);
});
