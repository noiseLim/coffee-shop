import React from 'react';
import { COFFEE_ITEM_ROUTE } from '../../utils/consts';
import { useHistory } from 'react-router-dom';

const CoffeeCardItem = ({ productItem }) => {
  const history = useHistory();
  const { id, img, title, country, price } = productItem;

  return (
    <div
      onClick={() => history.push(COFFEE_ITEM_ROUTE + '/' + productItem.id)}
      key={id}
      className='card'
      style={{
        marginTop: 60,
        boxShadow: ' 4px 4px 20px rgba(0, 0, 0, 0.25)',
        minHeight: 260,
        cursor: 'pointer',
      }}
    >
      <div className='card__img'>
        <img src={img} alt={title}></img>
      </div>
      <div className='card__content'>
        <p className='card__content-title'>{title}</p>
        <p className='card__content-country'>{country}</p>
        <p className='card__content-price'>{price}$</p>
      </div>
    </div>
  );
};

export default CoffeeCardItem;
