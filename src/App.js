import React, { Component, Fragment } from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";

import AppbarMui from './components/AppbarMui'
import HeaderMui from './components/HeaderMui'
import Coursecard from './components/Coursecard'

const url = process.env.PUBLIC_URL  + "/img/bg1.jpg";

const data = [
  {id: 1, title: "Potion-Making - Beginner's course", description: "This highly-rated online course will guide you step-by-step through the composition of your first potion and other related aspects of potion-making"},
  {id: 2, title: "Spells - From Zero to Hero", description: "An all-comprising course suitable for the people who just took their wands for the first time. Be ready for the fascinating journey into the witchcraft world featuring the most commonly used spells to make your life much easy!"},
  {id: 3, title: "Magical Beasts - Introductory course", description: "Step into the marvellous world of powerful creatures and avoid being killed!"}
]

function App(){

const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"));
    return (
        <>
      <Hidden only="xs">
        <AppbarMui />
      </Hidden>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={7}
          lg={12}
        >
        <HeaderMui />
        <h2 style={{paddingTop: 20, paddingBottom: 20, marginLeft: 20}}> Most Popular Courses</h2>
        <Grid container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start">
        
        <Coursecard />
        <Coursecard />
        <Coursecard />
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
