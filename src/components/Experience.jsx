import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Developer Intern',
            company: 'Tech Company Ethiopia',
            period: '2024 - Present',
            description: 'Developing responsive web applications using React, collaborating with design team, and implementing UI/UX improvements.'
        },
        {
            title: 'Freelance Web Developer',
            company: 'Self-employed',
            period: '2023 - Present',
            description: 'Building websites for small businesses, providing maintenance and support, and customizing WordPress themes.'
        },
        {
            title: 'Teaching Assistant',
            company: 'University',
            period: '2023 - 2024',
            description: 'Assisting in Introduction to Programming course, helping students with debugging, and grading assignments.'
        }
    ];

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        container: { maxWidth: '800px', margin: '0 auto' },
        experienceCard: { background: '#1a1a3a', padding: '1.5rem', borderRadius: '15px', marginBottom: '1.5rem', transition: 'all 0.3s ease' },
        expTitle: { fontSize: '1.3rem', color: '#667eea' },
        company: { color: '#aaa', marginBottom: '0.5rem' },
        period: { color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' },
        description: { color: '#ccc', lineHeight: 1.6 }
    };

    return (
        <section id="experience" style={styles.section}>
            <h2 style={styles.title}>Work Experience</h2>
            <div style={styles.container}>
                {experiences.map((exp, index) => (
                    <div key={index} style={styles.experienceCard}>
                        <h3 style={styles.expTitle}>{exp.title}</h3>
                        <div style={styles.company}>{exp.company}</div>
                        <div style={styles.period}><i className="far fa-calendar-alt"></i> {exp.period}</div>
                        <p style={styles.description}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;