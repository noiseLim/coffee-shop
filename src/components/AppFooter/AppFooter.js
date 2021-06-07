import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MAIN_ROUTE, COFFEE_ROUTE, GOODS_ROUTE } from '../../utils/consts';
import vector2 from '../../img/vector2.png';
import vector3 from '../../img/vector3.png';

const useStyles = makeStyles({
  container: {
    background: '#ffffff',
  },
  grid: {
    padding: '30px 0 10px',
  },
  link: {
    fontSize: 12,
    height: 18,
    color: '#000000',
    padding: '0 20px',
  },
});

const AppFooter = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' className={classes.container}>
      <Grid item>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='flex-end'
          className={classes.grid}
        >
          <img src={vector3} alt={'vector3'} />
          <Link href={MAIN_ROUTE} underline='none' className={classes.link}>
            Coffee house
          </Link>
          <Link href={COFFEE_ROUTE} underline='none' className={classes.link}>
            Our coffee
          </Link>
          <Link href={GOODS_ROUTE} underline='none' className={classes.link}>
            For your pleasure
          </Link>
        </Grid>
      </Grid>
      <Grid item>
        <div className='about__line'>
          <hr className='about__moto-line-second' />
          <img src={vector2} alt={'vector2'} />
          <hr className='about__moto-line-second' />
        </div>
      </Grid>
    </Grid>
  );
};

export default AppFooter;
