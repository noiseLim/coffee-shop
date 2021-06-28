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
import HeaderElement from '../../utils/HeaderElement';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

import vector2 from '../../img/vector2.png';
import girl from '../../img/CoffeePage/girl.png';

import './coffeeApp.scss';

const getStyleWidth = () => {
  return window.screen.availWidth <= 411 ? { width: 600 } : { width: 346 };
};

const CoffeeApp = ({ ShopService }) => {
  const [searchValue, setSearchValue] = useState('');
  const [styleWidth, setStyleWidth] = useState(getStyleWidth());
  const dispatch = useDispatch();
  const productItems = useSelector((state) => state.coffeeApp.products);
  const loading = useSelector((state) => state.coffeeApp.loading);
  const error = useSelector((state) => state.coffeeApp.error);

  useEffect(() => {
    dispatch(productRequested());
    ShopService.getProductItems(searchValue)
      .then((res) => dispatch(productLoaded(res)))
      .catch(() => dispatch(productError()));
  }, [searchValue]);

  useEffect(() => {
    function handleResize() {
      setStyleWidth(getStyleWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  const styleWrapper = { paddingBottom: 40 };

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
      <HeaderElement titleHeader={'Our Coffee'} />
      <div className='coffee__beans'>
        <div className='coffee__beans-pic'>
          <img src={girl} alt={'girl'} />
        </div>
        <AboutElement
          title={'About our beans'}
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='coffee__filter-input'
          />
        </div>
        <div className='coffee__filter-container'>
          <p style={{ margin: '0 35px' }}>Or filter</p>
          <button
            onClick={() => setSearchValue('Brazil')}
            className='button__left button'
          >
            Brazil
          </button>
          <button onClick={() => setSearchValue('Kenya')} className='button'>
            Kenya
          </button>
          <button
            onClick={() => setSearchValue('Columbia')}
            className='button__right button'
          >
            Columbia
          </button>
        </div>
      </div>
      <div className='coffee__card-container'>
        <div className='coffee__card-wrapper'>
          <View items={items} />
        </div>
      </div>
    </div>
  );
};

export default WithShopService()(CoffeeApp);
