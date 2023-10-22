const express = require('express')
const app = express()
const port = 3004
const routes = require('./api/endPoints.js')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors({
    origin : ['http://localhost:3000'],
    methods : ['GET', 'POST'],
}))

app.use('/', routes)

app.listen(port, () => {
    console.log(`Ejemplo de escucha en el puerto ${port}`);
})