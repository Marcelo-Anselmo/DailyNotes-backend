const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');

//Rota Annotations
routes.post('/anottations', AnnotationController.create);
routes.get('/anottations', AnnotationController.read);

module.exports = routes;