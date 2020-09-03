import React, { useEffect, useState } from "react";
import Jumbotron from "../component/Jumbotron";
import DeleteBtn from "../component/DeleteBtn";
import Api from "../utils/Api";
import { Col, Row, Container } from "../component/Grid";
import { List, ListItem } from "../component/List";
import { Input, TextArea, FormBtn } from "../component/Form";

function Books() {
  //Setting componenst initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);


  function loadBooks() {
    Api.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row>
        <Col size="med-6">
          <Jumbotron>
            <h1>What Books should I read</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={() => {}}
              name="author"
              placeHolder="Author (Required)"
            />
            <Input
              onChange={() => {}}
              name="author"
              placeHolder="Author (Required)"
            />
            <TextArea
              onChange={() => {}}
              name="synopsis"
              placeHolder="synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={() => {}}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
        <Col size="med-6 sm-12">
            <Jumbotron>
                <h1>Books on my list</h1>
            </Jumbotron>
            {books.length ? (
                <List>
                    {books.map(books => {
                        return(
                            <ListItem key={books._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}
                                        <DeleteBtn onclick={() => {}} />
                                    </strong>
                                </a>
                            </ListItem>
                        )
                    })}
                </List>
            ) : (
                <h3>No results found</h3>
            )
            }
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
