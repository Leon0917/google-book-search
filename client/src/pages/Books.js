import React, { useEffect, useState } from "react";
import Jumbotron from "../component/Jumbotron";
import DeleteBtn from "../component/DeleteBtn";
import Api from "../utils/Api";
import { Col, Row, Container } from "../component/Grid";
import { List, ListItem } from "../component/List";
import { Input, FormBtn } from "../component/Form";
import Nav from "../component/Nav";


class Books extends React.Component{
  state ={
    searchterm :""
  }
  getData =(event) => {
      var data = event.target.value
      this.setState({searchterm : data})
      console.log(this.state.searchterm)
  }
  render(){
    return(<div>
       <Nav></Nav>
      <Jumbotron>MERN stack APP - Google Books API search</Jumbotron>
     
             <Input
              onChange={this.getData}
              name="searchterm"
              value={this.state.searchterm}
               placeHolder="Name of authorSearch by books name, author"/>


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
//             <FormBtn
//               // disabled={!(formObject.author && formObject.title)}
//               onClick={() => {}}
//             >
//               Search
//             </FormBtn>
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
