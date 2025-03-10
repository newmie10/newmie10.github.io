import React from 'react';
import resume from "../images/resume.png"
import { useNavigate } from 'react-router-dom';
import "../styles/Resume.css"

function Resume() {
    const navigate = useNavigate();
    return (
        <section className="resume-container">
            <button onClick={() => navigate('/')} className="back-button">
                Home
            </button>
            <div>
                <img title="resumepdf" src={resume} width="700px" height="900px"/>
            </div>
        </section>
    )
}
export default Resume;