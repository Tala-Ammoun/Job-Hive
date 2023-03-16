import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NavBar from "./components/Navbar";
import JobInfo from "./pages/JobInfo";
import About from "./pages/About";

function App() {
  return (
    <div className="App bg-gray-300 min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/JobInfo" element={<JobInfo />} />
          <Route path="About" element={<About />}/>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
