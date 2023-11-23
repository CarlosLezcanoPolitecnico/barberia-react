import React from 'react';

function Header() {
  return (
    <header id="home" data-scroll-index="0" className="header slider-fade">
      {
        
        <div className="owl-carousel owl-theme">

            <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/2.jpg">
                <div className="v-middle caption">
                   <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center"> 
                                <h6>Mantente alerta, luce bien</h6>
                                <h1>tu estilo, tu marca, tu personalidad!!</h1> 
                                <h4>Dg 69B Av 41DD - 45</h4> 
                                <a href="#contact" className="button-1 mt-30">Agenda Tu Cita<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/1.jpg">
                <div className="v-middle caption">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center"> 
                                <h6>Establecido en 2018</h6>
                                <h1>La peluquería que necesitarás</h1> 
                                <h4>Dg 69B Av 41DD - 45</h4> 
                                <a href="#contact" className="button-1 mt-30">Agenda Tu Cita<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item bg-img" data-overlay-dark="5" data-background="img/slider/3.jpg">
                <div className="v-middle caption">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center"> 
                                <h6>Mantente alerta, luce bien</h6>
                                <h1>Consigue el estilo que te mereces </h1> 
                                <h4>Dg 69B Av 41DD - 45</h4> 
                                <a href="#contact" className="button-1 mt-30">Agenda Tu Cita<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
      }
      </header>
  );
}

export default Header;