import React, { useState } from 'react';


function Citas() {

    
    

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fechaCita, setFechaCita] = useState('')
    const [horaCita, setHoraCita] = useState('')
    const [barbero, setBarbero] = useState('')

    


    
  
    const mensaje = document.querySelector('#mensaje1')

    const agendarCita  = (e) => {
        e.preventDefault();

        const data = {
            nombre : nombre,
            telefono : telefono,
            fechaCita : fechaCita,
            horaCita : horaCita,
            barbero : barbero
        }

        fetch('http://localhost:3333/agendarCita', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.status === 'success'){
                mensaje.classList.remove('btn-danger')
                mensaje.classList.add('btn-success')
                mensaje.innerHTML = data.message
                setTimeout(()  => {
                    mensaje.classList.remove('btn-success')
                    mensaje.innerHTML = ''
                }, 2000)
            }else{
                mensaje.classList.remove('btn-success')
                mensaje.classList.add('btn-danger')
                mensaje.innerHTML = data.message
                setTimeout(()  => {
                    mensaje.classList.remove('btn-danger')
                    mensaje.innerHTML = ''
                }, 2000)
            }
        })
    }
    
    return (
    <div>
      {
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
                                                    <input type="text" className="form-control input" placeholder="Nombre" required onChange={(event) => {setNombre(event.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input1_wrapper">
                                                <label>Telefono</label>
                                                <div className="input2_inner">
                                                    <input type="text" className="form-control input" placeholder="Telefono" required onChange={(event) => {setTelefono(event.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input1_wrapper">
                                                <label>Dia</label>
                                                <div className="input1_inner">
                                                    <input type="text" className="form-control input" placeholder="Dia" required onChange={(event) => {setFechaCita(event.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="select1_wrapper">
                                                <label>Hora</label>
                                                <div className="select1_inner">
                                                    <input type="text" className="form-control input" placeholder="Hora" required onChange={(event) => {setHoraCita(event.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="select1_wrapper">
                                                <label>Barbero</label>
                                                <div className="select1_inner">
                                                    <input type="text" className="form-control input" placeholder="Barbero" required onChange={(event) => {setBarbero(event.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="btn col-12" id="mensaje1"></div>
                                            <button type="submit" className="btn-form1-submit mt-15" onClick={agendarCita}>Agenda Tu cita</button>
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
      }
    </div>
    
  );
}

export default Citas;


