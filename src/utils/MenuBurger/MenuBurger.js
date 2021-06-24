import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import vector3 from '../../img/vector3.png';
import { MAIN_ROUTE, COFFEE_ROUTE, GOODS_ROUTE } from '../consts';

const useStyles = makeStyles({
  button: {
    color: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 62,
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Merienda',
    fontSize: 24,
    color: '#000000',
    paddingRight: 40,
    height: 13,
    padding: '25px 0',
  },
  img: {},
});

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const MenuBurger = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <MenuIcon
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
        className={classes.button}
      >
        Open Menu
      </MenuIcon>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <img src={vector3} alt={'vector3'} className={classes.img} />
          </ListItemIcon>
          <Link href={MAIN_ROUTE} underline='none' className={classes.link}>
            Coffee house
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <img src={vector3} alt={'vector3'} className={classes.img} />
          </ListItemIcon>
          <Link href={COFFEE_ROUTE} underline='none' className={classes.link}>
            Our coffee
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <img src={vector3} alt={'vector3'} className={classes.img} />
          </ListItemIcon>
          <Link href={GOODS_ROUTE} underline='none' className={classes.link}>
            For your pleasure
          </Link>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default MenuBurger;
