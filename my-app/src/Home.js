import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link> <br/>
      <Link to="contact">Click to view our contact page</Link><br/>
      <Link to="test">Click to view teat page</Link><br/>
      <Link to="testdemo">Click to view the textdemo</Link><br/>
      <Link to="radiobuttongroup">Click to view the radiobuttongroup</Link><br/>
      <Link to="postform">Click to view the form</Link><br/>
      <Link to="search">Click to view the search bar</Link><br/>
      <Link to="testcomponent">Click to view the TestComponent</Link><br/>
      <Link to="postcategory">Click to view the CategoryForm</Link><br/>
      <Link to="demolink">Click to view the Pegination</Link>
    </div>
  );
}

export default Home;