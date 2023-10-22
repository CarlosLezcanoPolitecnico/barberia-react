import React from 'react';

function About() {
  return (
    <div>

      {
        <div>
            <section id="about" data-scroll-index="1" className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-30">
                            <div className="section-head mb-20">
                                <div className="section-subtitle">Establecido 2018</div>
                                <div className="section-title">New York Barber Shop</div>
                            </div>
                            <p>Ven a experimentar una barbería única y vanguardista para todas tus necesidades de cabello y barba.</p>
                            <p></p>
                            <ul className="about-list list-unstyled mb-30">
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Somos barberos profesionales y certificados.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Utilizamos productos de calidad para que luzcas perfecto.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                                    <div className="about-list-text">
                                        <p>Nos preocupamos por la satisfacción de nuestros clientes.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp"> <img src="img/about2.jpg" alt="" className="mt-90 mb-30"/> </div>
                        <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp"> <img src="img/about.jpg" alt=""/> </div>
                    </div>
                </div>
            </section>
            <section className="services-box section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item"> <span className="icon icon icon-icon-1-6"></span>
                                <div className="cont">
                                    <h5>Cortes</h5>
                                    <p>Transformando tu estilo con cortes de precisión y tendencia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item"> <span className="icon icon-icon-1-3"></span>
                                <div className="cont">
                                    <h5>Fades</h5>
                                    <p>Experimenta la excelencia en cortes fades, donde la maestría se encuentra con la innovación para tu estilo impecable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item"> <span className="icon icon-icon-1-1"></span>
                                <div className="cont">
                                    <h5>Afeitados</h5>
                                    <p>Descubre la experiencia definitiva de afeitados: lujo, cuidado de la piel y resultados impecables en cada servicio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      }
      
      </div>
  );
}

export default About;