import React, {Component} from 'react';
import Coursecard from './components/Coursecard';
import { Grid, useMediaQuery, Hidden, Box, Button } from "@material-ui/core";

import AppbarMui from './components/AppbarMui'
import HeaderMui from './components/HeaderMui'
import Footer from './components/Footer'
import theme from './theme.js'
import {Link } from 'react-router-dom';

class Courses extends Component {
    render() {
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
        <h2 style={{paddingTop: 20, paddingBottom: 20, marginLeft: 80}}> Most Popular Courses</h2>
        <Box p={(2, 4)}>
            <Grid container justify="flex-start" spacing={2} direction="row" alignItems="flex-start">
                {this.state.contacts.map((card) => (
                    <Grid key={card.id} item xs={4}>
                        <Coursecard
                            title={card.title}
                            image={card.image}
                            description={card.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
        <Button  variant="contained" color="primary" to='/courses' component={Link} style={{ marginTop: "auto",  marginBottom: "auto", marginLeft: theme.spacing(9)}}> All Courses >></Button>
        <Footer />
        </Grid>
      </Grid>
    </>
  );
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://lisa-492fcdeb.localhost.run/api/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default Courses;