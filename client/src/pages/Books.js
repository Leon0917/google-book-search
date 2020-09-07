import React, { useEffect, useState } from "react";
import Jumbotron from "../component/Jumbotron";
import DeleteBtn from "../component/DeleteBtn";
import Api from "../utils/Api";
import { Col, Row, Container } from "../component/Grid";
import { List, ListItem } from "../component/List";
import { Input, FormBtn } from "../component/Form";
import Nav from "../component/Nav";
import axios from "axios";
import Details from "./Details";

class Books extends React.Component{
  state ={
    searchterm :"",
    booklist:[]
  }
  getData =(event) => {
      var data = event.target.value
      this.setState({searchterm : data})
      // console.log(this.state.searchterm)
  }
  getAPI =(event)=>{
    event.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchterm)
    .then((response) => {
      console.log(response)
      var books = response.data.items
      var bookarray = []
      for(let i=0;i<books.length;i++){
        var onebook = {
          title: books[i].volumeInfo.title,
          author: books[i].volumeInfo.authors[0]|| "Not Available",
          description: books[i].volumeInfo.description || "Unavailable from api"
        }
        bookarray.push(onebook)
      }
      this.setState({booklist:bookarray})
    })
  }
  render(){
    return(<div>
       <Nav></Nav>
      <Jumbotron>MERN stack APP - Google Books API search</Jumbotron>
         <form>
             <Input
              onChange={this.getData}
              name="searchterm"
              value={this.state.searchterm}
               placeholder="Name of authorSearch by books name, author"/>
                <FormBtn
              onClick={this.getAPI} >
              Search
            </FormBtn>
            </form>
            {this.state.booklist.map((b,key) => {
              return(<Details
              title = {b.title}
              author ={b.author}
              description = {b.description}
              key = {key}
              ></Details>)
            })}

    </div>)
  }
}

// function Books() {
//   //Setting componenst initial state
//   const [books, setBooks] = useState([]);
//   // const [formObject, setFormObject] = useState({});

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks();
//   }, []);

//   function loadBooks() {
//     Api.getBooks()
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.log(err));
//   }

//   return (
//     <Container>
//       <Nav />
//       <Row>
//         <Col size="med-12 sm-12">
//           <Jumbotron>
//             <h1>What Books should I search for</h1>
//           </Jumbotron>
//          
//             <Input onChange={() => {}} name="title" placeHolder="Book title" />
//            
//           </form>
//         </Col>
//         <Col size="med-12 sm-12">
//           <Jumbotron>
//             <h1>Books previously searched for</h1>
//           </Jumbotron>
//           {books.length ? (
//             <List>
//               {books.map((book) => {
//                 return (
//                   <ListItem key={books._id}>
//                     <a href={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                         <DeleteBtn onclick={() => {}} />
//                       </strong>
//                     </a>
//                   </ListItem>
//                 );
//               })}
//             </List>
//           ) : (
//             <h3>No results found</h3>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

export default Books;
