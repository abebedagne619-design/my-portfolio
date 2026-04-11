import React, { useState } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Project Manager',
            text: 'Abebe is an exceptional developer who always delivers high-quality work on time. His attention to detail and problem-solving skills are impressive.',
            image: 'https://via.placeholder.com/80x80?text=SJ'
        },
        {
            name: 'Michael Tekle',
            role: 'CTO at TechCorp',
            text: 'Working with Abebe was a great experience. He is proactive, knowledgeable, and brings creative solutions to complex problems.',
            image: 'https://via.placeholder.com/80x80?text=MT'
        },
        {
            name: 'Eden Assefa',
            role: 'Fellow Developer',
            text: 'Abebe is a great team player. He helped me understand complex concepts and always shares his knowledge generously.',
            image: 'https://via.placeholder.com/80x80?text=EA'
        }
    ];

    const [current, setCurrent] = useState(0);

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        container: { maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
        card: { background: '#1a1a3a', padding: '2rem', borderRadius: '20px' },
        image: { width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' },
        text: { fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem', color: '#ddd' },
        name: { fontSize: '1.2rem', fontWeight: 600, color: '#667eea' },
        role: { color: '#888', marginBottom: '1rem' },
        dots: { display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' },
        dot: { width: '10px', height: '10px', borderRadius: '50%', background: '#2a2a4a', cursor: 'pointer', transition: 'all 0.3s ease' },
        dotActive: { background: '#667eea', width: '25px', borderRadius: '10px' }
    };

    return (
        <section id="testimonials" style={styles.section}>
            <h2 style={styles.title}>What People Say</h2>
            <div style={styles.container}>
                <div style={styles.card}>
                    <img src={testimonials[current].image} alt={testimonials[current].name} style={styles.image} />
                    <p style={styles.text}>"{testimonials[current].text}"</p>
                    <h4 style={styles.name}>{testimonials[current].name}</h4>
                    <div style={styles.role}>{testimonials[current].role}</div>
                </div>
                <div style={styles.dots}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            style={{ ...styles.dot, ...(current === index ? styles.dotActive : {}) }}
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;