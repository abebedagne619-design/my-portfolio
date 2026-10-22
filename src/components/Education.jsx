import React from 'react';
import './components.css';

const Education = () => {
    const education = [
        { degree: 'Bachelor of Science in Computer Science', institution: 'Injibara University', period: '2022 - Present', gpa: '', courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development'] },
        { degree: 'Full Stack Web Development Certificate', institution: 'Online Course', period: '2024', description: 'Completed comprehensive training in MERN stack development' }
    ];

    return (
        <section id="education" className="education-section">
            <h2 className="education-title">Education</h2>
            <div className="education-container">
                {education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <div className="education-institution">{edu.institution}</div>
                        <div className="education-period"><i className="far fa-calendar-alt"></i> {edu.period}</div>
                        {edu.gpa && <div className="education-gpa"><i className="fas fa-star"></i> GPA: {edu.gpa}</div>}
                        {edu.courses && <div className="education-courses">{edu.courses.map((course, i) => <span key={i} className="education-course-tag">{course}</span>)}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;