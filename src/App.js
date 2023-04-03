import './App.scss';
import React from 'react';
import Lesson from './components/lesson-element/Lesson';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="dashboard-container">
      <Banner/>
      <Lesson/>
    
    </div>
  );
}

export default App;

