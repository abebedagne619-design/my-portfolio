import React from 'react';

const About = () => {
    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        container: { display: 'flex', gap: '3rem', flexWrap: 'wrap' },
        text: { flex: 1, color: '#aaa', lineHeight: 1.8 },
        stats: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' },
        statCard: { background: '#1a1a3a', padding: '1.5rem', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' },
        statIcon: { fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }
    };

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
                    <div style={styles.statCard}>
                        <i className="fas fa-code" style={styles.statIcon}></i>
                        <h3>15+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div style={styles.statCard}>
                        <i className="fas fa-book" style={styles.statIcon}></i>
                        <h3>3rd Year</h3>
                        <p>Computer Science</p>
                    </div>
                    <div style={styles.statCard}>
                        <i className="fas fa-trophy" style={styles.statIcon}></i>
                        <h3>5+</h3>
                        <p>Certifications</p>
                    </div>
                    <div style={styles.statCard}>
                        <i className="fas fa-clock" style={styles.statIcon}></i>
                        <h3>500+</h3>
                        <p>Coding Hours</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;