const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController');
const { agendarCita } = require('../controllers/agendarCitaController');
const { getCitas } = require('../controllers/citasController');
const { eliminarCita } = require('../controllers/eliminarCitaController');

router.get('/ping', ping);
router.post('/login', login);
router.post('/agendarCita', agendarCita);
router.get('/citas', getCitas); 
router.delete('/citas/:id', eliminarCita);

module.exports = router;