import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AboutElement from '../../utils/AboutElement/AboutElement';
import CoffeeCardItem from '../CoffeeCardItem/CoffeeCardItem';
import WithShopService from '../hoc';
import {
  productLoaded,
  productRequested,
  productError,
} from './coffeeAppSlice';

import vector2 from '../../img/vector2.png';
import girl from '../../img/CoffeePage/girl.png';

import './coffeeApp.scss';

const CoffeeApp = ({ ShopService }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const productItems = useSelector((state) => state.coffeeApp.products);
  console.log(productItems);

  useEffect(() => {
    dispatch(productRequested());
    ShopService.getProductItems()
      .then((res) => dispatch(productLoaded(res)))
      .catch(() => dispatch(productError()));
  }, []);

  const title = 'About our beans';
  const styleWrapper = { paddingBottom: 40 };
  const styleWidth = { width: 346 };

  function description() {
    return {
      __html: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />
      Afraid at highly months do things on at. Situation recommend objection do intention<br />
      so questions.<br />
      As greatly removed calling pleased improve an.<br />
      Last ask him cold feel<br />
      met spot shy want. Children me laughing we prospect answered followed. At it went<br />
      is song that held help face.`,
    };
  }

  const items = productItems.map((productItem) => {
    return <CoffeeCardItem key={productItem.id} productItem={productItem} />;
  });

  const View = ({ items }) => {
    return items;
  };

  return (
    <div className='coffee__container'>
      <div className='coffee__introduction'>
        <div className='coffee__text'>
          <p className='title'>Our Coffee</p>
        </div>
      </div>
      <div className='coffee__beans'>
        <div className='coffee__beans-pic'>
          <img src={girl} alt={'girl'} />
        </div>
        <AboutElement
          title={title}
          vector={vector2}
          description={description()}
          styleWrapper={styleWrapper}
          styleWidth={styleWidth}
        />
      </div>
      <div className='coffee__separator'>
        <hr className='coffee__separator-line' />
      </div>
      <div className='coffee__filter'>
        <div className='coffee__filter-container'>
          <p style={{ margin: '0 19px' }}>Looking for</p>
          <input
            name='Looking for'
            placeholder='start typing here...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='coffee__filter-input'
          />
        </div>
        <div className='coffee__filter-container'>
          <p style={{ margin: '0 35px' }}>Or filter</p>
          <button className='button__left button'>Brazil</button>
          <button className='button'>Kenya</button>
          <button className='button__right button'>Columbia</button>
        </div>
        <div>
          <View items={items} />
        </div>
      </div>
    </div>
  );
};

export default WithShopService()(CoffeeApp);
