import React, { Component } from "react";

const FriendsList = props => {
  console.log(props);
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        console.log(friend);
        return <p key={friend.id}>{friend.name}</p>;
      })}
    </div>
  );
};

export default FriendsList;
