import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

import data from '../../json/lessons.json';
import '../lesson-element/lessons.scss'
import image from '../../assets/module0.png'

export default function Lesson() {

  const lesson= data
  return (
    <div className='lessons-container'>
        {lesson.map(({title, id, description, image,}) => (
             <Link to={`/lesson/${id}`} className='lesson'>
              <img src={image}/> 
             <div className='text-container'>
                 <h3>{title}</h3>
                 <p>{description}</p>
             </div>
             <div className='check'>
             <CheckCircleOutlineIcon style={{ color: 'gray' }} />
             </div>
             </Link>

        ))}
       
    </div>
  )
}
