const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;
const routes = require('./api/endPoints.js');
const { eliminarCita } = require('./controllers/eliminarCitaController.js'); // Asegúrate de poner la ruta correcta

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE'],
}));

app.delete('/citas/:id', cors(), eliminarCita); // Ahora eliminarCita está definido

app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
