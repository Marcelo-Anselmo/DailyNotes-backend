const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

//Rota Annotations
routes.post('/anottations', AnnotationController.create);
routes.get('/anottations', AnnotationController.read);
routes.delete('/anottations/:id', AnnotationController.delete);

//Rota Priority
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//Rota Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;