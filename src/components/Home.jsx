import React from 'react'
import Nav from './Navbar/Nav'
import Slide1 from './Slide1/slide1'
import Slide0 from './slide0/slide0'
import Slide2 from './slide2/slide2'

const Home = () => {
  return (
    <div>
     <Nav/>
     <Slide0 />
   <Slide1 />
   <Slide2 />
  </div>
  )
}

export default Home