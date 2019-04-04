import React, { Component } from "react";
import Friend from "./Friend";

const FriendsList = props => {
  console.log(props);
  return (
    <div className="friends-list">
      <div className="friend-card-container">
        {props.friends.map(friend => {
          console.log(friend);
          return <Friend friend={friend} />;
        })}
      </div>
      <button>Add Friend</button>
    </div>
  );
};

export default FriendsList;
