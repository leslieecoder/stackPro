import './App.scss';
import React from 'react';
import { Routes, useLocation, Route, Outlet} from 'react-router-dom';
import Dashboard from './routes/dashboard/Dashboard';
import ModulesLesson from './routes/modules/ModulesLesson'
import Sidebar from './components/sidebar/Sidebar';
import Community from './routes/community/Community';
import SignIn from './routes/signin/SignIn';
import Landing from './routes/landing/Landing';


function App() {

  const location = useLocation()
  return (
    <div className='container'>
       {location.pathname == "/"?null :<Sidebar />} 
     
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='modules' element={<ModulesLesson />} />
          <Route path='community' element={<Community/>} />
          <Route path='sign-in' element={<SignIn/>} />

          <Route index element={<Landing/>} />
        </Route>
      </Routes>
      
    </div>
   
     
 
     
   
  );
}

export default App;

