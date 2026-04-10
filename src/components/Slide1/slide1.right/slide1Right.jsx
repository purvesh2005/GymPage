import React from 'react'
import "./slide1Right.css"

const slide1Right = () => {
  const images = [
"https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1661301057249-bd008eebd06a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
  ]
  return (
    <div class='slide1Right'>
     <div className="slider">
      {images.map((img,idx)=>(
        <img key={idx} src={img} />     ))}
     </div>
     <div className="dots">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     </div>
    </div>
  )
}

export default slide1Right