// Guia.js
import React from 'react';
import guide from '../../assets/img/ver-guia.png';
import './guia.css';

function Guia() {
  return (
    <div className='guia-container'>
      <div className='guia-image'>
        <img src={guide} alt='Descripción de la imagen' />
      </div>
      <div className='guia-button'></div>
      <div className='section-divider'></div>
    </div>
  );
}

export default Guia;
