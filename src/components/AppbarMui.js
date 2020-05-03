import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import {Link} from '@material-ui/core'

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

function AppbarMui() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" style={{ boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to Hogwarts Online
          </Typography>
          <Tabs>
            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} value={0} label="Courses" containerElement={<Link to="/first"/>} />
            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} value={0} label="Teachers" containerElement={<Link to="/first"/>} />
          </Tabs>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppbarMui;
