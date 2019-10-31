import React, { Component } from "react";
import axios from "axios";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      age: 0
    };
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.firstHandler = this.firstHandler.bind(this);
    this.lastHandler = this.lastHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }
  usernameHandler(e) {
    this.setState({ username: e.target.value });
  }
  passwordHandler(e) {
    this.setState({ password: e.target.value });
  }
  emailHandler(e) {
    this.setState({ email: e.target.value });
  }
  firstHandler(e) {
    this.setState({ first_name: e.target.value });
  }
  lastHandler(e) {
    this.setState({ last_name: e.target.value });
  }
  ageHandler(e) {
    this.setState({ age: e.target.value });
  }
  addNewUser() {
    axios.post("/api/newuser", {
      user_name: this.state.username,
      pass_word: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age
    });
  }
  render() {
    return (
      <div>
        <form>
          Username:
          <input type="text" onChange={e => this.usernameHandler(e)} />
          <br />
          Password:
          <input type="text" onChange={e => this.passwordHandler(e)} />
          <br />
          email:
          <input type="text" onChange={e => this.emailHandler(e)} />
          <br />
          first name:
          <input type="text" onChange={e => this.firstHandler(e)} />
          <br />
          last name:
          <input type="text" onChange={e => this.lastHandler(e)} />
          <br />
          age:
          <input type="text" onChange={e => this.ageHandler(e)} />
          <br />
          <button onClick={() => this.addNewUser()}>submit</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
