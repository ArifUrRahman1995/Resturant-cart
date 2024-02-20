import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import { Footer } from '../container';

const About = () => {
  return (
    <div>
      <Navbar />
        About
        <Link to='/'>Back to home</Link>
      <Footer />
    </div>
  )
}

export default About;