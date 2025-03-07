import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Courses.css';

const courses = [
  { name: "Multivariate Calculus", link: "https://www.umass.edu/mathematics-statistics/sites/default/files/2024-10/Math233_typical_Syllabus_Redacted_0.pdf" },
  { name: "Programming Methodologies", link: "https://people.cs.umass.edu/~marius/class/cs220-fa24/" },
  { name: "Linear Algebra", link: "https://people.umass.edu/~esarfoampons/Math235SyllabusUWW.pdf" },
  { name: "Algorithms", link: "https://people.cs.umass.edu/~marius/class/cs311/" },
  { name: "Algorithms Honors Colloq", link: "https://people.cs.umass.edu/~marius/class/h311-fa24/" },
  { name: "Discrete Mathematics", link: "https://people.cs.umass.edu/~barring/cs250/fullsyllabus.html" },
  { name: "Probability and Statistics", link: "https://people.umass.edu/~andrewlan/files/240spring20_syllabus.pdf" },
  { name: "Data Structures", link: "https://www.cics.umass.edu/documents/cics-210-syllabus" },
  { name: "Software Engineering", link: "https://people.cs.umass.edu/~jaimedavila/Courses/SE/COMPSCI_320_Syllabus_Fall_2023_Anderson.pdf" },
  { name: "CS Principles", link: "https://people.cs.umass.edu/~liberato/courses/2022-fall-compsci230/syllabus/" },
];

function Courses() {
  const navigate = useNavigate();
  const [animatedCourses, setAnimatedCourses] = useState([]);

  useEffect(() => {
    // Randomize the order slightly for more interesting animation
    const shuffledCourses = [...courses].sort(() => Math.random() > 0.7 ? 1 : -1);
    
    // Add animation delay to each course
    const coursesWithDelay = shuffledCourses.map((course, index) => ({
      ...course,
      delay: index * 150 // Increased delay between courses
    }));
    
    setAnimatedCourses(coursesWithDelay);
  }, []);

  return (
    <div className="courses">
      <button onClick={() => navigate('/')} className="back-button">
        Home
      </button>
      <h2 className="courses-title">Relevant Courses</h2>
      
      <div className="courses-grid">
        {animatedCourses.map((course, index) => (
          <a
            key={index}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="course-button"
            style={{ '--delay': `${course.delay}ms` }}
          >
            {course.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Courses;
