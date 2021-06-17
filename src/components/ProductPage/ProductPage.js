import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import WithShopService from '../hoc';
import aromisticoItemFoto from '../../img/aromisticoItemFoto.png';
import Separator from '../../utils/Separator/Separator';
import vector2 from '../../img/vector2.png';

import './productPage.scss';

const ProductPage = ({ ShopService }) => {
  const [product, setProduct] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    ShopService.getOneItem(id).then((res) => setProduct(res));
  }, []);

  const { country, price, description } = product;

  const lineStyle = {
    border: '1px solid #000000',
    boxShadow: 'none',
  };

  return (
    <div className='product__container'>
      <div className='coffee__introduction'>
        <div className='coffee__text'>
          <p className='title'>Our Coffee</p>
        </div>
      </div>

      <div className='product__current'>
        <div className='product__pic'>
          <img src={aromisticoItemFoto} alt={'aromistico'} />
        </div>
        <div className='product__header'>
          <p className='product__title'>About It</p>
          <div className='product__separator-wrapper'>
            <Separator vector={vector2} style={lineStyle} />
          </div>
          <div className='product__description'>
            <b>Country:</b> {country}
            <br />
            <br />
            <b>Description:</b> {description}
            <br />
            <br />
            <b>
              Price:<span className='product__price'> {price}$</span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithShopService()(ProductPage);
