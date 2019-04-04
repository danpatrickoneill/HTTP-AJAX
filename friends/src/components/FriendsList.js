import React, { Component } from "react";
import Friend from "./Friend";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      email: ""
    };
  }

  handleChanges = e => {
    e.persist();
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  addFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriend(newFriend);
  };

  render() {
    return (
      <div className="friends-list">
        <div className="friend-card-container">
          {this.props.friends.map(friend => {
            console.log(friend);
            return <Friend key={friend.id} friend={friend} />;
          })}
        </div>
        <form onSubmit={this.addFriend} className="add-friend-form">
          <input
            onChange={this.handleChanges}
            type="text"
            name="name"
            placeholder="First name"
          />
          <input
            onChange={this.handleChanges}
            type="text"
            name="age"
            placeholder="Age"
          />
          <input
            onChange={this.handleChanges}
            type="text"
            name="email"
            placeholder="Email address"
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
