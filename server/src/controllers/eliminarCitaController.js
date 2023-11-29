const connection = require('../models/db');

const eliminarCita = (req, res) => {
    // Obtener el ID de la cita que se desea eliminar desde los parámetros de la solicitud
    const { id } = req.params; // Cambiado de id_cita a id
  
    const deleteQuery = 'DELETE FROM citas WHERE id_cita = ?';

    // Ejecutar la consulta
    connection.query(deleteQuery, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar la cita de la base de datos:', err.message);
            return res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
        }

        if (results.affectedRows === 0) {
            // Si no se afectó ninguna fila, la cita con ese ID no existe
            return res.status(404).json({ status: 'error', message: 'Cita no encontrada' });
        }

        // Éxito al eliminar la cita
        return res.status(200).json({ status: 'success', message: 'Cita eliminada correctamente' });
    });
};

module.exports = { eliminarCita };
