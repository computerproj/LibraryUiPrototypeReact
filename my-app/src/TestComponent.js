import React from "react";
import { useEffect,useState } from "react";
import Table from "react-bootstrap/Table";

function TestComponent(){
    const [categoryList, setCategory] = useState([]);
    const [bookList, setBookList] = useState([]);
   useEffect(() => {
      fetch('http://localhost:8080/category/categoryList')
         .then((response) => response.json())
         .then((data) => {
            console.log("Hello"+data);
            setCategory(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   // `http://localhost:8080/category/bookList?catId=${}`
   const handleChange = (event) => {
    console.log("hello>> ", event.target.value)

   //  useEffect(() => {
      fetch(`http://localhost:8080/category/bookList?catId=${event.target.value}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setBookList(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   // }, []);
  
  }
return(
    <div>
    <h1>Hello..</h1>
    <select name="cat" onChange={(event) => handleChange(event) }>
    <option key="1" value="0">Select</option>
    {categoryList.map((category) => {
         return (
          
            <option key={category.id} value={category.id}>{category.categoryName}</option>
         );
      })}
    </select>
   <Table striped bordered hover>
   <thead>
        <tr>
          <th>BookName</th>
          <th>BookAutherName</th>
          <th>BookpublisherName</th>
          <th>ISBN</th>
          <th>id</th>
          <th>CateegoryId</th>
        </tr>
   </thead>
   {bookList.map((book) => {
      return(
      <tbody>
        <tr>
          <td>{book.bookName}</td>
          <td>{book.bookAutherName}</td>
          <td>{book.publisherName}</td>
          <td>{book.isbn}</td>
          <td>{book.id}</td>
          <td>{book.catId}</td>
        </tr>
      </tbody>
      );
      })}
   </Table>
   </div>
);

}

export default TestComponent;