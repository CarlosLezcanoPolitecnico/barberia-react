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
                                <div className="section-subtitle">17 Year of Experience</div>
                                <div className="section-title white">Making people look awesome since 2006</div>
                            </div>
                            <p>Come experience a unique and edgy barbershop for all your hair and beard needs. Vulputate ons amet ravida haretra nuam the drana miss uctus enec accumsan justo aliquam sit amet auctor orci done vitae risus duise nunc sapien.</p>
                            <div className="about-bottom"> <img src="img/signature.svg" alt="" className="image about-signature"/>
                                <div className="about-name-wrapper">
                                    <div className="about-rol">Barber, Founder</div>
                                    <div className="about-name">Harold Brown</div>
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