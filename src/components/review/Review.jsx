import React from 'react'
import '../review/review.scss'

export default function Review() {
  return (
    <div className='review-container'>
        <h2 >Review of the Day</h2>
        <h4>Flexbox</h4>
        <p>Flexbox is a CSS layout model that helps you create flexible and responsive layouts by allowing you to easily control the size, order,
        and position of elements in a container. It's great for building complex user interfaces and offers features such as flexible layouts, alignment control,
        and easy element reordering and resizing</p>
        <button className='emphasis-btn'>Review Lesson</button>
    </div>
  )
}
