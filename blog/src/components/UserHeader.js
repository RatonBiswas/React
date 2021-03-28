import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const {user} = this.props
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state,ownState) => {
  return { user: state.users.find(user => user.id === ownState.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
