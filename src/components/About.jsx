import React, { useEffect } from 'react';

const About = () => {
    // Add animation styles
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes countUp {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    const styles = {
        section: { 
            padding: '100px 5%', 
            background: '#1e2a0a',
            position: 'relative',
            overflow: 'hidden'
        },
        title: { 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            background: 'linear-gradient(135deg, #ffffff, #667eea, #a855f7, #ec489a)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text', 
            color: 'transparent',
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            animation: 'gradientShift 3s ease infinite'
        },
        container: { 
            display: 'flex', 
            gap: '3rem', 
            flexWrap: 'wrap' 
        },
        text: { 
            flex: 1, 
            color: '#ccc', 
            lineHeight: 1.8,
            animation: 'fadeInUp 0.8s ease forwards'
        },
        stats: { 
            flex: 1, 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '1.5rem' 
        },
        statCard: { 
            background: 'rgba(26, 26, 58, 0.8)',
            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem', 
            borderRadius: '15px', 
            textAlign: 'center', 
            transition: 'all 0.3s ease',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            cursor: 'pointer',
            animation: 'fadeInUp 0.6s ease forwards',
            opacity: 0
        },
        statIcon: { 
            fontSize: '2.5rem', 
            color: '#667eea', 
            marginBottom: '0.5rem',
            transition: 'all 0.3s ease'
        },
        statNumber: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '0.5rem'
        },
        statLabel: {
            color: '#aaa',
            fontSize: '0.9rem'
        }
    };

    // Staggered animation for stat cards
    const statCardStyles = [
        { ...styles.statCard, animationDelay: '0.2s' },
        { ...styles.statCard, animationDelay: '0.4s' },
        { ...styles.statCard, animationDelay: '0.6s' },
        { ...styles.statCard, animationDelay: '0.8s' }
    ];

    // Add gradient shift animation to document
    useEffect(() => {
        const gradientStyle = document.createElement("style");
        gradientStyle.textContent = `
            @keyframes gradientShift {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
        `;
        document.head.appendChild(gradientStyle);
        return () => document.head.removeChild(gradientStyle);
    }, []);

    return (
        <section id="about" style={styles.section}>
            <h2 style={styles.title}>About Me</h2>
            <div style={styles.container}>
                <div style={styles.text}>
                    <p>I'm Abebe Dagne Mengist, a dedicated 3rd-year Computer Science student passionate about technology and its potential to solve real-world problems. My academic journey has equipped me with strong foundations in programming, algorithms, and software development.</p>
                    <p>I'm particularly interested in web development, mobile applications, and emerging technologies. I believe in continuous learning and regularly work on personal projects to enhance my skills and stay updated with industry trends.</p>
                    <p>As a student, I'm actively seeking opportunities to apply my knowledge in practical settings, collaborate with experienced professionals, and contribute to meaningful projects that make a difference.</p>
                </div>
                <div style={styles.stats}>
                    <div 
                        style={statCardStyles[0]}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                    >
                        <i className="fas fa-code" style={styles.statIcon}></i>
                        <h3 style={styles.statNumber}>15+</h3>
                        <p style={styles.statLabel}>Projects Completed</p>
                    </div>
                    <div 
                        style={statCardStyles[1]}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                    >
                        <i className="fas fa-book" style={styles.statIcon}></i>
                        <h3 style={styles.statNumber}>3rd Year</h3>
                        <p style={styles.statLabel}>Computer Science</p>
                    </div>
                    <div 
                        style={statCardStyles[2]}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                    >
                        <i className="fas fa-trophy" style={styles.statIcon}></i>
                        <h3 style={styles.statNumber}>5+</h3>
                        <p style={styles.statLabel}>Certifications</p>
                    </div>
                    <div 
                        style={statCardStyles[3]}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.borderColor = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                        }}
                    >
                        <i className="fas fa-clock" style={styles.statIcon}></i>
                        <h3 style={styles.statNumber}>500+</h3>
                        <p style={styles.statLabel}>Coding Hours</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;