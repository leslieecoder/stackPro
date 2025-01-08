import React from 'react'
import boxes from '../../assets/boxes-light.png'
import logo from '../../assets/logo.png'
import '../../components/sidebar/sidebar.scss'
import {  Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ClassIcon from '@mui/icons-material/Class';
import ForumIcon from '@mui/icons-material/Forum';
import ArticleIcon from '@mui/icons-material/Article';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <img src={logo} alt='stackpro+ux'/>
            <h1>stack<span className='pro'>Pro</span><span className='ux'>+UX</span></h1>
        </div>

        <div className='menu'>
            <Link className='nav-Link' to='dashboard'> <DashboardIcon/> Dashboard</Link>
            <Link className='nav-Link' to='modules'> <ClassIcon/>  Modules</Link>
            <Link className='nav-Link' to='community'> <ForumIcon/> Community</Link>
            <Link className='nav-Link' to='resources'> <ArticleIcon/> Resources</Link>
        </div>
        <div className='decoration'>
        <img src={boxes} alt='boxes'/> 
        </div>
       
        

        </div>
  )
}
