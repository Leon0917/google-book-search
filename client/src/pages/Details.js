import React from "react";
import Axios from "axios";

class Details extends React.Component {
  state = {
    title: this.props.title,
    author: this.props.author,
    description: this.props.description,
    saved: false,
  };
  saveBook = () => {
      var book = {
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
      }
      console.log(book)
    Axios.post("/api/books",book ).then((result) => {
      console.log("Book Saved",result);
      this.setState({saved:true})
    });
  };
  render() {
    return (
      <div className="card">
        <div>
          <h5>{this.props.title}</h5>
          <h6>{this.props.author}</h6>
          <p>{this.props.description}</p>
          {this.state.saved ? 
           <h3> Book Saved</h3>
           : 
            <button onClick={this.saveBook}>Save Book</button>
          }
        </div>
      </div>
    );
  }
}

export default Details;
