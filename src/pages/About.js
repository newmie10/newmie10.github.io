import React from 'react';
import hiking from "../images/hiking.jpg"
import code from "../images/code.jpg"
import music from "../images/music.jpg"
import library from "../images/library.jpg"
import { useNavigate } from "react-router-dom"
import '../styles/About.css';



function About() {
  const navigate = useNavigate()

  return (
    <section className="about">
      <button onClick={() => navigate('/')} className="back-button">
        Home
      </button>
      <h2 className="about-title">About Me</h2>
      
      <div className="about-container">
        <div className="about-box">
          <img src={hiking} alt="Hiking in Glacier NP" className="about-img" />
          <div className="about-text">
            <h3>Hobbies</h3>
            <p>I love exercise and sports. In the winter, I love skiing and pond skating. In the summer, I spend lots of time in Maine fishing, swimming, and hiking.</p>
          </div>
        </div>

        <div className="about-box">
          <img src={code} alt="C++" className="about-img" />
          <div className="about-text">
            <h3>Coding & Tech</h3>
            <p>My love of tech started with DIY quadcopter builds in middle school. My friend and I won first in a state competition with a drone that could accurately drop objects on a bullseye!
              I still enjoy everything RC, but now put more time into cool projects like this one. I program in many languages, including C, C++, Python, JS, TS, and Java.
            </p>
          </div>
        </div>

        <div className="about-box">
          <img src={music} alt="Music" className="about-img" />
          <div className="about-text">
            <h3>Music</h3>
            <p>I've always been one to explore new music. Whether I'm on a Billy Strings tear or going back to the basics with The Band, you can always find me trying to find new songs!</p>
          </div>
        </div>

        <div className="about-box">
          <img src={library} alt="Library" className="about-img" />
          <div className="about-text">
            <h3>Reading</h3>
            <p>I've recently rediscovered my passion for reading. I mostly explore historical nonfiction, and recently finished the mammoth "Rise and Fall of the Third Reich" by William Stricker. Jon Krakauer is another favorite, and I think I've finished most if not all of his books. I'm diving into some less heavy stuff now with the Jack Ryan series by Tom Clancy, and so far it's been a great de-stressing habit. I've linked my GoodReads profile at the bottom, if you want to read some of my poorly written reviews.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
