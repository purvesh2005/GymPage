import React from 'react'
import"./slide1.css"
import Slide1Left from './slide1.left/slide1Left'
import Slide1Right from './slide1.right/slide1Right'

const slide1 = () => {
  return (
    <div class='slide1'>
<Slide1Left />
<Slide1Right />
    </div>
  )
}

export default slide1