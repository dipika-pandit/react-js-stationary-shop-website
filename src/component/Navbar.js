import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    
        

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Sai Stationary</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to="/">Home</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/about">About</Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"><Link to="/services">Books</Link></a>
          <a className="dropdown-item" href="#"><Link to="/services">xerox</Link></a>
          
          <a className="dropdown-item" href="#"><Link to="/services">Thesis</Link></a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#"><Link to="/contact">Contact</Link></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


  
    </>
    
  )
}

export default Navbar
