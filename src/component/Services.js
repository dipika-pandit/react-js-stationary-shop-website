import React from 'react'
import pencil from '../Images/pencil.jpg';
import books from '../Images/books.jpg';
import thesis from '../Images/thesis.jpg';
import xerox from '../Images/xerox.jpg';
import bag from '../Images/bag.jpg';
import scale from '../Images/scale.jpg';
import Card from './Card'


function Services() {
  return (
    <div>
      <h1 className='text-center'>Our Services</h1>
      <div className='d-flex flex-wrap '>
      
      <Card
      
      img ={bag}
      heading="School bag"
      paragraph="All types of school bag college bag are avaiable.cute school bag for girls." />
      <Card
      
      img ={pencil}
      heading="Pen and Pencil"
      paragraph="All types of pen and colorfull pencil are avaiable for drawing." />
      <Card
      
      img ={books}
      heading="Books"
      paragraph="All company books are avaiable in our shop." />
      <Card
      
      img ={thesis}
      heading="Easy Thesis"
      paragraph="Make your thesis urgently at sai stationary. binding is avaiable all types of thesis printing avaiable." />
      <Card
      
      img ={xerox}
      heading="Xerox"
      paragraph="xerox and lamination is easily avaiable." />
      <Card
      
      img ={scale}
      heading="Scale"
      paragraph="All scale for engineering purpose are avaiable." />

      {/* <h1 className='text-center'>Our Services</h1>
      <div className='d-flex flex-wrap '>
      <div class="card col-lg-4 " >
  <img src={bag} class="card-img-top"height ={200} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">School bag</h5>
    <p class="card-text">All types of school bag college bag are avaiable.cute school bag for girls. 

    </p>
    
  </div>
</div>
<div class="card col-lg-4" >
  <img src={pencil} class="card-img-top"height ={200} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">pen and pencil</h5>
    <p class="card-text">All types of pen and colorfull pencil are avaiable for drawing.
</p>
    
  </div>
</div>
<div class="card col-lg-4" >
  <img src={books} class="card-img-top" height ={200}alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Books</h5>
    <p class="card-text">All company books are avaiable in our shop.
</p>
    
  </div>
</div>
<div class="card col-lg-4" >
  <img src={thesis} class="card-img-top"height ={200} alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Easy Thesis</h5>
    <p class="card-text">Make your thesis urgently at sai stationary. binding is avaiable all types of thesis printing avaiable.</p>
    
  </div>
</div>
<div class="card col-lg-4" >
  <img src={xerox} class="card-img-top" height ={200} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">xerox</h5>
    <p class="card-text">xerox and lamination is easily avaiable.</p>
    
  </div>
</div>
<div class="card col-lg-4" >
  <img src={scale} class="card-img-top" height ={200} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Scale</h5>
    <p class="card-text">All scale for engineering purpose are avaiable.</p>
    
  </div>
</div>
      </div> */}
    </div>
    </div>
    
  )
}

export default Services