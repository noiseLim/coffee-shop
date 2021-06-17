import React from 'react';
import spinner from './spinner.svg';

const Spinner = () => {
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  };

  return (
    <div style={spinnerStyle}>
      <img src={spinner} alt='spinner'></img>
    </div>
  );
};

export default Spinner;
