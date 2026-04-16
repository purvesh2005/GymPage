import React from 'react'
import Nav from './Navbar/Nav'
import Slide1 from './Slide1/slide1'
import Slide0 from './slide0/slide0'
import Slide2 from './slide2/slide2'
import Slide3 from './slide3/slide3'
import Slide4 from './slide4/slide4'

const Home = () => {
  return (
    <div>
     <Nav/>
     <Slide0 />
   <Slide1 />
   <Slide2 />
   <Slide3 />
     <Slide4 />
  </div>
  )
}

export default Home