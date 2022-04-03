import React from 'react'
import pencil from '../Images/pencil.jpg';
import books from '../Images/books.jpg';
import thesis from '../Images/thesis.jpg';
import xerox from '../Images/xerox.jpg';
import bag from '../Images/bag.jpg';
import scale from '../Images/scale.jpg';



function Card(props) {
  return (
    <>
    
    <div className="card col-lg-4" >
  <img src={props.img} className="card-img-top" height ={200} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.heading}</h5>
    <p className="card-text">{props.paragraph}</p>
    
  </div>
</div>

</>

      
    
  
  )
}

export default Card