import React, { useState } from 'react';
import './components.css';

const Testimonials = () => {
    const testimonials = [
        { name: 'Sarah Johnson', role: 'Project Manager', text: 'Abebe is an exceptional developer who always delivers high-quality work on time. His attention to detail and problem-solving skills are impressive.', image: 'https://via.placeholder.com/80x80?text=SJ' },
        { name: 'Michael Tekle', role: 'CTO at TechCorp', text: 'Working with Abebe was a great experience. He is proactive, knowledgeable, and brings creative solutions to complex problems.', image: 'https://via.placeholder.com/80x80?text=MT' },
        { name: 'Eden Assefa', role: 'Fellow Developer', text: 'Abebe is a great team player. He helped me understand complex concepts and always shares his knowledge generously.', image: 'https://via.placeholder.com/80x80?text=EA' }
    ];

    const [current, setCurrent] = useState(0);

    return (
        <section id="testimonials" className="testimonials-section">
            <h2 className="testimonials-title">What People Say</h2>
            <div className="testimonials-container">
                <div className="testimonials-card">
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="testimonials-image" />
                    <p className="testimonials-text">"{testimonials[current].text}"</p>
                    <h4 className="testimonials-name">{testimonials[current].name}</h4>
                    <div className="testimonials-role">{testimonials[current].role}</div>
                </div>
                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (<div key={index} className={`testimonials-dot ${current === index ? 'testimonials-dot-active' : ''}`} onClick={() => setCurrent(index)}></div>))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;