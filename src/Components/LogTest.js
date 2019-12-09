import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
class LogTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
		this.check = this.check.bind(this);
	}
	usernameHandler(e) {
		this.setState({ username: e.target.value });
	}
	passwordHandler(e) {
		this.setState({ password: e.target.value });
	}

	check() {
		axios.post('/api/check', {
			user_name: this.state.username,
			new_pass_word: this.state.password
		});
	}
	render() {
		return (
			<div>
				<h1> Log In</h1>
				<form>
					Username:
					<input type="text" onChange={(e) => this.usernameHandler(e)} />
					<br />
					Password:
					<input type="text" onChange={(e) => this.passwordHandler(e)} />
					<br />
				<Link to={`/home`}>	<button onClick={() => this.check()}>submit</button></Link>
				</form>
				<Link to={`/register`}><h1>Register</h1></Link>
			</div>
		);
	}
}
export default LogTest;
