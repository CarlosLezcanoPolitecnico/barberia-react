import React from 'react';

function Contact() {
  return (
    <div>

    
    
      {
        <div>
            <section id="contact" data-scroll-index="7" className="testimonials">
                <div className="background bg-img bg-fixed section-padding pb-0" data-background="img/slider/20.jpg" data-overlay-dark="6">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-5 mb-30 mt-60">
                                <p className="mb-0"><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i></p>
                                <h5>Somos los mejores barberos y peluquerías de Medellin.</h5>
                                <div className="reservations mb-10">
                                    <div className="icon color-1"><span className="icon-icon-1-1"></span></div>
                                    <div className="text">
                                        <p className="color-1">Cita</p> <a className="color-1" href="cel:301 786 5121">301 786 5121</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-5 offset-md-2" id="agendar-cita">
                                <div className="booking-box">
                                    <div className="head-box text-center">
                                        <h4>Agenda Una Cita</h4>
                                    </div>
                                    <div className="booking-inner clearfix">
                                        <form className="form1 clearfix">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="input1_wrapper">
                                                        <label>Nombre</label>
                                                        <div className="input2_inner">
                                                            <input type="text" className="form-control input" placeholder="Nombre" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input1_wrapper">
                                                        <label>Telefono</label>
                                                        <div className="input2_inner">
                                                            <input type="text" className="form-control input" placeholder="Telefono" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input1_wrapper">
                                                        <label>Dia</label>
                                                        <div className="input1_inner">
                                                            <input type="text" className="form-control input datepicker" placeholder="Dia" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="select1_wrapper">
                                                        <label>Hora</label>
                                                        <div className="select1_inner">
                                                        <select className="select2 select" style={{ width: '100%' }}>
                                                            <option value="0">Hora</option>
                                                            <option value="1">10:00 am</option>
                                                            <option value="2">11:00 am</option>
                                                            <option value="3">12:00 pm</option>
                                                            <option value="4">14:00 pm</option>
                                                            <option value="5">16:00 pm</option>
                                                            <option value="6">18:00 pm</option>
                                                            <option value="7">20:00 pm</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="select1_wrapper">
                                                        <label>Barbero</label>
                                                        <div className="select1_inner">
                                                            <select className="select2 select" style={{ width: '100%' }}>
                                                                <option value="0">Barbero</option>
                                                                <option value="0">julian</option>
                                                                <option value="1">Camilo</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn-form1-submit mt-15">Agenda Tu cita</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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

export default Contact;