import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Progress from '../progressbar/ProBar';
import '../progress/progressbar.scss'


export default function ProgressBar() {
  return (
    <div className='progress-container'>
       
        <div className='progress-info'>
            <div className='progress-item'>
                <p>Hours Spent</p>
                <div className='hours'>
                    <AccessTimeFilledIcon/>
                    <h1>5</h1>
                </div>
            </div>
            <div className='progress-item'>
                <p>Lessons Completed</p>
                <div className='hours'>
                    <FactCheckIcon/>
                    <h1>3/14</h1>
                </div>
            </div>
            <div className='progress-item'>
                <p>Percentage of Course Completed</p>
                <div className='hours'>
                  <Progress/>  
                </div>
            </div>
        </div>
    </div>
  )
}
