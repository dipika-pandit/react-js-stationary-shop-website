import React from 'react'
import { Link } from 'react-router-dom';
import pen from '../Images/pen.jpg';
import Common from '../Common';



function Home() {
  return (
    <>
    <Common
     name="Welcome to  sai stationary"
     pen={pen}
     visit="/services"
     btname="Get started"
    
    />

    </>
    
    
    
        
       
  )
}

export default Home
{/* <div classNameName="container-fluid nav bg">
      <div classNameName='row'>
        <div classNameName='col-10 mx-auto'>

      <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    <a classNameName="navbar-brand" href="#">Navbar</a>
    <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
  
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav ml-auto">
        <li classNameName="nav-item active">
            
           <a classNameName="nav-link" href="#"><Link to="/">Home</Link>
</a> 
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#"><Link to="/about">About</Link>
</a>
        </li>
        
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
            <a classNameName="dropdown-item" href="#"><Link to="/services">Action</Link></a>
            <a classNameName="dropdown-item" href="#"><Link to="/services">Another Action</Link></a>
            <div classNameName="dropdown-divider"></div>
            <a classNameName="dropdown-item" href="#"><Link to="/services">XEROX</Link></a>
          </div>
        </li>
        <li classNameName="nav-item">

          <a classNameName="nav-link disabled" href="#"><Link to="/contact">Contact</Link>
</a>
        </li>
      </ul>
      <form classNameName="form-inline my-2 my-lg-0">
        <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  </div>
  <div classNameName="container-fluid nav bg">
      <div classNameName='row'>
        <div classNameName='col-10 mx-auto'>

</div>
  </div>
    </>
  */}
  // <div classNameName="container-fluid nav bg">
  //     <div classNameName='row'>
  //       <div classNameName='col-10 mx-auto'>
  //       </div>
  // </div>
  //       </div>
