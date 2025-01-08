import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Link } from 'react-router-dom';

import data from '../../json/lessons.json';
import '../lesson-element/lessons.scss'

export default function Lesson() {
  const [completedLessons, setCompletedLessons] = useState([]);

  const handleLessonCompletion = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  return (
    <div className='lessons-container'>
        {data.map(({title, id, description, image, completed}) => (
             <Link to={`/lesson/${id}`} className='lesson' onClick={() => handleLessonCompletion(id)}>
              <img alt='this is a great alt description' src={image}/> 
             <div className='text-container'>
                 <h3>{title}</h3>
                 <p>{description}</p>
             </div>
             <div className='check'>
               {completedLessons.includes(id) ? <CheckCircleOutlineIcon style={{ color: 'green' }} /> : <RadioButtonUncheckedIcon style={{ color: 'gray' }} />}
             </div>
             </Link>
        ))}
    </div>
  )
}