import React from 'react'
import '../../components/cards/card.scss'

export default function Card() {
    const card= [
        {
            id: "1",
            image: "https://img.icons8.com/nolan/64/backend-development.png",
            title: "Backend Development",
            description: "Master the server-side of web development and learn how to create fast, secure, and scalable web applications with a fullstack development course."
         },
         {
            id: "2",
            image: "https://img.icons8.com/nolan/64/1A6DFF/C822FF/windows10-personalization.png",
            title: "Frontend Development",
            description: "Take your web development skills to the next level by learning how to create stunning and responsive user interfaces that work across different devices and platforms."
         },
         {
            id: "3",
            image: "https://img.icons8.com/nolan/64/web-design.png",
            title: "UX Design",
            description: "Learn how to create digital products that people love to use by mastering the art of user experience design. Create user-centered interfaces that delight and engage your users."
         }
    ]

  return (
    <div className='card-container'>
        {card.map(({id, image,title, description}) => (
            <div key= {id} className='card'>
                <img alt='great thing' src={image} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        ))}
    </div>
  )
}
