import React from 'react';

function Services() {
  return (
    <section id="services" data-scroll-index="2" className="barber-services section-padding">
      {

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-head text-center">
                        <div className="section-subtitle">What we're offering</div>
                        <div className="section-title">Barber Services</div>
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
                                <h5>Hair Cut</h5>
                                <div className="line"></div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="permalink">Hair cut amet ravida haretra nuam the drana miss uctus enec accumsan.</div>
                                        <h6>$30</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <a href="services-page.html">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src="img/services/1.jpg" alt=""/> </div>
                            <div className="con">
                                <div className="icon icon-icon-1-1"></div>
                                <h5>Beard Trim</h5>
                                <div className="line"></div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="permalink">Shaves ons amet ravida haretra nuam the drana miss uctus enec accumsan.</div>
                                        <h6>$20</h6>
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
                                <div className="icon icon-icon-1-4"></div>
                                <h5>Hair Wash</h5>
                                <div className="line"></div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="permalink">Hair wash amet ravida haretra nuam the drana miss uctus enec accumsan.</div>
                                        <h6>$15</h6>
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