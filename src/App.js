import './App.scss';
import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import Dashboard from './routes/dashboard/Dashboard';
import ModulesLesson from './routes/modules/ModulesLesson'
import Sidebar from './components/sidebar/Sidebar';
import Community from './routes/community/Community';
import SignIn from './routes/signin/SignIn';
import Landing from './routes/landing/Landing';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Dashboard />} />
          <Route path='modules' element={<ModulesLesson />} />
          <Route path='community' element={<Community/>} />
          <Route path='sign-in' element={<SignIn/>} />
        </Route>
      </Routes>
      <Landing/>
    </div>
   
     
 
     
   
  );
}

export default App;

