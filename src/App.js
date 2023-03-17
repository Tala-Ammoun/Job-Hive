import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import JobsSearch from './pages/Jobs/JobsSearch'
import NavBar from './components/Navbar'
import JobInfo from './pages/JobInfo/JobInfo';

function App() {
  return (
    <div >
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/Contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Jobs" element={<JobsSearch/>}/>
          <Route path="/JobsInfo/:id" element={<JobInfo/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
      
     
    
    
    
    
    


      
