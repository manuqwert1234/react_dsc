import React from 'react'
import '../style/Ending.css'
import video from '../comp/blob-1-opacity-33.gif'

function Ending() {
  return (
    <section className='blackcolorballsnotused'>
      <div id="Ending">
        
        <img src={video} className='video' />
        <div className='ending'>
          <div className='ending-content'>
            <h1>Mission & Objective</h1>
            <h2>Our mission is to empower students with practical data science skills, promote interdisciplinary learning.</h2>
            <h3>We strive to organize impactful events, workshops, and hackathons that enhance our members' data science knowledge, foster a collaborative environment, and prepare them for real-world data challenges.</h3>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Ending
