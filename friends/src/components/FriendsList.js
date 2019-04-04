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
    if (this.state.name && this.state.age && this.state.email) {
      const newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      };
      this.props.addFriend(newFriend);
      // Reset everything here
      e.target.reset();
      this.setState({
        name: "",
        age: 0,
        email: ""
      });
    } else {
      alert("Please complete form before submission");
    }
  };

  editFriend;

  render() {
    return (
      <div className="friends-list">
        <div className="friend-card-container">
          {this.props.friends.map(friend => {
            console.log(friend);
            return (
              <Friend
                key={friend.id}
                friend={friend}
                handleChanges={this.handleChanges}
                editFriend={this.props.editFriend}
                deleteFriend={this.props.deleteFriend}
              />
            );
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
