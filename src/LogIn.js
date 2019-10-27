import React, { Component } from 'react';
import axios from 'axios';
class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
		this.addNewUser = this.addNewUser.bind(this);
	}
	usernameHandler(e) {
		this.setState({ username: e.target.value });
	}
	passwordHandler(e) {
		this.setState({ password: e.target.value });
	}
	addNewUser() {
		axios.post('/api/newuser', {
			user_name: this.state.username,
			pass_word: this.state.password
		});
	}
	render() {
		console.log(this.state);
		return (
			<div>
				<form>
					Username:<input type="text" onChange={(e) => this.usernameHandler(e)} />
					<br />
					Password:<input type="text" onChange={(e) => this.passwordHandler(e)} />
					<br />
					<button onClick={() => this.addNewUser()}>submit</button>
				</form>
			</div>
		);
	}
}

export default LogIn;
