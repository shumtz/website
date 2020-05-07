const { Router } = require('express');

const routes = Router();

const userController = require('./controllers/userController');
const doctorsController = require('./controllers/doctorsController');

// patients
routes
  .get('/patients', userController.all)
  .get('/patient/:id', userController.getById)
  .post('/patients', userController.create)
  .put('/patient/:id', userController.update)
  .delete('/patient/:id', userController.delete);

// doctors
routes
.get('/doctors', doctorsController.all)
  .get('/doctor/:id', doctorsController.getById)
  .post('/doctors', doctorsController.create)
  .put('/doctor/:id', doctorsController.update)
  .delete('/doctor/:id', doctorsController.delete);

module.exports = routes;
