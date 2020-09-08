import React from "react";
import Axios from "axios";

class SavedBook extends React.Component {
  state = {
    title: this.props.title,
    author: this.props.author,
    description: this.props.description,
    id: this.props.id,
    deleted: false,
  };
  delBook = () => {
    Axios.delete("/api/books/" + this.state.id).then((result) => {
      console.log("Book deleted");
      this.setState({ delete: false });
    });
  };
  render() {
    return (
      <div className="card">
        <div
          style={{
            marginLeft: "15px",
            padding: "10px"
          }}
        >
          <h5>{this.props.title}</h5>
          <h6>{this.props.author}</h6>
          <p>{this.props.description}</p>
          {this.deleted ? (
            "Book Deleted"
          ) : (
            <button onClick={this.delBook}>Delete Book</button>
          )}
        </div>
      </div>
    );
  }
}

export default SavedBook;
