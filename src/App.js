import React from "react";
import './App.css';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import About from './pages/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*sam burger boy ;)*/
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} 
            />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;