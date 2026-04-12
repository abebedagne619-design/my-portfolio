import React, { useEffect } from 'react';
import './components.css';

const Skills = () => {
    const skillCategories = [
        { title: 'Programming Languages', icon: 'fas fa-code', color: '#667eea', skills: [{ name: 'Python', percent: 85, icon: 'fab fa-python', color: '#3776AB' }, { name: 'Java', percent: 75, icon: 'fab fa-java', color: '#007396' }, { name: 'JavaScript', percent: 80, icon: 'fab fa-js', color: '#F7DF1E' }, { name: 'C++', percent: 70, icon: 'fas fa-plus-circle', color: '#00599C' }, { name: 'HTML5/CSS3', percent: 90, icon: 'fab fa-html5', color: '#E34F26' }] },
        { title: 'Web Development', icon: 'fas fa-globe', color: '#a855f7', skills: [{ name: 'React', percent: 75, icon: 'fab fa-react', color: '#61DAFB' }, { name: 'Node.js', percent: 70, icon: 'fab fa-node-js', color: '#339933' }, { name: 'Express.js', percent: 65, icon: 'fas fa-server', color: '#000000' }, { name: 'MongoDB', percent: 60, icon: 'fas fa-database', color: '#47A248' }, { name: 'Bootstrap', percent: 85, icon: 'fab fa-bootstrap', color: '#7952B3' }] },
        { title: 'Tools & Technologies', icon: 'fas fa-tools', color: '#ec489a', skills: [{ name: 'Git/GitHub', percent: 80, icon: 'fab fa-git-alt', color: '#F05032' }, { name: 'VS Code', percent: 90, icon: 'fas fa-code', color: '#007ACC' }, { name: 'Linux', percent: 70, icon: 'fab fa-linux', color: '#FCC624' }, { name: 'SQL', percent: 75, icon: 'fas fa-database', color: '#4479A1' }, { name: 'Figma', percent: 65, icon: 'fab fa-figma', color: '#F24E1E' }] }
    ];

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `@keyframes shine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } } @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>
            <p className="skills-subtitle"><i className="fas fa-chart-line"></i> My technical proficiency and expertise</p>
            <div className="skills-container">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skills-category">
                        <div className="skills-category-header"><i className={`${category.icon} skills-category-icon`} style={{ color: category.color }}></i><h3 className="skills-category-title">{category.title}</h3></div>
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="skills-item" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                                <div className="skills-item-header">
                                    <div className="skills-name-container"><i className={`${skill.icon} skills-icon`} style={{ color: skill.color }}></i><span className="skills-name">{skill.name}</span></div>
                                    <span className="skills-percent">{skill.percent}%</span>
                                </div>
                                <div className="skills-progress-bar"><div className="skills-progress-fill" style={{ width: `${skill.percent}%` }}><div className="skills-progress-glow"></div></div></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;