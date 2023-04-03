import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import data from '../../json/lessons.json';
import '../lesson-element/lessons.scss'
import image from '../../assets/module0.png'

export default function Lesson() {

  const lessons = data
  return (
    <div className='lessons-container'>
        {lessons.map(({title, id, description, image}) => (
             <div key ={id}className='lesson'>
              <img src={image}/> 
             <div className='text-container'>
                 <h3>{title}</h3>
                 <p>{description}</p>
             </div>
             <div className='check'>
             <CheckCircleOutlineIcon style={{ color: 'gray' }} />
             </div>
             </div>

        ))}
       
    </div>
  )
}
