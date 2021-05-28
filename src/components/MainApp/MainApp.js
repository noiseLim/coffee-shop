import React from 'react';
import vector from '../../img/vector.png';
import vector2 from '../../img/vector2.png';

import './mainApp.scss';

const MainPage = () => {
  return (
    <div className='about__main'>
      <div className='about__introduction'>
        <div className='about__text'>
          <p className='title'>Everything You Love About Coffee</p>
          <div className='about__line'>
            <hr className='about__moto-line' />
            <img src={vector} alt={'vector'} />
            <hr className='about__moto-line' />
          </div>
          <p className='about__subtitle subtitle'>
            We makes every day full of energy and taste
          </p>
          <p className='about__subtitle-second subtitle'>
            Want to try our beans?
          </p>
          <button className='about__btn'>More</button>
        </div>
      </div>
      <div className='about__us'>
        <div className='about__description'>
          <p className='about__us-subtitle subtitle'>About Us</p>
          <div className='about__line'>
            <hr className='about__moto-line-second' />
            <img src={vector2} alt={'vector2'} />
            <hr className='about__moto-line-second' />
          </div>
          <div className='about__description-text'>
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as
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
              repair day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
