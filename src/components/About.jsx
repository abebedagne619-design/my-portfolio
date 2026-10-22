import React, { useEffect } from 'react';
import './components.css';

const About = () => {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <section id="about" className="about-section">
            <h2 className="about-title">About Me</h2>
            <div className="about-container">
                <div className="about-text">
                    <p>I'm Abebe Dagne Mengist, a dedicated 3rd-year Computer Science student passionate about technology and its potential to solve real-world problems. My academic journey has equipped me with strong foundations in programming, algorithms, and software development.</p>
                    <p>I'm particularly interested in web development, mobile applications, and emerging technologies. I believe in continuous learning and regularly work on personal projects to enhance my skills and stay updated with industry trends.</p>
                    <p>As a student, I'm actively seeking opportunities to apply my knowledge in practical settings, collaborate with experienced professionals, and contribute to meaningful projects that make a difference.</p>
                </div>
                <div className="about-stats">
                    <div className="about-stat-card" style={{ animationDelay: '0.2s' }}>
                        <i className="fas fa-code about-stat-icon"></i>
                        <h3 className="about-stat-number">15+</h3>
                        <p className="about-stat-label">Projects Completed</p>
                    </div>
                    <div className="about-stat-card" style={{ animationDelay: '0.4s' }}>
                        <i className="fas fa-book about-stat-icon"></i>
                        <h3 className="about-stat-number">4th Year</h3>
                        <p className="about-stat-label">Computer Science</p>
                    </div>
                    <div className="about-stat-card" style={{ animationDelay: '0.6s' }}>
                        <i className="fas fa-trophy about-stat-icon"></i>
                        <h3 className="about-stat-number">5+</h3>
                        <p className="about-stat-label">Certifications</p>
                    </div>
                    <div className="about-stat-card" style={{ animationDelay: '0.8s' }}>
                        <i className="fas fa-clock about-stat-icon"></i>
                        <h3 className="about-stat-number">500+</h3>
                        <p className="about-stat-label">Coding Hours</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;