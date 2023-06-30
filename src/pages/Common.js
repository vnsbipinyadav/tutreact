import React from 'react'
// import web from "../images/rocket1.gif";
import {NavLink} from "react-router-dom";

const Common = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className='row'>
            <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto">
              <h1 className='mt-5'>{props.name}<stong className="text-info"> Bipin Yadav</stong></h1>
              <h2 className="my-3 text-secondary">I'm learning it from scratch.</h2>
              <div className="mt-3">
                <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
              </div>
            </div>
            <div className="col-md-6 pt-3 pt-lg-0 order-1 order-lg-2">
            <img src={props.imgsrc} className="img-fluid" alt='Common page'/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Common;