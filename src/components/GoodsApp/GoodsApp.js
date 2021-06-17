import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderElement from '../../utils/HeaderElement';
import AboutElement from '../../utils/AboutElement/AboutElement';
import CoffeeCardItem from '../CoffeeCardItem/CoffeeCardItem';
import {
  productLoaded,
  productRequested,
  productError,
} from '../CoffeeApp/coffeeAppSlice';
import WithShopService from '../hoc';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

import image from '../../img/header2.png';
import coffeeCup from '../../img/coffeeCup.png';
import vector2 from '../../img/vector2.png';

const GoodsApp = ({ ShopService }) => {
  const productItems = useSelector((state) => state.coffeeApp.products);
  const loading = useSelector((state) => state.coffeeApp.loading);
  const error = useSelector((state) => state.coffeeApp.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productRequested());
    ShopService.getProductItems('')
      .then((res) => dispatch(productLoaded(res)))
      .catch(() => dispatch(productError()));
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  const imageHeader = {
    backgroundImage: `url(${image})`,
  };
  const styleWidth = { width: 346 };
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
    <div style={{ background: '#ffffff' }}>
      <HeaderElement titleHeader={'For your pleasure'} style={imageHeader} />
      <div className='coffee__beans'>
        <div className='coffee__beans-pic'>
          <img src={coffeeCup} alt={'cup'} />
        </div>
        <AboutElement
          title={'About our goods'}
          vector={vector2}
          description={description()}
          styleWrapper={styleWrapper}
          styleWidth={styleWidth}
        />
      </div>
      <div className='coffee__separator'>
        <hr className='coffee__separator-line' />
      </div>
      <div className='coffee__card-container'>
        <div className='coffee__card-wrapper'>
          <View items={items} />
        </div>
      </div>
    </div>
  );
};

export default WithShopService()(GoodsApp);
