const connection = require('../models/db')
const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
    const { usuario, contrasena } = req.body
    const consult = 'SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?'

    try {
        connection.query(consult, [usuario, contrasena], (err, result) => {
            if (err) {
                res.send(err)
            } else if (result.length > 0) {
                const token = jwt.sign({ usuario, contrasena }, "Stack", {
                    expiresIn: '1m'
                })
                res.send({ status: 'success', token })
                console.log('Sesion iniciada')
            } else {
                console.log('Usuario Incorrecto')
                res.send({ status: 'error', message: 'Usuario o contraseña incorrectos' })
            }
        })
    } catch (e) {
        console.log('error no se por qué')
    }
}
