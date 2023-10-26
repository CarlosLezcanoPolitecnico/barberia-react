import React from 'react';

function Services() {
  return (
    <section id="services" data-scroll-index="2" className="barber-services section-padding">
      {

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-head text-center">
                        <div className="section-subtitle">LO QUE OFRECEMOS</div>
                        <div className="section-title">Servicios de barbería</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <a href="services-page.html">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src="img/services/2.jpg" alt=""/> </div>
                            <div className="con">
                                <div className="icon icon-icon-1-6"></div>
                                <h5>Corte de cabello</h5>
                                <div className="line"></div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="permalink">Renueva tu estilo con cortes de pelo que marcan tendencia.</div>
                                        <h6>$13.000 Cop</h6>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <a href="services-page.html">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src="img/services/5.jpg" alt=""/> </div>
                            <div className="con">
                                <div className="icon icon-icon-1-1"></div>
                                
                                <h5>Corte de barba</h5>
                                <div className="line"></div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="permalink">Define tu masculinidad con cortes de barba perfectamente diseñados y cuidados.</div>
                                        <h6>$6.000 Cop</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <a href="services-page.html">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src="img/services/3.jpg" alt=""/> </div>
                            <div className="con">
                                <div className="icon icon-icon-1-12"></div>
                                <h5>corte completo, cabello y barba</h5>
                                <div className="line"></div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="permalink">Revitaliza tu cabello con nuestro relajante y rejuvenecedor lavado capilar.</div>
                                        <h6>$18.000 Cop</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>



      }
      </section>
  );
}

export default Services;