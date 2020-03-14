const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// sessions
routes.post('/sessions', SessionController.store);

// spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

// booking
routes.post('/spots/:spot_id/bookings', BookingController.store);

// dashboard
routes.get('/dashboard', DashboardController.show);

module.exports = routes;