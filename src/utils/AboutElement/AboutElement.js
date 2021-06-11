import React from 'react';
import Separator from '../Separator/Separator';
import './aboutElement.scss';

const AboutElement = ({ title, vector, description }) => {
  const lineStyle = {
    border: '1px solid #000000',
    boxShadow: 'none',
  };

  return (
    <div className='about'>
      <div className='about__body'>
        <div className='about__header'>
          <p className='about__title'>{title}</p>
          <div className='about__separator-wrapper'>
            <Separator vector={vector} style={lineStyle} />
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
