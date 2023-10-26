import React from 'react';

function Team() {
  return (
    <section id="team" data-scroll-index="5" className="team section-padding pb-0">
      {


        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-head text-center">
                        <div className="section-subtitle">Nuestros Barberos</div>
                        <div className="section-title white">Especialistas</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                        <div className="team-card mb-30">
                            <div className="team-img"><img src="img/team/b1.jpg" alt="" className="w-100"/></div>
                            <div className="team-content">
                                <h3 className="team-title">julian Arango Duque<span>Barbero</span></h3>
                                <p className="team-text">Cuenta con 6 años de Experiencia en cortes, especialista en estilos de corte, barba y cejas.</p>
                                <div className="social">
                                <i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i>
                                </div> <a href="team-details.html" className="button-1 mt-15">Cortes Recientes<span></span></a>
                            </div>
                            <div className="title-box">
                                <h3 className="mb-0">Julian Esteban<span>Barbero</span></h3>
                            </div>
                        </div>
                        <div className="team-card mb-30">
                            <div className="team-img"><img src="img/team/b2.jpg" alt="" className="w-100"/></div>
                            <div className="team-content">
                                <h3 className="team-title">Camilo<span>Barbero</span></h3>
                                <p className="team-text">Cuenta con 2 años de Experiencia en cortes, especialista en estilos de corte, barba y cejas.</p>
                                <div className="social">
                                <i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i>
                                </div> <a href="team-details.html" className="button-1 mt-15">Cortes Recientes<span></span></a>
                            </div>
                            <div className="title-box">
                                <h3 className="mb-0">Camilo<span>Barbero</span></h3>
                            </div>
                        </div>
                        <div className="team-card mb-30">
                            <div className="team-img"><img src="img/team/b3.jpg" alt="" className="w-100"/></div>
                            <div className="team-content">
                                <h3 className="team-title">Samuel Duque<span>Barbero</span></h3>
                                <p className="team-text">Cuenta con 4 años de Experiencia en cortes, especialista en estilos de corte, barba y cejas.</p>
                                <div className="social">
                                <i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i>
                                </div> <a href="team-details.html" className="button-1 mt-15">Cortes Recientes<span></span></a>
                            </div>
                            <div className="title-box">
                                <h3 className="mb-0">Samuel Arango<span>Barbero</span></h3>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>


      }
      </section>
  );
}

export default Team;