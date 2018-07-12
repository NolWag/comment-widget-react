import React, { Component } from 'react';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <label>Name:</label>
        <input className="nameInput" />
        <label>Comment:</label>
        <textarea className="commentInput" rows="8" cols="60" />
      </div>
    )
  }
}

export default CommentInput
