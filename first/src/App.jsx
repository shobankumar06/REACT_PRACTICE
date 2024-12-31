import './App.css';
import Home from './Home.jsx';
import Aboutus from './Aboutus.jsx';
import Contact from './Contact.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      
      <header id="header">
      <Link to="/" id="link">ABC</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Aboutus">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </nav>
      </header>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
      
      <footer className="foot">
        <h3 id="copy">&copy; Copyright</h3>
      </footer>
    </Router>
  );
};

export default App;
