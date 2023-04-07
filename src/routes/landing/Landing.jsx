import React from 'react'
import '../landing/landing.scss'
import NavBar from '../../components/navbar/NavBar'
import Card from '../../components/cards/Card'
import { Outlet, Link } from 'react-router-dom'

export default function Landing() {
   
  return (
    <div className='landing'>
      <NavBar/>
      
      <div className='hero'>
        <div className='call-to-action'>
          <h1>For designers who love to code and coders who love to desing</h1>
          <button className='nav-btn'>Get Started</button>
        </div>
        
      </div>
      <h1 className='title'>Become a Pro on</h1>
      <Card/>
      <div className='why'>
        <div className='why-img'>
          <img src="" alt="" />
          </div>
        <div className='why-text'>
           <h1>Why Learn Full-Stack Dev and UX Design?</h1>
           <p>Unlock your full potential as a web developer by mastering both backend and frontend development, as well as the art of user experience design. With these skills, you'll be able to create powerful and intuitive web applications that meet the needs of your users and clients, and make a lasting impact in the digital world. Whether you're just starting out or looking to level up your career, a fullstack development course with a focus on UX design is the key to unlocking your success.</p>
        </div>
      </div>
      <Outlet/>

    </div>
  )
}
