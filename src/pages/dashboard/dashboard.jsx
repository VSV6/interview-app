import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser } from "../../store/session";
import { users } from "./users";
import "./dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  componentDidMount = () => {
    if (!this.props.user.isLoggedIn) return this.props.history.push("/");
    setTimeout(() => this.setState({ users, isLoading: false }), 1500);
  };

  renderUsers = (users) => {
    return users.map((user) => (
      <div className="card user-card" key={user.id} style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name.toUpperCase()}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Id: {user.id}</h6>
          <p className="card-text">
            <b>Age:</b> {user.age}
          </p>
          <p className="card-text">
            <b>Gender:</b> {user.gender}
          </p>
          <p className="card-text">
            <b>Email:</b> {user.email}
          </p>
          <p className="card-text">
            <b>Phone:</b> {user.phoneNo}
          </p>
        </div>
      </div>
    ));
  };

  render() {
    const { isLoading, users } = this.state;

    if (isLoading)
      return (
        <div className="container">
          <div className="loader-container">
            <p>Loading...</p>
          </div>
        </div>
      );
    return (
      <div className="container">
        <h1>Users</h1>
        <div className="users-container">{this.renderUsers(users)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Dashboard);
