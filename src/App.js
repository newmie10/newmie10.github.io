import React from "react";
import './styles/App.css';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import About from './pages/About';
import CyberSecurity from './pages/CyberSecurity';
import Resume from './pages/Resume'
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*sam burger boy ;)*/
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <main style={{'min_height': '100vh'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;