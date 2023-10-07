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
                                <h6>Stay sharp, Look good</h6>
                                <h1>Not Just A Barbers, But A Lifestyle</h1> 
                                <h4>Broadway St, NYC. Appointment: 855 100 4444</h4> 
                                <a href="#" className="button-1 mt-30">Make Appointment<span></span></a>
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
                                <h6>Established 2006</h6>
                                <h1>Barber Shop You Will Every Need</h1> 
                                <h4>Broadway St, NYC. Appointment: 855 100 4444</h4> 
                                <a href="#" className="button-1 mt-30">Make Appointment<span></span></a>
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
                                <h6>Stay sharp, Look good</h6>
                                <h1>Get Your Style Your Deserve </h1> 
                                <h4>Broadway St, NYC. Appointment: 855 100 4444</h4> 
                                <a href="#" className="button-1 mt-30">Make Appointment<span></span></a>
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