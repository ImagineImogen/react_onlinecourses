import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from "./theme";
import {Link, BrowserRouter, Route} from 'react-router-dom';

const routing = (
	<BrowserRouter>
		<div>
		<MuiThemeProvider theme={theme}>
		<CssBaseline />
			<Route exact path="/" component={App}></Route>
			<Route path="/courses">Courses</Route>
			<Route path="/teachers">Teachers</Route>
			</MuiThemeProvider>
		</div>
	</BrowserRouter>
)

ReactDOM.render(
  routing, document.getElementById('root')
);

