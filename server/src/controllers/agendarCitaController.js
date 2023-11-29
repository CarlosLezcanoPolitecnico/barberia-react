const connection = require('../models/db')
const { validationResult } = require('express-validator');

const agendarCita = (req, res) => {
    // Validación de datos
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: 'error', message: 'Error de validación', errors: errors.array() });
    }

    // Extracción de datos del cuerpo de la solicitud
    const { nombre, telefono, fechaCita, horaCita, barbero } = req.body;

    // Query para insertar datos en la base de datos
    const insertQuery = 'INSERT INTO citas (nombre_cliente, telefono_cliente, fecha_cita, hora_cita, barbero) VALUES (?, ?, ?, ?, ?)';

    // Ejecutar la consulta
    connection.query(insertQuery, [nombre, telefono, fechaCita, horaCita, barbero], (err, results) => {
        if (err) {
            console.error('Error al insertar cita en la base de datos:', err.message);
            return res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        }

        // Éxito al insertar la cita
        return res.status(200).json({ status: 'success', message: 'Cita agendada correctamente', data: results });
    });
};

module.exports = { agendarCita };