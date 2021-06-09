import React from 'react';
import './aboutElement.scss';

const AboutElement = ({ title, vector, description }) => {
  return (
    <div className='about'>
      <div className='about__body'>
        <div className='about__header'>
          <p className='about__title title'>{title}</p>
          <div className='about__line'>
            <hr className='about__moto-line-second' />
            <img src={vector} alt={'vector2'} />
            <hr className='about__moto-line-second' />
          </div>
        </div>
        <div className='about__description'>
          <div dangerouslySetInnerHTML={description} />
        </div>
      </div>
    </div>
  );
};

export default AboutElement;
