import React from 'react';

const CoffeeCardItem = ({ productItem }) => {
  const { id, img, title, price } = productItem;
  return (
    <div key={id} className='main__best-card'>
      <div className='main__best-img'>
        <img src={img} alt={title}></img>
      </div>
      <div className='main__best-content'>
        <p className='main__best-label'>{title}</p>
        {/* <p className='main__best-label'>{country}</p> */}
        <p className='main__best-price'>{price}$</p>
      </div>
    </div>
  );
};

export default CoffeeCardItem;
