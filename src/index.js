import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Courses from './Courses';
import Login from './login'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from "./theme";
import { BrowserRouter, Route} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'

const routing = (
	<BrowserRouter>
		<CookiesProvider>
		<MuiThemeProvider theme={theme}>
		<CssBaseline />
			<Route exact path="/" component={App}></Route>
			<Route exact path="/courses" component={Courses}></Route>
			<Route path="/teachers">Teachers</Route>
			<Route exact path="/login" component={Login}></Route>
			</MuiThemeProvider>
		</CookiesProvider>
	</BrowserRouter>
)

ReactDOM.render(
  routing, document.getElementById('root')
);

