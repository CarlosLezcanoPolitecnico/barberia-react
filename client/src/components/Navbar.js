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
                    <li className="nav-item"><a className="nav-link active" href="#" data-scroll-nav="0">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="1">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="2">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="3">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="4">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="5">Team</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="6">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" data-scroll-nav="7">Contact</a></li>
                </ul>
            </div>
        </div>


      }
    </nav>
  );
}

export default Navbar;