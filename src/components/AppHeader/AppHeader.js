import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { MAIN_ROUTE, COFFEE_ROUTE, GOODS_ROUTE } from '../../utils/consts';
import vector4 from '../../img/vector4.png';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    background: 'transparent',
  },
  grid: {
    margin: '52px 0 0 179px',
  },
  img: {
    position: 'absolute',
    left: 148,
  },
  link: {
    fontSize: 12,
    color: '#ffffff',
    paddingRight: 40,
    height: 13,
  },
});

const AppHeader = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container alignItems='flex-end' className={classes.grid}>
        <img src={vector4} alt={'vector3'} className={classes.img} />
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
  );
};

export default AppHeader;
