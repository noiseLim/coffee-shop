import React from 'react';
import AboutElement from '../../utils/AboutElement/AboutElement';

import vector from '../../img/vector.png';
import vector2 from '../../img/vector2.png';

import './mainApp.scss';
import Separator from '../../utils/Separator/Separator';

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

  const title = 'About Us';

  function description() {
    return {
      __html: `Extremity sweetness difficult behaviour he of. On disposal of as
    landlord horrible. Afraid at highly months do things on at.
    Situation recommend objection do intention so questions. As
    greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered
    followed. At it went is song that held help face.<br />
    <br />
    Now residence dashwoods she excellent you. Shade being under his
    bed her, Much read on as draw. Blessing for ignorant exercise any
    yourself unpacked. Pleasant horrible but confined day end
    marriage. Eagerness furniture set preserved far recommend. Did
    even but nor are most gave hope. Secure active living depend son
    repair day ladies now.`,
    };
  }

  const bestList = data.map((item) => {
    const { id, label, img, price } = item;
    return (
      <div key={id} className='main__best-card'>
        <div className='main__best-img'>
          <img src={img} alt={label}></img>
        </div>
        <div className='main__best-content'>
          <p className='main__best-label'>{label}</p>
          <p className='main__best-price'>{price}$</p>
        </div>
      </div>
    );
  });

  return (
    <div className='main'>
      <div className='main__introduction'>
        <div className='main__text'>
          <p className='title'>Everything You Love About Coffee</p>
          <div className='main__separator-wrapper'>
            <Separator vector={vector} />
          </div>
          <p className='subtitle'>
            We makes every day full of energy and taste
          </p>
          <p className='main__subtitle subtitle'>Want to try our beans?</p>
          <button className='main__btn'>More</button>
        </div>
      </div>
      <div className='main__about-wrapper'>
        <AboutElement
          title={title}
          vector={vector2}
          description={description()}
        />
      </div>
      <div className='main__best'>
        <div className='main__text'>
          <p className='main__best-subtitle subtitle'>Our best</p>
        </div>
        <div className='main__best-wrapper'>{bestList}</div>
      </div>
    </div>
  );
};

export default MainPage;
