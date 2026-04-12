import React from 'react';
import './components.css';

const Experience = () => {
    const experiences = [
        { title: 'Frontend Developer Intern', company: 'Tech Company Ethiopia', period: '2024 - Present', description: 'Developing responsive web applications using React, collaborating with design team, and implementing UI/UX improvements.' },
        { title: 'Freelance Web Developer', company: 'Self-employed', period: '2023 - Present', description: 'Building websites for small businesses, providing maintenance and support, and customizing WordPress themes.' },
        { title: 'Teaching Assistant', company: 'University', period: '2023 - 2024', description: 'Assisting in Introduction to Programming course, helping students with debugging, and grading assignments.' }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2 className="experience-title">Work Experience</h2>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3 className="experience-title-text">{exp.title}</h3>
                        <div className="experience-company">{exp.company}</div>
                        <div className="experience-period"><i className="far fa-calendar-alt"></i> {exp.period}</div>
                        <p className="experience-description">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;