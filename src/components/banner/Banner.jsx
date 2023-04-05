import React from 'react'
import boxes from '../../assets/light-boxes.png'
import '../banner/banner.scss'


export default function Banner(props) {
  
  const {image = boxes, title = 'stackPro+UX', subtitle='The Ultimate Full-Stack Development + UX/UI Design course' } = props


  return (
    <div className='banner-container'>
        <img src={image} alt='Boxes'/>
        <div className='text'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
        <img src={image} alt='Boxes'/>
    </div>
  )
}
