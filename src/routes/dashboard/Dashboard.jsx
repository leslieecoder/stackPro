import React from 'react'
import './dashboard.scss'
import Welcome from '../../components/welcome/Welcome'
import ProgressBar from '../../components/progress/ProgressBar';
import NextLesson from '../../components/nextlesson/NextLesson'
import Review from '../../components/review/Review'


export default function Dashboard() {
  return (
    <div className="dashboard">
    
      <div className='rest-side'>
      <Welcome/>
      <ProgressBar/>
      <div className='lesson-boxes'>
      <NextLesson/>
      <Review/>
      </div>
      
      </div>
     
    
    </div>
  )
}
