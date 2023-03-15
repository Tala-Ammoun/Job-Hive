import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Shop" element={<Shop/>} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
