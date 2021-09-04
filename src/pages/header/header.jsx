import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser, logoutUser } from "../../store/session";
import "./header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="header-container">
        {this.props.user.isLoggedIn && (
          <button className="btn btn-danger btn-sm" onClick={this.handleLogout}>
            Logout
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
