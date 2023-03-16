import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Jobs from './pages/Jobs/Jobs'
import NavBar from './components/Navbar'
import JobInfo from './pages/JobInfo';

function App() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline bg-red-300">
      Hello Project 2!
     
    </h1>
    <Jobs/>
    <Jobs/>
    <Jobs/>
    
    

      <Router>
        <NavBar/>
        <Routes>
        <Route path="/Contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Jobs" element={<Jobs/>}/>
          <Route path="/project/:id" element={<JobInfo/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

      
