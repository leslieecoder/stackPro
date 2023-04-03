import React from 'react'
import boxes from '../../assets/light-boxes.png'
import '../banner/banner.scss'


export default function Banner() {
  return (
    <div className='banner-container'>
        <img src={boxes} alt='Boxes'/>
        <div className='text'>
            <h1>stack<span className='pro'>Pro</span><span className='ux'>+UX</span></h1>
            <p>The Ultimate Full-Stack Development + UX/UI Design course</p>
        </div>
        <img src={boxes} alt='Boxes'/>
    </div>
  )
}
