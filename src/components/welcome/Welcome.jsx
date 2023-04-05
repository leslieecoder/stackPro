import React from 'react'
import avatar from '../../assets/avatar.png'
import boxes from '../../assets/light-boxes.png'
import '../welcome/welcome.scss'

export default function Welcome() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
  return (
    
    <div className='banner-welcome'>
    
    <div className='text'>
    <img src={avatar} alt='Avatar'/>
        <div>
        <h1>Welcome Lesliee</h1>
        <p>{currentDate}</p>
        </div>
    </div>
    <img className='boxes-welcome' src={boxes} alt='Boxes'/>
</div>
  )
}
