const { Router } = require('express');

const routes = Router();

const userController = require('./controllers/userController');

routes.get('/patients', userController.all)

module.exports = routes;
