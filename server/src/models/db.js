const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Deja la contraseña en blanco si no la tienes configurada
    database: 'barberia'
});

// Manejar eventos de conexión y errores
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.message);
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

connection.on('error', (err) => {
    console.error('Error en la conexión a la base de datos: ' + err.message);
});

module.exports = connection;