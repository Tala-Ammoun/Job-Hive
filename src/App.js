import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/Navbar";
import JobsSearch from './pages/Jobs/JobsSearch';
import JobInfo from './pages/JobInfo/JobInfo';

export default function App() {
  return (
    <div className="App bg-slate-50 min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jobs" element={<JobsSearch />} />
          <Route path="/Jobs/:id" element={<JobInfo />} />
          <Route path="About" element={<About />}/>
          <Route path="/Contact" element={<Contact />} />
          
          </Routes>
          </BrowserRouter>
      </div>
  )}
