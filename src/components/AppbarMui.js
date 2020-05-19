import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
tabRoot: {
    "&:hover": {
      color: "purple",
      opacity: 2,
    },
    "&$tabSelected": {
      color: "violett",
    },
    "&:focus": {
      color: "red",
      outline: 'none'
    }
  },

}));

function AppbarMui(props)  {
  const classes = useStyles();

  changeTitle = () => {
  switch(window.location.pathname){
    case '/courses':
      return 'Home';
    default:
      return 'Courses';
  };

  changeLinkTo = () => {
  switch(window.location.pathname){
    case '/courses':
      return '/';
    default:
      return '/courses';
  }


}

  return (
    let title = changeTitle();
    let linkTo = changeLinkTo();

    <div className={classes.root}>
      <AppBar position="static" color="transparent" style={{ boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to Hogwarts Online
          </Typography>
          <Tabs>
            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} value={0} label={title} to={linkTo} component={Link} />
            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} value={0} label="Teachers" to='/teachers' component={Link} />
          </Tabs>
          <Button color="inherit" to='/login' component={Link}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppbarMui;
