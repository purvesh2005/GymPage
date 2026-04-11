import React from 'react'
import "./slide3.css"
import{Dumbbell,HeartPlus,TrendingUp,ShieldCheck,BadgeCheck} from "lucide-react"


const slide3 = () => {
  return (
    <div class='slide3'>
        <div className="heading">
            <h1>Why Choose Next Level Fitness Club</h1>
            <h5>Choose Next Level Fitness Club for better fitness and motivation.It helps you achieve your goals faster</h5>
        </div>
        <div className="cards">
        <div className="card1">
          <Dumbbell size={30}/>
          <h1>Strength</h1>
          <p>Build muscle and improve your body strength with proper workouts.Our trainers guide you to train safely and effectively.</p>
        </div>
         <div className="card2">
          <HeartPlus size={30} />
          <h1>Health</h1>
          <p>Stay fit, active, and improve your overall health.Regular exercise here helps boost both body and mind.</p>
         </div>
          <div className="card3">
            <TrendingUp size={30} />
            <h1>Results</h1>
            <p>See visible progress in your fitness journey.With consistency and guidance, your goals become achievable.</p>
          </div>
           <div className="card4">
            <ShieldCheck size={30}/>
            <h1>Support</h1>
            <p>Get constant motivation from trainers and the gym environment.We help you stay focused and disciplined every day.</p>
           </div>
            <div className="card5">
              <BadgeCheck size={30}/>
              <h1>Confidence</h1>
              <p>Improve your body shape and feel more confident.A fitter body leads to a stronger mindset and self-belief.</p>
            </div>
        </div>
    </div>
  )
}

export default slide3