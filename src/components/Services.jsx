import React from 'react';

const Services = () => {
    const services = [
        { icon: 'fa-laptop-code', title: 'Web Development', description: 'Building responsive and modern websites using HTML, CSS, JavaScript, and React framework.' },
        { icon: 'fa-mobile-alt', title: 'Responsive Design', description: 'Creating websites that work seamlessly across all devices - desktop, tablet, and mobile.' },
        { icon: 'fa-database', title: 'Database Management', description: 'Designing and managing databases using SQL, MongoDB, and Firebase.' },
        { icon: 'fa-chalkboard-teacher', title: 'Tutoring', description: 'Providing tutoring services for programming fundamentals, web development, and computer science concepts.' }
    ];

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' },
        card: { background: '#1a1a3a', padding: '2rem', borderRadius: '20px', textAlign: 'center', transition: 'all 0.3s ease' },
        icon: { fontSize: '3rem', color: '#667eea', marginBottom: '1rem' }
    };

    return (
        <section id="services" style={styles.section}>
            <h2 style={styles.title}>What I Offer</h2>
            <div style={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} style={styles.card}>
                        <i className={`fas ${service.icon}`} style={styles.icon}></i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;