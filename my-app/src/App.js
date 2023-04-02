// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Test from './Test';
import Testdemo from './Testdemo'
import RadioButtonGroup from './RadioButtonGroup';
import PostForm from './PostForm';
import Search from './Search';
import TestComponent from './TestComponent';
import PostCatagoryForm from './PostCatagoryForm';
import DemoTest from './DemoTest';
// for bootstrap classes
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path='test' element={ <Test/> } />
        <Route path='testdemo' element={ <Testdemo/> } />
        <Route path='radiobuttongroup' element={ <RadioButtonGroup/> } />
        <Route path='postform' element={ <PostForm /> } />
        <Route path='search' element={ <Search /> } />
        <Route path='testcomponent' element={ <TestComponent /> } />
        <Route path='postcategory' element={ <PostCatagoryForm /> } />
        <Route path='demolink' element={ <DemoTest /> } />
      </Routes>
    </div>
  )
}

export default App;
