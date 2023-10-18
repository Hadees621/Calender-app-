const userRoutes = require('express').Router();
const eventController = require('../controller/event.controller');

userRoutes.post('/events', eventController.createEvent);
userRoutes.get('/events', eventController.getEvents);

module.exports = userRoutes;
