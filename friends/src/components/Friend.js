import React from "react";

const Friend = props => {
  return (
    <div key={props.friend.id} className="friend-card">
      <p>
        {props.friend.name}, {props.friend.age}
      </p>
      <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
    </div>
  );
};

export default Friend;
