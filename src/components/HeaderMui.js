import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const url = process.env.PUBLIC_URL  + "/img/castle.jpg";
const useStyles = makeStyles((theme => ({

header: {
	height: "57vh",
  background: `url(${url})`,
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
  alignItems: "center",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  flexGrow: 1,
  position: "relative",
  

},

headerText: {
  fontSize: 17,
  display: 'inline-block',
  alignItems: "center",
  position: "absolute",
  marginTop: 0,
  marginBottom: "auto",
  paddingRight: theme.spacing(10),
  marginLeft: 0,
  marginRight: 20,
  zIndex: 999,
  top: "60%",
  width: "100%",



  

},
textWrapper: {
  
    display: "block",
    paddingRight: 15,
    paddingLeft: theme.spacing(10),
    paddingBottom: 20,
    alignItems: "center",
    width: "fit-content",
    position: "absolute",
    zIndex: 999,
    top: "50%",
    width: "100%",



    

},



}

	)));

function HeaderMui() {
  const classes = useStyles();

  return (
    <Box className={classes.header} flexWrap="wrap">
    <Box className={classes.textWrapper} width="100%" flexWrap="wrap">
    <h2 >Hogwarts Online</h2>
    <Box component="span" className={classes.headerText} flexWrap="wrap" whiteSpace="wrap">Hogwarts Online is the first platform out there for the wizards far away from Hogwarts. Experience the power of British magical education while still working muggle job. All you need is a magic wand and to be a proved wizard!</Box>
      </Box>
    </Box>
  );
}
export default HeaderMui;