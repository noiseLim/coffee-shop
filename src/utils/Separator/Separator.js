import React from 'react';

import './separator.scss';

const Separator = ({ vector, style }) => {
  return (
    <div className='separator'>
      <hr className='separator__line' style={style} />
      <img src={vector} alt={'vector'} />
      <hr className='separator__line' style={style} />
    </div>
  );
};

export default Separator;
