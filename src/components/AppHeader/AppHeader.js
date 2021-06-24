import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MenuBurger from '../../utils/MenuBurger/MenuBurger';
import { MAIN_ROUTE, COFFEE_ROUTE, GOODS_ROUTE } from '../../utils/consts';
import vector4 from '../../img/vector4.png';

const useStyles = makeStyles((theme) => ({
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
    top: 35,
  },
  link: {
    fontSize: 12,
    color: '#ffffff',
    paddingRight: 40,
    height: 13,
  },
  sectionDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container alignItems='flex-end' className={classes.grid}>
        <div className={classes.sectionDesktop}>
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
        </div>
        <div className={classes.sectionMobile}>
          <MenuBurger />
        </div>
      </Grid>
    </Grid>
  );
};

export default AppHeader;
