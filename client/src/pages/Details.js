import React from "react";
import Axios from "axios";

class Details extends React.Component{
    state = {
        title : this.props.title,
        author : this.props.author,
        description : this.props.description,
        saved : false
    }
    saveBook =() =>{
        Axios.post("/api/books",
        {
            title:this.state.title,
            author:this.state.author,
            description:this.state.description
        }).then((result) => {
            console.log("Book Saved")
        })
    }
    render(){
        return(<div class="card">
         
              <div>
             <h5>{this.props.title}</h5>
             <h6>{this.props.author}</h6>
             <p>{this.props.description}</p>
             {this.saved ? "Book Saved" :
             <button onClick={this.saveBook}>Save Book</button>}
             </div>
        </div>)
    }
}
// import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../component/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// function Detail(props) {
//   const [book, setBook] = useState({})

//   // When this component mounts, grab the book with the _id of props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   const {id} = useParams()
//   useEffect(() => {
//     API.getBook(id)
//       .then(res => setBook(res.data))
//       .catch(err => console.log(err));
//   }, [])

//   return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {book.title} by {book.author}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Synopsis</h1>
//               <p>
//                 {book.synopsis}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Authors</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


export default Details;
