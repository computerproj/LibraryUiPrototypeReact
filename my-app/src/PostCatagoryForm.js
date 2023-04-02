import "./App.css";
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function PostCatagoryForm(){
    const [categoryName, setCaegoryName] = useState("");
    const [message, setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      console.log("inside method");
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:8080/category/addcategory", {
          method: "POST",
          headers: {
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin':'*'    
          },
         // mode:'no-cors',
          body: JSON.stringify({
            categoryName: categoryName
          }),
        });
      //  let resJson = await res.json();
        if (res.status === 200) {
        setCaegoryName("");
        setMessage("category added successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Catagory Name Here</Form.Label>
        <Form.Control type="text" placeholder="Category Name" value={categoryName} onChange={(e) => setCaegoryName(e.target.value)} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Form>
    );
}

export default PostCatagoryForm;