import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';

const useStyles = makeStyles({
  header: {
    height: 70,
    display: 'flex',
    flexDirection: 'horizontal',
    alignItems: 'center',
  }
})

const HeaderLink = withStyles((theme) => {

})(NavLink);

const activeStyle = { color: 'blue' };

const Header = ({routers}) => {
  const classes = useStyles();

  return (
    <Tabs>
      {routers.map((router, idx) => {
        return <Tab key={idx} label={router.label} value={router.link} component={NavLink} to={router.link} />
      })}
    </Tabs>
  )
}

Header.propTypes = {
  routers: object
}

export default Header;