import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [{
        name: 'Nolan',
        comment: 'This is intial state comment!'
      },
      {
        name: 'Bill',
        comment: 'I"m crazy bill!'
      }
    ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.comment.value);
    const Add = this.state.comments.concat({name: e.target.name.value, comment: e.target.comment.value})
    this.setState({ comments : Add })
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div className="App container">
        {
          this.state.comments.map((comment, i) => {
            console.log(comment)
            return(
              <div className="card">
              <Comment key={i} name={comment.name} comment={comment.comment} />
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
