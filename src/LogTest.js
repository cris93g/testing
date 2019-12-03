import React, { Component } from 'react';
import axios from 'axios';
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
		console.log(this.state);
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
					<button onClick={() => this.check()}>submit</button>
				</form>
			</div>
		);
	}
}
export default LogTest;
