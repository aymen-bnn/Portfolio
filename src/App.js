
import './App.css';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router,Routes,Route } 
from 'react-router-dom';
import Navbar from './components/Navigation/Navbar'
import Expertise from './components/Expertise/Expertise';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>} />   
            <Route path="/About" element={<About/>} />   
            <Route path="/Expertise" element={<Expertise/>} />   
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
