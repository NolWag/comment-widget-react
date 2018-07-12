import React, { Component } from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.comment}</p>
        <button>Edit</button>
      </div>
    )
  }
}

export default Comment
