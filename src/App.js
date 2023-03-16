import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/Navbar.js";


function App() {
  return (

   
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
