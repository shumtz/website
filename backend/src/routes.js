const { Router } = require('express');

const routes = Router();
const { celebrate, Segments, Joi } = require('celebrate');
const UserController = require('./controllers/PatientsController');
const DoctorsController = require('./controllers/DoctorsController');

const { BODY } = Segments;

// patients
routes
  .get('/patients', UserController.index)
  .get('/patient/:id', UserController.getById)
  .post(
    '/patients',
    celebrate({
      [BODY]: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5).max(60),
        city: Joi.string().required(),
        bloodType: Joi.string().required().max(5),
        weight: Joi.number().required(),
        height: Joi.number().required(),
        problem: Joi.string().required(),
        historic: Joi.string().required(),
      }),
    }),
    UserController.create
  )
  .put(
    '/patient/:id',
    celebrate({
      [BODY]: Joi.object().keys({
        name: Joi.string(),
        age: Joi.number(),
        email: Joi.string().email(),
        password: Joi.string().min(5).max(60),
        city: Joi.string(),
        bloodType: Joi.string().max(5),
        weight: Joi.number(),
        height: Joi.number(),
        problem: Joi.string(),
        historic: Joi.string(),
      }),
    }),
    UserController.update
  )
  .delete('/patient/:id', UserController.delete);

// doctors
routes
  .get('/doctors', DoctorsController.index)
  .get('/doctor/:id', DoctorsController.getById)
  .post(
    '/doctors',
    celebrate({
      [BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(60),
        uf: Joi.string().required(),
        municipality: Joi.string().required(),
        crm: Joi.string().required(),
        subscriptionType: Joi.string().required(),
        speciality: Joi.string().required(),
        situation: Joi.string().required(),
        actuationArea: Joi.string().required(),
      }),
    }),
    DoctorsController.create
  )
  .put(
    '/doctor/:id',
    celebrate({
      [BODY]: Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string().min(5).max(60),
        uf: Joi.string(),
        municipality: Joi.string(),
        crm: Joi.string(),
        subscriptionType: Joi.string(),
        speciality: Joi.string(),
        situation: Joi.string(),
        actuationArea: Joi.string(),
      }),
    }),
    DoctorsController.update
  )
  .delete('/doctor/:id', DoctorsController.delete);

module.exports = routes;
