import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../components/navbar/navbar.scss'

export default function NavBar() {
  return (
    <div className='navbar'>
        <div className='logo-nav'>
            <img src={logo} alt='logo'/>
            <h3>StackPro+UX</h3>
        </div>
        <nav>
            <Link className='navbar-link' to="/#hero">Home</Link>
            <Link className='navbar-link' to="/#hero">About</Link>
            <Link className='navbar-link' to="/#hero">Why</Link>
            <Link className='navbar-link' to="/#hero">Courses</Link>      
        </nav>
        <div className='btns'>
            <button className='nav-btn'><Link className='btn' to="/login">Login</Link></button>
            <button className='nav-btn'><Link className='btn' to="/sign-in">Get Started</Link></button>
        </div>
    </div>
  )
}
