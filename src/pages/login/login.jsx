import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser, loginUser } from "../../store/session";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "hruday@gmail.com",
        password: "hruday123",
      },
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;

    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { user } = this.state;

    if (user.email === "hruday@gmail.com" && user.password === "hruday123") {
      this.props.loginUser(user);
      this.props.history.push("/dashboard");
    } else alert("Incorrect email/password!");
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <div className="form-container">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                aria-describedby="emailHelp"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleInput}
                placeholder="Type your email"
                required
                type="email"
                value={user.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleInput}
                placeholder="Type your password"
                type="password"
                value={user.password}
              />
            </div>
            <button
              className="btn btn-primary btn-sm"
              disabled={!user.email || !user.password}
              onClick={this.handleLogin}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
