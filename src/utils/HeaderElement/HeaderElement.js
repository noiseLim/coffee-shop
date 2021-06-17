import React from 'react';

import './headerElement.scss';
const HeaderElement = ({ titleHeader, style }) => {
  return (
    <div className='header' style={style}>
      <div className='header__text'>
        <p className='title'>{titleHeader}</p>
      </div>
    </div>
  );
};

export default HeaderElement;
