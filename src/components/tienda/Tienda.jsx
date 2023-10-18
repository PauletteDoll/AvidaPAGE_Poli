import React from 'react';
import './tienda.css';

import tiendaP from '../../assets/img/tienda.png';

function Tienda() {
  return (
    <div className='tienda-container'>
      <div className='imagen-y-botones'>
        <img
          src={tiendaP}
          alt='Imagen de la tienda'
          className='imagen-tienda'
        />
        <button className='boton-centrado'>Tienda</button>
      </div>
    </div>
  );
}

export default Tienda;
