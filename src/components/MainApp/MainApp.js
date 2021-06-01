import React from 'react';

import vector from '../../img/vector.png';
import vector2 from '../../img/vector2.png';

import './mainApp.scss';

const MainPage = () => {
  const data = [
    {
      id: 1,
      label: 'Solimo Coffee Beans 2 kg',
      img: '../../../image/best1.png',
      price: 10.73,
    },
    {
      id: 2,
      label: 'Presto Coffee Beans 1 kg',
      img: '../../../image/best2.png',
      price: 15.99,
    },
    {
      id: 3,
      label: 'AROMISTICO Coffee 1 kg',
      img: '../../../image/best3.png',
      price: 6.99,
    },
  ];

  const bestList = data.map((item) => {
    const { id, label, img, price } = item;
    return (
      <div key={id} className='about__best-card'>
        <div className='about__best-img'>
          <img src={img} alt={label}></img>
        </div>
        <div className='about__best-content'>
          <p className='about__best-label'>{label}</p>
          <p className='about__best-price'>{price}$</p>
        </div>
      </div>
    );
  });

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
      <div className='about__best'>
        <div className='about__description'>
          <p className='about__us-subtitle subtitle'>Our best</p>
        </div>
        <div className='about__best-wrapper'>{bestList}</div>
      </div>
    </div>
  );
};

export default MainPage;
