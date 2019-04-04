import React, { Component } from "react";

const FriendsList = props => {
  console.log(props);
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        console.log(friend);
        return (
          <div key={friend.id} className="friend-card">
            <p>
              {friend.name}, {friend.age}
            </p>
            <a href={`mailto:${friend.email}`}>{friend.email}</a>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
