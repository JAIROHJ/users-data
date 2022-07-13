import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
    <Link className="navbar-brand" to="/">Data-Management</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/"> Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about"> About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"> Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
    <Link className='btn btn-outline-light w-20'to="/user/add">Add User</Link>
  </div>
  </nav>
  </div>
  );
};

export default Navbar