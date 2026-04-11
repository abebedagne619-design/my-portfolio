import React from 'react';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Injibara University',
            period: '2022 - Present',
            gpa: '3.7/4.0',
            courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development']
        },
        {
            degree: 'Full Stack Web Development Certificate',
            institution: 'Online Course',
            period: '2024',
            description: 'Completed comprehensive training in MERN stack development'
        }
    ];

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        container: { maxWidth: '800px', margin: '0 auto' },
        educationCard: { background: '#1a1a3a', padding: '1.5rem', borderRadius: '15px', marginBottom: '1.5rem' },
        degree: { fontSize: '1.3rem', color: '#667eea' },
        institution: { color: '#aaa' },
        period: { color: '#888', fontSize: '0.85rem', margin: '0.5rem 0' },
        gpa: { color: '#ccc', marginBottom: '0.5rem' },
        courses: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' },
        courseTag: { background: 'rgba(102, 126, 234, 0.2)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem' }
    };

    return (
        <section id="education" style={styles.section}>
            <h2 style={styles.title}>Education</h2>
            <div style={styles.container}>
                {education.map((edu, index) => (
                    <div key={index} style={styles.educationCard}>
                        <h3 style={styles.degree}>{edu.degree}</h3>
                        <div style={styles.institution}>{edu.institution}</div>
                        <div style={styles.period}><i className="far fa-calendar-alt"></i> {edu.period}</div>
                        {edu.gpa && <div style={styles.gpa}><i className="fas fa-star"></i> GPA: {edu.gpa}</div>}
                        {edu.courses && (
                            <div style={styles.courses}>
                                {edu.courses.map((course, i) => (
                                    <span key={i} style={styles.courseTag}>{course}</span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;