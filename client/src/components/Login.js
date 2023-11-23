import React, { useState } from 'react';

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function Login() {

    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')

    const mensaje = document.querySelector('#mensaje')

    const handleLogin  = (e) => {
        e.preventDefault();

        const data = {
            usuario : usuario,
            contrasena : contrasena
        }

        fetch('http://localhost:3004/login', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.status === 'success'){
                mensaje.classList.remove('btn-danger')
                mensaje.classList.add('btn-success')
                mensaje.innerHTML = 'Sesion Iniciada Correctamente'
                setTimeout(()  => {

                    window.location = 'http://localhost:3000/'
                }, 2000)
            }else{
                mensaje.classList.remove('btn-success')
                mensaje.classList.add('btn-danger')
                mensaje.innerHTML = data.message
                setTimeout(()  => {
                    mensaje.classList.remove('btn-danger')
                    mensaje.innerHTML = ''
                }, 2000)
            }
        })
    }

  return (
    <div className="modal fade" id="modal-login" >
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <form id="formulario-iniciar-sesion">
                    <div className="modal-header">
                        <h5 className="modal-title">Iniciar Sesion</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                    <div className="btn col-12" id="mensaje"></div>
                        <div className="form-group">
                            <label>Usuario</label>
                            <input type="text" className="form-control"  required name="usuario" id="usuario"  placeholder="Usuario" onChange={(event) => {setUsuario(event.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Contaseña</label>
                            <input type="password" className="form-control" required name="contrasena" id="contrasena"  placeholder="Contraseña" onChange={(event) => {setContrasena(event.target.value)}}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;