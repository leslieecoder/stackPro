import React from 'react'
import '../community/community.scss';
import Banner from '../../components/banner/Banner';

export default function Community() {
  return (
    <div>
        <Banner
        title="Community"
        subtitle="Building together, showcasing greatness: Our community's full-stack projects."

/>
<div className='share'>
    <p>On this page, you'll find a space to showcase your projects and receive feedback from other community members. We encourage you to share your work, ask questions, and engage in discussions with others in the community.</p>
    <button className='emphasis-btn'>Share Project</button>
</div>
    </div>
  )
}
