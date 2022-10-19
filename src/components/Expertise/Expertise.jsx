import React from 'react'
import './Expertise.css'
import expData from './expData'
const Expertise = () => {
  return (
    <>
      <div className="myExpertise">
        <h1 className='mainTitle' >My Expertise</h1>
        <div className="container">
          {
            expData.map((path,index)=>{
              return(
                <div className="Expertise">
                <div className="expTitle">
                <i class={path.icon}></i>
                <h2>{path.title}</h2>
                </div>
                <div className="expDesc">
                  <p>{path.desc}</p>
                </div>
              </div>
              )})
          }
        </div>
      </div>
    </>
  )
}

export default Expertise