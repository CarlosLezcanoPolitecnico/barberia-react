const connection = require('../models/db');

const getCitas = (req, res) => {
    // Query para obtener todas las citas
    const selectQuery = 'SELECT * FROM citas';

    // Ejecutar la consulta
    connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error al obtener citas de la base de datos:', err.message);
            return res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        }

        // Éxito al obtener las citas
        console.log(results)
        return res.status(200).json({ status: 'success', data: results });
    });
};

module.exports = { getCitas };
