import React ,{ useEffect, useState }from 'react'
import './Landing.css'

const Landing = () => {
  const [timer , setTimer] =useState(['hello1', 'hello2'])

  useEffect(() => {
    const inervalID = setInterval(() => {

      let index = 0
      setTimer(() => {
        const effect = timer[index]
      })
    },2000)
    return()=> clearInterval(inervalID)
  },[])
  const jobs = ["Front end developer" , "Back-end developer", "Mern Stakc developer"]
  return (
    <>
      <div className="Landing">
        <div className="container c-flex">
          <div className="landing-text">
            <h1>Hello</h1>
            <br />
            <h1>My Name is Aymen and I am : </h1>
            <div className="landingAnim">
              <div>Front End Developer</div>
              <div>Back End Developer</div>
              <div>MERN Stack Developer</div>
            </div>
          </div>
          <div id="instructions">
          	click and drag to control the animation
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing