import React from "react";
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Courses from './components/Courses';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
        <Courses />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;