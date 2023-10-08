import React from 'react';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      {


        <div className="container">

            <div className="logo-wrapper">
                <a className="logo" href="index.html"> <img src="img/logo.png" className="logo-img" alt=""/> </a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i className="ti-menu"></i></span> </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" href="#" data-scroll-nav="0">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="1">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="2">Servicios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="3">Precios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="4">Portafolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="5">Equipo</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="7">Contacto</a></li>
                    <li className="nav-item"><a className="nav-link btn btn-primary mx-5 iniciar-sesion" href="#">Iniciar Sesion</a></li>
                </ul>
            </div>
        </div>


      }
    </nav>
  );
}

export default Navbar;