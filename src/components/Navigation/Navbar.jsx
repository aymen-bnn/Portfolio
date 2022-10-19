import React from 'react'
import './Navbar.css'
import navData from './NavData'
const Navbar = () => {
  return (
    <>
    <div className="Navbar">
      <div className="container">
        <ul className='c-flex'>
        {
          navData.map((path,index)=>{
            return(
              <li key={index} className='navigation'>
              <a href={path.navPath}>
                  <i class={path.navIcon}></i>
              </a>
              </li>
            )})
        }
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar