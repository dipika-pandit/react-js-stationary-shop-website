import React from 'react'
import { Link } from 'react-router-dom';
import pen from '../src/Images/pen.jpg'


function Common(props) {
  return (
    <section id='header'className='d-flex align-items-center bg-dark'>
      <div className="container nav bg">
       <div className='row'>
        <div className='col-10 '>
          <div className='row'>
            <div className='col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column p-4 '>
              <h2 className='text-light'>{props.name}</h2>
              <h4 className='my-2 text-light'>
                Our shop is best tationary shop all product are avaiable. 
              </h4>
              <a href={props.visit} className=' btn btn-outline-primary m-2 '><Link to={props.visit}></Link>{props.btname}</a>

            </div>
            <div className='col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column p-4'>
              <img src={props.pen} width="300" alt="pen"/>

            </div>





          </div>
         </div >
  </div>
      </div>

      

      



    </section>
    
    
    
       
  )
}

export default Common