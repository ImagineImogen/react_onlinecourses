import React, { Component} from 'react';
import { Row } from 'react-bootstrap';
import { Col, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components';
import Link from './Link'


const List  = styled.ul `
	display: flex;
	padding: 13px;
	
	height: 49px;
	justify-content: space-around;
	box-sizing: border-box;
	`


class Navigbar extends React.Component {
	render(){
		return(
		<Row>
		<Col lg={12}>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  			<Navbar.Brand href="#home">Welcome to Hogwarts online</Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav">
    		<Nav className="ml-auto">
    		<List>
	      		<Link link="#courses" text="Courses"/>
	      		<Link link="#teachers" text="Teachers"/>
	      		<Link link="#signin" text="Sign In"/>
	      		<Link link="#register" text="Register"/>
	      	</List>
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-success">Search</Button>
		    </Form>
		  </Navbar.Collapse>
		</Navbar>
  		</Col>
  		</Row>
  		);
	}
}

export default Navigbar;