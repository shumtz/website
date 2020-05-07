const { Router } = require('express');

const routes = Router();
const UserController = require('./controllers/UserController');
const DoctorsController = require('./controllers/DoctorsController');

// patients
routes
  .get('/patients', UserController.index)
  .get('/patient/:id', UserController.getById)
  .post('/patients', UserController.create)
  .put('/patient/:id', UserController.update)
  .delete('/patient/:id', UserController.delete);

// doctors
routes
  .get('/doctors', DoctorsController.index)
  .get('/doctor/:id', DoctorsController.getById)
  .post('/doctors', DoctorsController.create)
  .put('/doctor/:id', DoctorsController.update)
  .delete('/doctor/:id', DoctorsController.delete);

module.exports = routes;
