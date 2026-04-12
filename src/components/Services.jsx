import React from 'react';
import './components.css';

const Services = () => {
    const services = [
        { icon: 'fa-laptop-code', title: 'Web Development', description: 'Building responsive and modern websites using HTML, CSS, JavaScript, and React framework.' },
        { icon: 'fa-mobile-alt', title: 'Responsive Design', description: 'Creating websites that work seamlessly across all devices - desktop, tablet, and mobile.' },
        { icon: 'fa-database', title: 'Database Management', description: 'Designing and managing databases using SQL, MongoDB, and Firebase.' },
        { icon: 'fa-chalkboard-teacher', title: 'Tutoring', description: 'Providing tutoring services for programming fundamentals, web development, and computer science concepts.' }
    ];

    return (
        <section id="services" className="services-section">
            <h2 className="services-title">What I Offer</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="services-card">
                        <i className={`fas ${service.icon} services-icon`}></i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;