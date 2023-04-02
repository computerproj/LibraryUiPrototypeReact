import React from "react";
// import { ReactDOM } from "react";
import Table from "react-bootstrap/Table";
import Pagination from 'react-bootstrap/Pagination';

class DemoTest extends React.Component {
    constructor() {
     
      super();
      this.test();
      this.state = {
        // todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        todos:[
            {
                "bookName": "java Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            },
                {
                "bookName": "software Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            },
                {
                "bookName": "operatingsystem Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            },    {
                "bookName": "python Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            },    {
                "bookName": "math Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            }, 
            {
                "bookName": "datastracture Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            },
            {
                "bookName": "Demo Book",
                "bookAutherName": "Shild",
                "publisherName": "Springle",
                "isbn": 356568897546,
                "id": 1,
                "catId": 402
            }
        ],
        currentPage: 1,
        todosPerPage: 3
      };
      this.handleClick = this.handleClick.bind(this);
    }
    test()
    {
        console.log("Inside test()")
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { todos, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((todo, index) => {
        // return <li key={index}>{todo}</li>;
        return <Table striped bordered hover>
        <tbody key={index}>
          <tr>
            <td>{todo.bookName}</td>
            <td>{todo.bookAutherName}</td>
            <td>{todo.publisherName}</td>
            <td>{todo.isbn}</td>
            <td>{todo.id}</td>
            <td>{todo.catId}</td>
          </tr>
        </tbody>
      </Table>
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <Pagination>
          <Pagination.Item 
          key={number} 
          id={number} 
          onClick={this.handleClick}>
           {number}
          </Pagination.Item>
          </Pagination>
        );
      });
  
      return (
        <div>
          <div>
            {renderTodos}
          </div>
          <div id="page-numbers" style={{display:"flex"}}>
            {renderPageNumbers}
          </div>
        </div>
      );
    }
  }
  
  
//   ReactDOM.render(
//     <DemoTest />,
//     document.getElementById('app')
//   );

  export default DemoTest;

  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }
  
  // const paginationBasic = (
  //   <div>
  //     <Pagination>{items}</Pagination>
  //     <br />
  
  //     <Pagination size="lg">{items}</Pagination>
  //     <br />
  
  //     <Pagination size="sm">{items}</Pagination>
  //   </div>
  // );
  
  // render(paginationBasic);


