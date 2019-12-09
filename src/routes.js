import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogTest from "./Components/LogTest"
import Home from "./Screens/Home/Home"
import LogIn from "./Components/LogIn"

export default (
	<Switch>
		<Route component={Home} exact path="/" />
        <Route component={LogTest}  path="/home" />
        <Route component={LogIn}  path="/register" />
	</Switch>
);