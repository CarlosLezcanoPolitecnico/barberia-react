import React from 'react';

function Experience() {
  return (
    <section className="about section-padding bg-darkbrown">
      {
        
        <div className="container">
            <div className="row">
                <div className="col-md-5 mb-30 animate-box" data-animate-effect="fadeInLeft"> <img src="img/about3.jpg" alt=""/> </div>
                <div className="col-md-7 valign mb-30 animate-box" data-animate-effect="fadeInRight">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-head mb-20">
                                <div className="section-subtitle">5 años de experiencia</div>
                                <div className="section-title white">Haciendo que la gente luzca increíble desde 2018</div>
                            </div>
                            <p>En nuestra barbería, ofrecemos la experiencia definitiva de cuidado masculino. Desde el momento en que entras, te sumergirás en un mundo de atención personalizada y estilo inigualable. Nuestros expertos barberos están comprometidos con la perfección en cada corte, afeitado y tratamiento facial. Utilizamos productos de alta calidad y técnicas de vanguardia para asegurarnos de que te sientas rejuvenecido y con confianza en tu apariencia. Cada visita es una oportunidad para relajarte, recargarte y salir luciendo y sintiéndote increíble. Descubre lo que realmente significa la excelencia en la barbería con nosotros, donde tu satisfacción y estilo son nuestra prioridad número uno.</p>
                            <div className="about-bottom"> <img src="img/signature.svg" alt="" className="image about-signature"/>
                                <div className="about-name-wrapper">
                                    <div className="about-rol">Barbero, Foundador</div>
                                    <div className="about-name">Julian Esteban Arango Duque</div>
                                </div>
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

export default Experience;