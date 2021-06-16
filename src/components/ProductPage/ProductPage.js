import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import WithShopService from '../hoc';

import './productPage.scss';

const ProductPage = ({ ShopService }) => {
  const [product, setProduct] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    ShopService.getOneItem(id).then((res) => setProduct(res));
  }, []);
  // const {title, country, price, description, img} = product;
  const { title } = product;
  console.log(product);

  return (
    <div className='product__container'>
      <div className='coffee__introduction'>
        <div className='coffee__text'>
          <p className='title'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default WithShopService()(ProductPage);
