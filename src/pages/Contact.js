import React, { useState } from 'react'

const Contact = () => {

  const [data, setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent= (event)=>{
    const {name, value}= event.target;

    setData ((preVal)=>{
      return {
        ...preVal,
        [name]:value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `Name: ${data.fullname}, Phone: ${data.phone}, Email: ${data.email}, Message: ${data.msg}`
      );
  };
    return ( 
      <>
        <div className ='my-5'>
        <h1 className='text-center'> Contact Me </h1> 
        </div> 
        <div className='Container'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
              <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter Your Name"/>
              </div>
              <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" 
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"/>
              </div>
              <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" 
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="Email"/>
              </div>
              <div className="mb-3">
                   <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                   name="msg"
                   value={data.msg}
                   onChange={InputEvent}
                   ></textarea>
              </div>
              <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
              </form>
            </div>
          </div>
        </div>
        </>
    )
}

export default Contact;