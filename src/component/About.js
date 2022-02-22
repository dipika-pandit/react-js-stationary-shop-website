import React from 'react'
import { Link } from 'react-router-dom';
import Common from '../Common';
import pen from '../Images/pen.jpg';

function About() {
  return (
    <>
    <Common
    name="Welcome to About page"
    pen={pen}
    visit="/contact"
    btname="Contact us"
    
    
    
    
    />
    
    </>
    
  )
}

export default About