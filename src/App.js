import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import Navbar from './MyComponents/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NotFound from './MyComponents/NotFound';
import Adduser from './MyComponents/Adduser';
import Edituser from './MyComponents/Edituser';
import User from './MyComponents/User';
const App = () => {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/user/add" element={<Adduser/>}/>
      <Route exact path="/user/edit/:id" element={<Edituser/>}/>
      <Route exact path="/user/:id" element={<User/>}/>
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
    
      </div>
    
    </Router>
  )
}

export default App