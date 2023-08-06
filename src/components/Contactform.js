import React from 'react'
import bootstrap from "react-bootstrap"
import Nav from "react-bootstrap"

export default function Contactform() {
  return (<>
    
    <div className='container col-sm-6 col-12 bg-secondary text-bg-primary mycnt'>

    <form className="row g-3" action="https://formspree.io/f/mgejobpa"
  method="POST" >
  <div className="col-md-12 jjj">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="Name" id="name" />
  </div>
  <div className="col-md-12 jjj">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" name="Email" id="inputEmail4"/>
  </div>
  <div className="col-md-6 jjj">
    <label for="mobile" className="form-label">Mobile No.</label>
    <input type="number" className="form-control" name="Mobile" id="mobile"/>
  </div>
  <div className="col-12 jjj">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" name="Address1" id="inputAddress" placeholder="H.no, street no"/>
  </div>
  <div className="col-12 jjj">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" name="Address2" id="inputAddress2" placeholder="Area , city"/>
  </div>
  <div className="col-md-6 jjj">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" name="City" id="inputCity"/>
  </div>
  
  <div className="col-12 jjj">
    <input type='text' className='form-control'  placeholder='Enter your requirements' name='Requirements'></input>
  </div>
 
  <div className="btncnt">
    <button type="submit" className="btn  ">Submit</button>
  </div>
</form>
</div>
   

    </>)
}
