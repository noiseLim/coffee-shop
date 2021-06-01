import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { MAIN_ROUTE, COFFEE_ROUTE, GOODS_ROUTE } from '../../utils/consts';
import vector2 from '../../img/vector2.png';
import vector3 from '../../img/vector3.png';

import './appFooter.scss';

const useStyles = makeStyles({
  root: {
    fontSize: 12,
    color: '#000000',
    // flex: '1 1 auto',
    padding: '0 40px',
  },
});

const AppFooter = () => {
  const classes = useStyles();
  return (
    <div className='footer__container'>
      <div className='footer__link-block'>
        <img src={vector3} alt={'vector3'} />
        <Link href={MAIN_ROUTE} underline='none' className={classes.root}>
          Coffee house
        </Link>
        <Link href={COFFEE_ROUTE} underline='none' className={classes.root}>
          Our coffee
        </Link>
        <Link href={GOODS_ROUTE} underline='none' className={classes.root}>
          For your pleasure
        </Link>
      </div>
      <div className='about__line'>
        <hr className='about__moto-line-second' />
        <img src={vector2} alt={'vector2'} />
        <hr className='about__moto-line-second' />
      </div>
    </div>
  );
};

export default AppFooter;
