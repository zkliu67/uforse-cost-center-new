import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import { object, array } from 'prop-types';

const useStyles = makeStyles((theme) => ({ 
  tabLabel: {
    fontStyle: 'bold'
  }
}));

const StyledHeader = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    fontStyle: 'bold',
    fontSize: '2rem'
  }
}))(Tabs);

const StyledTab = withStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  textColorInherit: {
    color: theme.palette.common.white,
  },
  wrapper:{
    fontStyle: 'bold'
  }
}))(Tab)

const activeStyle = { color: 'blue' };

const Header = ({routers}) => {
  const classes = useStyles();

  return (
    <StyledHeader>
      {routers.map((router, idx) => {
        return <StyledTab 
        key={idx} 
        label={<span className={classes.tabLabel}>{router.label}</span>}   
        component={NavLink} 
        to={router.link}
        value={idx} />
      })}
    </StyledHeader>
  )
}

Header.propTypes = {
  routers: array
}

export default Header;