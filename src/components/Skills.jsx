import React, { useEffect, useRef } from 'react';

const Skills = () => {
    const skillCategories = [
        { 
            title: 'Programming Languages', 
            icon: 'fas fa-code',
            color: '#667eea',
            skills: [
                { name: 'Python', percent: 85, icon: 'fab fa-python', color: '#3776AB' },
                { name: 'Java', percent: 75, icon: 'fab fa-java', color: '#007396' },
                { name: 'JavaScript', percent: 80, icon: 'fab fa-js', color: '#F7DF1E' },
                { name: 'C++', percent: 70, icon: 'fas fa-plus-circle', color: '#00599C' },
                { name: 'HTML5/CSS3', percent: 90, icon: 'fab fa-html5', color: '#E34F26' }
            ]
        },
        { 
            title: 'Web Development', 
            icon: 'fas fa-globe',
            color: '#a855f7',
            skills: [
                { name: 'React', percent: 75, icon: 'fab fa-react', color: '#61DAFB' },
                { name: 'Node.js', percent: 70, icon: 'fab fa-node-js', color: '#339933' },
                { name: 'Express.js', percent: 65, icon: 'fas fa-server', color: '#000000' },
                { name: 'MongoDB', percent: 60, icon: 'fas fa-database', color: '#47A248' },
                { name: 'Bootstrap', percent: 85, icon: 'fab fa-bootstrap', color: '#7952B3' }
            ]
        },
        { 
            title: 'Tools & Technologies', 
            icon: 'fas fa-tools',
            color: '#ec489a',
            skills: [
                { name: 'Git/GitHub', percent: 80, icon: 'fab fa-git-alt', color: '#F05032' },
                { name: 'VS Code', percent: 90, icon: 'fas fa-code', color: '#007ACC' },
                { name: 'Linux', percent: 70, icon: 'fab fa-linux', color: '#FCC624' },
                { name: 'SQL', percent: 75, icon: 'fas fa-database', color: '#4479A1' },
                { name: 'Figma', percent: 65, icon: 'fab fa-figma', color: '#F24E1E' }
            ]
        }
    ];

    const styles = {
        section: { 
            padding: '100px 5%', 
            background: 'green',
            position: 'relative'
        },
        title: { 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '1rem', 
            background: 'linear-gradient(135deg, #fff, #667eea)', 
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent' 
        },
        subtitle: {
            textAlign: 'center',
            color: '#888',
            marginBottom: '3rem',
            fontSize: '1.1rem'
        },
        container: { 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '2rem' 
        },
        category: { 
            background: 'rgba(26, 26, 58, 0.8)',
            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            padding: '2rem', 
            borderRadius: '20px',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            position: 'relative',
            overflow: 'hidden'
        },
        categoryHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1.5rem',
            borderBottom: '2px solid rgba(102, 126, 234, 0.3)',
            paddingBottom: '0.8rem'
        },
        categoryIcon: {
            fontSize: '2rem',
            transition: 'all 0.3s ease'
        },
        categoryTitle: { 
            color: '#fff', 
            fontSize: '1.5rem',
            fontWeight: 600
        },
        skillItem: {
            marginBottom: '1.2rem',
            animation: 'fadeInUp 0.5s ease forwards',
            opacity: 0
        },
        skillHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
        },
        skillNameContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        skillIcon: {
            fontSize: '1.1rem',
            width: '24px'
        },
        skillName: {
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#ddd'
        },
        skillPercent: {
            fontSize: '0.85rem',
            color: '#667eea',
            fontWeight: 600
        },
        progressBar: {
            width: '100%',
            height: '8px',
            background: 'rgba(42, 42, 74, 0.8)',
            borderRadius: '10px',
            overflow: 'hidden'
        },
        progressFill: {
            height: '100%',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '10px',
            transition: 'width 1.2s ease-out',
            position: 'relative',
            overflow: 'hidden'
        },
        progressGlow: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shine 1.5s infinite'
        }
    };

    // Add animation keyframes
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes shine {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .skill-category:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
                border-color: rgba(102, 126, 234, 0.5);
            }
            
            .skill-category:hover .category-icon {
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(styleSheet);
        
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <section id="skills" style={styles.section}>
            <h2 style={styles.title}>Technical Skills</h2>
            <p style={styles.subtitle}>
                <i className="fas fa-chart-line"></i> My technical proficiency and expertise
            </p>
            <div style={styles.container}>
                {skillCategories.map((category, catIndex) => (
                    <div 
                        key={catIndex} 
                        className="skill-category"
                        style={styles.category}
                    >
                        <div style={styles.categoryHeader}>
                            <i 
                                className={`${category.icon} category-icon`} 
                                style={{...styles.categoryIcon, color: category.color}}
                            ></i>
                            <h3 style={styles.categoryTitle}>{category.title}</h3>
                        </div>
                        {category.skills.map((skill, skillIndex) => (
                            <div 
                                key={skillIndex} 
                                style={{
                                    ...styles.skillItem,
                                    animationDelay: `${skillIndex * 0.1}s`
                                }}
                            >
                                <div style={styles.skillHeader}>
                                    <div style={styles.skillNameContainer}>
                                        <i 
                                            className={skill.icon} 
                                            style={{...styles.skillIcon, color: skill.color}}
                                        ></i>
                                        <span style={styles.skillName}>{skill.name}</span>
                                    </div>
                                    <span style={styles.skillPercent}>{skill.percent}%</span>
                                </div>
                                <div style={styles.progressBar}>
                                    <div 
                                        style={{ 
                                            ...styles.progressFill, 
                                            width: `${skill.percent}%`
                                        }}
                                    >
                                        <div style={styles.progressGlow}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;