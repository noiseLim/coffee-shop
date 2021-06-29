import React, { useEffect, useState } from 'react';

import AboutElement from '../../utils/AboutElement/AboutElement';
import HeaderElement from '../../utils/HeaderElement';
import SearchPanel from '../SearchPanel/SearchPanel';
import ProductList from '../ProductList/ProductList';

import vector2 from '../../img/vector2.png';
import girl from '../../img/CoffeePage/girl.png';

import './coffeeApp.scss';

const getStyleWidth = () => {
  return window.screen.availWidth <= 411 ? { width: 600 } : { width: 346 };
};

const CoffeeApp = () => {
  const [styleWidth, setStyleWidth] = useState(getStyleWidth());

  useEffect(() => {
    function handleResize() {
      setStyleWidth(getStyleWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <SearchPanel />
      <ProductList />
    </div>
  );
};

export default CoffeeApp;
