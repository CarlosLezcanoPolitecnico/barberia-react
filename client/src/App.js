import { useState } from "react";
import Axios from "axios";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Score from './components/Score';
import Portafolio from './components/Portafolio';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Login from "./components/Login";
import Citas from "./components/Citas";
import CitasBarberia from "./components/CitasBarberia";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      
     
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          <Navbar />
          <Header />
          <About />
          <Experience />
          <Services />
          <Score />
          <Portafolio />
          <Pricing />
          <Team />
          <div className="listaCitas">
            <CitasBarberia />
          </div>
          <Citas />
        </>
      )}
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="owl-carousel owl-theme">
                <div className="clients-logo">
                  <a href="#0"><img src="img/clients/2.png" alt=""/></a>
                </div>
                <div className="clients-logo">
                  <a href="#0"><img src="img/clients/3.png" alt=""/></a>
                </div>
                <div className="clients-logo">
                  <a href="#0"><img src="img/clients/4.png" alt=""/></a>
                </div>
                <div className="clients-logo">
                  <a href="#0"><img src="img/clients/5.png" alt=""/></a>
                </div>
                <div className="clients-logo">
                  <a href="#0"><img src="img/clients/6.png" alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer"> 
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="footer-column footer-contact">
                  <h3 className="footer-title">Contacto</h3>
                  <p className="footer-contact-text">Dg 69B Av41DD-49
                    <br/>Bello, Antoquia
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone">301 786 5121</p>
                    <p className="footer-contact-mail">esteban_ad@barber.com</p>
                  </div>
                  <div className="footer-about-social-list"> <a href="https://www.instagram.com/julian.esteban_ad/"><i className="ti-instagram"></i></a> <a href="https://www.facebook.com/julian.duque.161446"><i className="ti-facebook"></i></a></div>
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="item opening">
                  <h3 className="footer-title">Horario Laboral</h3>
                  <ul>
                    <li>
                      <div className="tit">Lunes</div>
                      <div className="dots"></div> <span>10:00AM - 8:00PM</span>
                    </li>
                    <li>
                      <div className="tit">Martes</div>
                      <div className="dots"></div> <span>10:00AM  - 8:00PM</span>
                    </li>
                    <li>
                      <div className="tit">Miercoles</div>
                      <div className="dots"></div> <span>10:00AM  - 8:00PM</span>
                    </li>
                    <li>
                      <div className="tit">Jueves</div>
                      <div className="dots"></div> <span>10:00AM  - 8:00PM</span>
                    </li>
                    <li>
                      <div className="tit">Viernes</div> 
                      <div className="dots"></div> <span>10:00AM  - 8:00PM</span>
                    </li>
                    <li>
                      <div className="tit">Sabado</div>
                      <div className="dots"></div> <span>9:00AM  - 9:00PM</span>
                    </li>
                    <li>
                      <div className="tit">Domingo</div>
                      <div className="dots"></div> <span>9:00AM  - 6:00PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Login onLogin={handleLogin} onLogout={handleLogout} />
    </div>
  );
}

export default App;
