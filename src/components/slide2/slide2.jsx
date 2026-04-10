import React from 'react'
import "./slide2.css"
import cardio from "../../assets/cardio.jpg"
import gymWorkout from "../../assets/gym workout.jpg"
import HIIT from "../../assets/HIIT.jpg"
import mma from "../../assets/mma.jpg"
import yoga from "../../assets/yoga.jpg"
import zumba from "../../assets/zumba.jpg"


const slide2 = () => {
  return (
    <div class='slide2'>


        <div className="heading">
          <h1>Fitness Activities Available Here</h1>
        <h5>from strength training to HIIT , explore many more things here</h5>
        </div>


        <div className="activities">
           <div className="left">
            <img src={HIIT} alt="" />
           </div>

          
           <div className="mid">
            <div className="midup">
               <div className="midupleft">
                 <img src={cardio} alt="" />
               </div>
              <div className="midupright">
                 <img src={yoga} alt="" />
              </div>
            </div>
            <div className="middown">
              <img src={gymWorkout} alt="" />
            </div>
           </div>
          

             <div className="right">
              <div className="rightup">
                <img src={mma} alt="" />
              </div>
              <div className="rightdown">
                <img src={zumba} alt="" />
              </div>
             </div>
        </div>


    </div>
  )
}

export default slide2