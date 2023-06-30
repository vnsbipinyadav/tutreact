import React from 'react'
import web from "../images/front2.png";
import Common from './Common';

const About = () => {
  return (
    <>
    <Common name="This is my new about us page:" imgsrc={web} visit="/contact" btname="Contact Now" />
    </>
  )
}

export default About;