import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="container d-flex">
        <div className="contactText">
          <h3>Let's Chat</h3>
          <p>Hey! i am looking forward to start a project with you , you can choose any communication tool or kindly fill up this form .</p>
          <ul className="contacts">
            <li>
              <a href="mailto:aymenbnn.work@gmail.com">aymenbnn.work@gmail.com</a>
            </li>
            <li>
              <a href="">
              <i class="fa-brands fa-linkedin"></i>
              <h4>Linkedin</h4>
              </a>
            </li>
            <li>
              <a href="">
              <i class="fa-brands fa-github"></i>
              <h4>github</h4>
              </a>
            </li>
            <li>
              <a href="">
              <i class="fa-brands fa-facebook"></i>
              <h4>Facebook</h4>
              </a>
            </li>
            <li>
              <a href="">
              <i class="fa-brands fa-facebook-messenger"></i>
              <h4>Messenger</h4>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
                <h4>Instagram</h4>
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <p>Please write a valid Email so I will be able to reply your message</p>
          <form action="">
            <div className="contactName ">
              <input 
                type="text"
                placeholder='Full Name' />
              <input 
                type="email" 
                placeholder='Email' />
            </div>
            <input 
              className='contactSubject'
              type="text" 
              placeholder='Subject' />
            <textarea          
              className='contactMessage' 
              type="text" 
              placeholder='Please write your message Here ...' 
            ></textarea>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact