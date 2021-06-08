import React from 'react';
import './AboutElement';

const AboutElement = ({ title, vector, description }) => {
  return (
    <div className='about__us'>
      <div className='about__description'>
        <p className='about__us-subtitle subtitle'>{title}</p>
        <div className='about__line'>
          <hr className='about__moto-line-second' />
          <img src={vector} alt={'vector2'} />
          <hr className='about__moto-line-second' />
        </div>
        <div className='about__description-text'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutElement;
