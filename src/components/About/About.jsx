import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className="Landing">
        <div className="container flex">
          <div className="landing-info">
            <span>Hi, my name is </span>
            <h2 className="myName">Aymen Bnn .</h2>
            <h3 className='myProf'>
            I'm a <span>software engineer </span>specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
            </h3>
            <div className="myInfo flex">
              <p>I'm a software ingeneer specializing in building  exceptional digital experiences.</p>
              <p>skilled at progressive enhancement, design systems & UI Engineering.</p>
            </div>
          </div>
          <div className="landing-img">
            <img className='lan-img' src="/assets/Images/myImg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About