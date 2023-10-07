import React from 'react';

function Pricing() {
  return (
    <section id="pricing" data-scroll-index="3" className="barber-pricing section-padding position-re">
      {
        <div className="container">
            <div className="row">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-head text-center">
                            <div className="section-subtitle">Precios Plan</div>
                            <div className="section-title">Precios Barberia</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Sencillo</div>
                                <div className="dots"></div>
                                <div className="price">$12.000</div>
                            </div>
                            <p><i>Corte Sencillo el cual solo se usaran las maquinas para cortar el cabello.</i></p>
                        </div>
                    </div>
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Sencillo  Cejas</div>
                                <div className="dots"></div>
                                <div className="price">$15.000</div>
                            </div>
                            <p><i>Corte Sencillo el cual solo se usaran las maquinas para cortar el cabello y las cejas.</i></p>
                        </div>
                    </div>
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Sencillo Barba</div>
                                <div className="dots"></div>
                                <div className="price">$18.000</div>
                            </div>
                            <p><i>Corte Sencillo el cual solo se usaran las maquinas para cortar el cabello y la barba.</i></p>
                        </div>
                    </div>
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Full</div>
                                <div className="dots"></div>
                                <div className="price">$20.000</div>
                            </div>
                            <p><i>Corte Sencillo el cual solo se usaran las maquinas para cortar el cabello y las cejas y la barba.</i></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Avanzado</div>
                                <div className="dots"></div>
                                <div className="price">$13.000</div>
                            </div>
                            <p><i>Corte Avanzado el cual se usaran las tijeras para cortar el cabello ademas de las maquinas, Recomendado para cabello largo.</i></p>
                        </div>
                    </div>
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Avanzado Cejas</div>
                                <div className="dots"></div>
                                <div className="price">$16.000</div>
                            </div>
                            <p><i>Corte Avanzado el cual se usaran las tijeras para cortar el cabello ademas de las maquinas y las cejas con un lubricante especial, Recomendado para cabello largo.</i></p>
                        </div>
                    </div>
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Corte Avanzado Barba</div>
                                <div className="dots"></div>
                                <div className="price">$20.000</div>
                            </div>
                            <p><i>Corte el cual se le hecha un aceite especial a la barba para suavisar y dar brillo.</i></p>
                        </div>
                    </div>
                    <div className="menu-list mb-30">
                        <div className="item">
                            <div className="flex">
                                <div className="title">Luxury Full Service</div>
                                <div className="dots"></div>
                                <div className="price">$25.000</div>
                            </div>
                            <p><i>Todo lo anterior.</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      }
      </section>
  );
}

export default Pricing;