import React from 'react'
import web from "../images/rocket.png";
import Common from './Common';

const Home = () => {
  return (
    <>
    <Common name="Learning React js is interesting:" imgsrc={web} visit="/tutorial" btname="Get Started"/>
    </>
  )
}

export default Home;