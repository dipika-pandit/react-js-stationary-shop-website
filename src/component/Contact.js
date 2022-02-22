import React from 'react'

function Contact() {
  return (
    <>
    
    <div classNameName="container">
    <div>
      <h1 className='text-center'>Contact Us</h1>
</div>

<form action="https://formsubmit.co/e2e8fdd6ced4f0076ac73b3bffbe1908" method="POST" >
  <div classNameName='row'>
    <div classNameName='col-md-10'>
  <div className="">
    <label for="formGroupExampleInput">Full Name</label>
    <input type="name" className="form-control " id="formGroupExampleInput" placeholder="full name"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Email Id </label>
    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="email id"/>
  </div>
  <div className="">
    <label for="formGroupExampleInput">Phone Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type"/>
  </div>
  <div className="">
    <label for="formGroupExampleInput">Address</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="type"/>
  </div>
  <div className="col-auto">
      <button type="submit" className="btn btn-outline-primary text-center">Submit</button>
    </div>
  </div>
  </div>
  
</form>
</div>
</>


     )
}

export default Contact