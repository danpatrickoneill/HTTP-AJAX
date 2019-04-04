import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        });
        console.log(res.data);
        console.log(this.state.friends[0].name);
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  editFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Friendster 2.0</h1>
        <FriendsList
          friends={this.state.friends}
          addFriend={this.addFriend}
          editFriend={this.editFriend}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

export default App;
