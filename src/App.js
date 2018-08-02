import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [{
        id: 1,
        name: 'Nolan',
        comment: 'This is intial state comment!'
      },
      {
        id: 2,
        name: 'Bill',
        comment: 'I"m crazy bill!'
      }
    ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.comment.value);
    const Add = this.state.comments.concat({id: this.state.comments.length + 1, name: e.target.name.value, comment: e.target.comment.value})
    this.setState({ comments : Add })
    document.getElementById('form').reset();
  }

  deleteComment(id) {
    this.setState({
      comments: this.state.items.filter(item => item.id !== id)
    })
  }

  render() {
    return (
      <div className="App container">
        {
          this.state.comments.map((comment, i) => {
            console.log(comment)
            return(
              <div className="card">
              <Comment key={i} name={comment.name} comment={comment.comment} deleteComment={this.deleteComment}/>
            </div>
            )
          })
        }
        <div>
          <form id="form" onSubmit={this.handleSubmit} >
          <textarea className="commentInput" placeholder="Type here..." name="comment"/>
          <label>Name:</label>
          <input className="nameInput" name="name"/>
          <button className="btn-primary" type="submit">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
