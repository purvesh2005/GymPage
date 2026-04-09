import React from 'react'
import"./Nav.css"
import nextlevel from "../../assets/nextlevel.png"

const Nav = () => {
  return (
     <div class="Nav">
    <div className="left">
      <div><img src={nextlevel} alt="" width="150" /></div>
     <div class='text'>
       <h1>Next Level Fitness Club</h1>
      <h6>Use it or lose it.</h6>

     </div>
    </div>
      <div class='middle'>
        <h1>Home</h1>
        <h1>Contact us</h1>
        <h1>Location</h1>
        <h1>Reviews</h1>
      </div>
      
      <div >
        <button class='right1'>Get Started</button>
      <button class='right2'>Login</button>
      </div>
  
    </div>
  )
}

export default Nav