import React, { Component, Fragment	} from 'react';
import AppbarMui from './components/AppbarMui';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
//do I need to import {withCookie} here, do we need it here?

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

class AboutUs extends Component {
 	constructor(props) {
  		super(props);
    	this.state  = {
		    formInfo: {
				email: '',
				question : ''
			}	
		};
		this.handleChange = this.handleChange.bind(this);
		//this.handleSubmit
    }	

    handleChange(event) {
        let formVal = {
        	...this.state.formInfo,
        	[event.target.name]: event.target.value
        };

        this.setState({formInfo: formVal});

  	};

    handleSubmit(event) {
    	event.preventDefault();
		fetch(`${process.env.REACT_APP_API_URL}/api/aboutus`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.formInfo)
            }
		).then( resp => console.log(resp))
		.then( res => {})
		.catch( error => console.log(error));
    }

  render() {
    return (
    	<Fragment >
    	<AppbarMui />
      <form>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
        Your question
        <textarea value={this.state.value} name="question" onChange={this.handleChange} />
        </label>

        <Button type="submit"
        		variant="contained"
		        color="inherit"
		        onSubmit = {this.handleSubmit}
		        >
         	Submit Your Question
        </Button>
      </form>
      </Fragment>
    );
  }
}
export default AboutUs;