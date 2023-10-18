import React from 'react';
import './Comunidad.css';

import anima1 from '../../assets/img/canima1.png';
import anima2 from '../../assets/img/canima2.png';
import anima3 from '../../assets/img/canima3.png';
import user1 from '../../assets/img/cuser1.png';
import user2 from '../../assets/img/cuser2.png';
import user3 from '../../assets/img/cuser3.png';

function Comunidad() {
  return (
    <div className='comunidad-container'>
      <div className='animal-images'>
        <div className='animal'>
          <img src={anima1} alt='Animal 1' />
          <div className='animal-info'>
            <img src={user1} alt='Avatar 1' />
            <div className='nombre-localidad'>
              <div className='nombre'>Maria L.</div>
              <div className='localidad'>Parque Bustamante</div>
            </div>
          </div>
          <p>Descripción de Persona 1</p>
        </div>
        <div className='animal'>
          <img src={anima2} alt='Animal 2' />
          <div className='animal-info'>
            <img src={user2} alt='Avatar 2' />
            <div className='nombre-localidad'>
              <div className='nombre'>Juan C.</div>
              <div className='localidad'>Quinta Normal</div>
            </div>
          </div>
          <p>Descripción de Persona 2</p>
        </div>
        <div className='animal'>
          <img src={anima3} alt='Animal 3' />
          <div className='animal-info'>
            <img src={user3} alt='Avatar 3' />
            <div className='nombre-localidad'>
              <div className='nombre'>Carlos E.</div>
              <div className='localidad'>Templo Bahai</div>
            </div>
          </div>
          <p>Descripción de Persona 3</p>
        </div>
      </div>
      <div className='section-divider'></div>
    </div>
  );
}

export default Comunidad;
