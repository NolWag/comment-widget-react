import React, { Component } from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 className="text-left commentName">{this.props.name}</h3>
        <p>{this.props.comment}</p>
        <button className="float-right btn-primary">Edit</button>
        <button className="float-right btn-danger">Delete</button>
      </div>
    )
  }
}

export default Comment
