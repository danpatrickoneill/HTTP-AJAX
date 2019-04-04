import React from "react";

const Friend = props => {
  const deleteFriend = e => {
    e.preventDefault();
    const deleteConfirmation = window.confirm(
      "Are you sure? This cannot be undone without resetting the server, and I don't feel like doing that"
    );
    if (deleteConfirmation) {
      props.deleteFriend(props.friend);
    }
  };

  return (
    <div key={props.friend.id} className="friend-card">
      <p>
        {props.friend.name}, {props.friend.age}
      </p>
      <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
      <div className="friend-buttons">
        <button className="edit-button">Edit friend</button>
        <button className="delete-button" onClick={deleteFriend}>
          Delete friend
        </button>
      </div>
    </div>
  );
};

export default Friend;
