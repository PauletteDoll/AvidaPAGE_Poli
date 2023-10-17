import React from 'react';
import './comunidad.css';
import Carousel from 'react-bootstrap/Carousel';

import como1 from '../../assets/img/comu1.avif';
import comu2 from '../../assets/img/comu2.avif';
import como3 from '../../assets/img/comu3.avif';

const Comunidad = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 widget-container'>
          {/* Widget de Instagram */}
          <iframe
            src='./instagram.html'
            title='Instagram'
            width='100%'
            height='500'
          />
        </div>
        <div className='col-md-6'>
          <Carousel interval={3000}>
            <Carousel.Item>
              <div className='card_container'>
                <img
                  src={como1}
                  alt='Descripción de la imagen 1'
                  className='carousel-image'
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='card_container'>
                <img
                  src={comu2}
                  alt='Descripción de la imagen 2'
                  className='carousel-image'
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='card_container'>
                <img
                  src={como3}
                  alt='Descripción de la imagen 3'
                  className='carousel-image'
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Comunidad;
