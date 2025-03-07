import React from 'react';
import resume from "../images/resume.pdf"
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
                <iframe title="resumepdf" src={resume} width="100%" height="500px"/>
            </div>
        </section>
    )
}
export default Resume;