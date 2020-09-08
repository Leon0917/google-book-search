import React from "react";
import Jumbotron from "../component/Jumbotron";
import { Input, FormBtn } from "../component/Form";
import Axios from "axios";
import Details from "./Details";
import SavedBook from "./SavedBook";

class Books extends React.Component {
  state = {
    searchterm: "",
    booklist: [],
    databasebooks: [],
  };
  componentDidMount = () => {
    console.log("Component books");
    Axios.get("/api/books").then((records) => {
      console.log(records);
      var datasaved = records.data;
      this.setState({ databasebooks: datasaved });
    });
  };
  getsaved = () => {
    Axios.get("/api/books").then((records) => {
      console.log(records);
    });
  };
  getData = (event) => {
    var data = event.target.value;
    this.setState({ searchterm: data });
  };
  getAPI = (event) => {
    event.preventDefault();
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchterm
    ).then((response) => {
      console.log(response);
      var books = response.data.items;
      var bookarray = [];
      for (let i = 0; i < books.length; i++) {
        var onebook = {
          title: books[i].volumeInfo.title,
          author: books[i].volumeInfo.authors[0] || "Not Available",
          description:
            books[i].volumeInfo.description || "Unavailable from api",
        };
        bookarray.push(onebook);
      }
      this.setState({ booklist: bookarray });
    });
  };
  render() {
    return (
      <div>
        <Jumbotron>MERN stack APP - Google Books API search</Jumbotron>
        <form>
          <Input
            onChange={this.getData}
            name="searchterm"
            value={this.state.searchterm}
            placeholder="Search by books name, author"
          />
          <FormBtn onClick={this.getAPI}>Search</FormBtn>
        </form>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {this.state.booklist.map((b, key) => {
                return (
                  <Details
                    title={b.title}
                    author={b.author}
                    description={b.description}
                    key={key}
                  ></Details>
                );
              })}
            </div>
            <div className="col-md-6">
              {this.state.databasebooks.map((b, key) => {
                return (
                  <SavedBook
                    id={b._id}
                    title={b.title}
                    description={b.description}
                    author={b.author}
                    key={key}
                  ></SavedBook>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Books;
