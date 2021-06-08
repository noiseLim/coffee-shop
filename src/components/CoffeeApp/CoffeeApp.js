import React from 'react';
import AboutElement from '../../utils/AboutElement/AboutElement';

import vector2 from '../../img/vector2.png';

import './coffeeApp.scss';

const CoffeeApp = () => {
  const title = 'About Us';

  const description = `Extremity sweetness difficult behaviour he of. On disposal of as
  landlord horrible. Afraid at highly months do things on at.
  Situation recommend objection do intention so questions. As
  greatly removed calling pleased improve an. Last ask him cold feel
  met spot shy want. Children me laughing we prospect answered
  followed. At it went is song that held help face. <br />
  <br />
  Now residence dashwoods she excellent you. Shade being under his
  bed her, Much read on as draw. Blessing for ignorant exercise any
  yourself unpacked. Pleasant horrible but confined day end
  marriage. Eagerness furniture set preserved far recommend. Did
  even but nor are most gave hope. Secure active living depend son
  repair day`;

  return (
    <div className='coffee__container'>
      <div className='coffee__introduction'>
        <div className='coffee__text'>
          <p className='title'>Our Coffee</p>
        </div>
      </div>
      <div className='coffee__beans'>
        <div className='coffee__beans-pic'></div>
        <AboutElement
          title={title}
          vector={vector2}
          description={description}
        />
      </div>
    </div>
  );
};

export default CoffeeApp;
