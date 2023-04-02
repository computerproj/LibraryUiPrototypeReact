import "./App.css";
import { useState } from "react";

function PostForm() {
  const [bookName, setBookName] = useState("");
  const [bookAutherName, setBookAutherName] = useState("");
  const [bookPublisherName, setBookPublisherName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    console.log("inside method");
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8085/book/addbookdetails", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*'    
        },
       // mode:'no-cors',
        body: JSON.stringify({
            bookName: bookName,
            bookAutherName: bookAutherName,
            bookPublisherName: bookPublisherName,
            isbn: isbn
        }),
      });
    //  let resJson = await res.json();
      if (res.status === 200) {
        setBookName("");
        setBookAutherName("");
        setBookPublisherName("");
        setIsbn("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App"><br/><br/><br/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          placeholder="enter Book Name"
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          value={bookAutherName}
          placeholder="Enter Auther Name"
          onChange={(e) => setBookAutherName(e.target.value)}
        />
        <input
          type="text"
          value={bookPublisherName}
          placeholder="publisher Name"
          onChange={(e) => setBookPublisherName(e.target.value)}
        />

        <input
          type="number"
          value={isbn}
          placeholder="Enter isbn"
          onChange={(e) => setIsbn(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default PostForm;