import React from "react";
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Courses from './components/Courses';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import AnimatedButton from "./components/AnimatedButton";
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
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;