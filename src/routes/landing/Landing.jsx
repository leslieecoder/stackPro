import React from 'react'
import '../landing/landing.scss'
import banner from "../../assets/banner.png"
import guyWhy from "../../assets/image_5.png"
import stackpro from "../../assets/stackpro.png";
import stackproplus from "../../assets/stackproplus.png"
import imageIcon from "../../assets/icon-picture.png"
import nextLevelImg from "../../assets/next-level.png"
import NavBar from '../../components/navbar/NavBar'
import Card from '../../components/cards/Card'
import { Outlet, Link } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import SignUp from '../signup/SignUp';
import  Login  from '../login/Login'
export default function Landing() {
   
  const testimonials = [
    {
      name: "John Smith",
      testimonial: "The Full Stack and UX Design course was very informative and engaging. The hands-on projects were challenging but rewarding."
    },
    {
      name: "Jane Doe",
      testimonial: "The Full Stack and UX Design course was well-structured and easy to follow. I feel confident in my ability to build full-stack applications and create intuitive user interfaces."
    },
    {
      name: "Bob Johnson",
      testimonial: "The Full Stack and UX Design course covers everything from basic HTML and CSS to advanced JavaScript frameworks and databases. It was an excellent investment in my career as a web developer."
    },
    {
      name: "Sara Martinez",
      testimonial: "The Full Stack and UX Design course helped me improve my collaboration skills and feel much more confident in my ability to build complete, user-friendly web applications."
    },
    {
      name: "David Lee",
      testimonial: "The Full Stack and UX Design course was an excellent investment for me. The course projects were challenging but also fun, and I was able to build some impressive applications by the end of the course."
    },
    {
      name: "Karen Kim",
      testimonial: "The Full Stack and UX Design course covered everything I needed to know to become a full-stack developer. The instructors were very supportive and provided helpful feedback on my projects."
    }
  ];
  

  return (
    <div className='landing'>
      <NavBar/>
      
      <div className='hero'>
        <div className='call-to-action'>
          <h1>For designers who love to <span style={{color:"#FFBD59"}}>code</span> and coders who love to desing</h1>
          <button className='nav-btn'>Get Started</button>
        </div>
        <img src={banner} alt="banner image" />
      </div>
      <h1 className='title'>Become a Pro on</h1>
      <Card/>
      <div className='why'>
        <div className='why-img'>
          <img src={guyWhy} alt="guy in computer" />
          </div>
        <div className='why-text'>
           <h1>Why Learn <span style={{color:"#FFBD59"}}>Full-Stack</span> Dev and <span style={{color:"#FFBD59"}}>UX Design?</span></h1>
           <p>Unlock your full potential as a web developer by mastering both backend and frontend development, as well as the art of user experience design. With these skills, you'll be able to create powerful and intuitive web applications that meet the needs of your users and clients, and make a lasting impact in the digital world. Whether you're just starting out or looking to level up your career, a fullstack development course with a focus on UX design is the key to unlocking your success.</p>
           <button className='why-btn'>Learn More</button>
        </div>
      </div>
      <div className='testimonials'>
        <h1>Testimonials</h1>
        <div className='testimonial-container'>
      {testimonials.map(element => 
        
          <div className='testimonial'>
          <img src={imageIcon} alt="" />
          <div>
            <div className='content'>{element.testimonial}</div>
            <div className='name'>- {element.name}</div>
          </div>
        </div>
        
        )}
        </div>
      </div>
      <div className='available'>
        <h1>Available Courses</h1>
        <div className='course-container'>
        <div className='course'>
          <img src={stackpro} alt="logo stack" />
          <div>
            <ul>
              <li>
                Teaches how to build web applications fro start to finish.
              </li>
              <li>
                Covers both front-end (client-side) and back-end (server side) development processes.
              </li>
              <li>
                Includes learning a variety of programming languages, frameworks, and tools.
              </li>
              <li>
                Provides practical experience through working on real-world projects.
              </li>
            </ul>
            <button>Start Course</button>
          </div>
        </div>


        <div className='course'>
          <img src={stackproplus} alt="logo stack" />
          <div>
            <ul>
              <li>
                Teaches how to build web applications fro start to finish.
              </li>
              <li>
                Covers both front-end (client-side) and back-end (server side) development processes.
              </li>
              <li>
                Includes learning a variety of programming languages, frameworks, and tools.
              </li>
              <li>
                Provides practical experience through working on real-world projects.
              </li>
              <li>
                Teaches how to create wireframes and prototypes using industry-standard design tools such as Sketch, Figma, or Adobe XD.
              </li>
            </ul>
            <button>Start Course</button>
          </div>
        </div>

        </div>
        
      </div>
      <div className='next-level'>
          <div className='container'>
            <div>
              <h2>Take your skills to the</h2>
              <h1>NEXT LEVEL</h1>
              <p>
                Our online learning  platform offers comprehensive courses in full-stack development and UX design that will equip you with the skills  and knowledge  needed to create cutting-edge web applications.
              </p>
          
            </div>
            <img src={nextLevelImg} alt="next level image" />
          </div>
        </div>

        <div className='login-sign' id='login-sign'>
        <Login/>
        <SignUp/>
        </div>
        <footer>
          <p>Developed with love  by Leslie Cruz</p>
          <div>
            <FacebookRoundedIcon className='icons'/>
            <SubscriptionsRoundedIcon className='icons'/>
          </div>
        </footer>
      <Outlet/>

    </div>
  )
}
