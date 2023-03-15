import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart'
import Navbar from '';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Shop" element={<Shop/>} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
