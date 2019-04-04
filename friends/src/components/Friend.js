import React from "react";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email
    };
  }

  handleChanges = e => {
    e.persist();
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  toggleForm = () => {
    this.setState(prevState => ({
      form: !prevState.form
    }));
  };

  editFriend = e => {
    e.preventDefault();
    const editedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.editFriend(this.props.friend.id, editedFriend);
    e.target.reset();
    this.toggleForm();
  };

  deleteFriend = e => {
    e.preventDefault();
    const deleteConfirmation = window.confirm(
      "Are you sure? This cannot be undone without resetting the server, and I don't feel like doing that"
    );
    if (deleteConfirmation) {
      this.props.deleteFriend(this.props.friend.id);
    }
  };

  render() {
    return (
      <div key={this.props.friend.id} className="friend-card">
        <p>
          {this.props.friend.name}, {this.props.friend.age}
        </p>
        <a href={`mailto:${this.props.friend.email}`}>
          {this.props.friend.email}
        </a>
        <div className="friend-buttons">
          <button onClick={this.toggleForm} className="edit-button">
            Edit friend
          </button>
          <button onClick={this.deleteFriend} className="delete-button">
            Delete friend
          </button>
          <form
            onSubmit={this.editFriend}
            className={
              this.state.form ? "edit-friend-form" : "edit-friend-form hidden"
            }
          >
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Friend;
