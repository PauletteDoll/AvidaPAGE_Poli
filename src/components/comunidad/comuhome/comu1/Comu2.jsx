import React from "react";

import "./comu2.css";

function Crearuta() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={arbolito}
            alt="Descripción de la imagen"
            className="img-fluid crearuta-image" // Clase para la imagen
          />
        </div>
        <div className="col-md-6">
          <h1 className="crearuta-title mb-3 align-self-start">
            Explora con nosotros
          </h1>
          <p className="crearuta-text text-muted align-self-start">
            En Ávida, valoramos profundamente nuestros ecosistemas. Te instamos
            a unirte a nosotros para preservar estos tesoros naturales. Al
            explorar nuestras rutas, te pedimos que veas más allá de tus huellas
            y consideres el impacto que tenemos en la tierra. Los ecosistemas
            son esenciales para nuestra vida y la vida silvestre. Al cuidar
            nuestras rutas, escribimos una historia de conservación y aseguramos
            un hogar para todas las criaturas. Únete a nuestra misión para
            proteger nuestro planeta.
          </p>
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
  );
}

export default Crearuta;
