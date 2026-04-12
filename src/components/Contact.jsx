import React, { useState } from 'react';
import './components.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
        setIsSubmitting(true);
        try {
            const response = await fetch('https://formspree.io/f/mzdknrvj', {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject, message: formData.message })
            });
            if (response.ok) {
                alert(`Thank you ${formData.name}! I will get back to you soon.`);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
            } else { alert('Something went wrong. Please try again.'); }
        } catch (error) { alert('Error sending message. Please try again.'); }
        setIsSubmitting(false);
    };

    const contactInfo = [
        { icon: 'fas fa-envelope', label: 'Email', value: 'abebedagne619@gmail.com', color: '#ea4335', link: 'mailto:abebedagne619@gmail.com' },
        { icon: 'fas fa-phone-alt', label: 'Phone', value: '+251 925 518 992', color: '#34a853', link: 'tel:+251925518992' },
        { icon: 'fab fa-telegram', label: 'Telegram', value: '@abebedagne', color: '#26a5e4', link: 'https://t.me/abebedagne' },
        { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/abebedagne', color: '#333', link: 'https://github.com/abebedagne' },
        { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/abebedagne', color: '#0077b5', link: 'https://linkedin.com/in/abebedagne' },
        { icon: 'fab fa-twitter', label: 'Twitter', value: '@abebedagne', color: '#1da1f2', link: 'https://twitter.com/abebedagne' }
    ];

    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/abebedagne', color: '#333' },
        { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/abebedagne', color: '#0077b5' },
        { icon: 'fab fa-twitter', url: 'https://twitter.com/abebedagne', color: '#1da1f2' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com/abebedagne', color: '#e4405f' },
        { icon: 'fab fa-telegram', url: 'https://t.me/abebedagne', color: '#26a5e4' },
        { icon: 'fab fa-facebook-f', url: 'https://facebook.com/abebedagne', color: '#1877f2' }
    ];

    const [focusStates, setFocusStates] = useState({ name: false, email: false, subject: false, message: false });
    const handleFocus = (field) => setFocusStates({ ...focusStates, [field]: true });
    const handleBlur = (field) => setFocusStates({ ...focusStates, [field]: false });

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle"><i className="fas fa-paper-plane"></i> Let's work together! Feel free to reach out</p>
            <div className="contact-container">
                <div className="contact-info-section">
                    <h3 className="contact-info-title">Let's Connect!</h3>
                    <p className="contact-info-text">I'm always excited to collaborate on projects, discuss opportunities, or just have a chat about technology. Feel free to reach out through any of these channels.</p>
                    <div className="contact-grid">
                        {contactInfo.map((item, index) => (
                            <a key={index} href={item.link} className="contact-card" target="_blank" rel="noopener noreferrer">
                                <div className="contact-icon" style={{ background: `${item.color}20`, color: item.color }}><i className={item.icon}></i></div>
                                <div className="contact-info"><div className="contact-label">{item.label}</div><div className="contact-value">{item.value}</div></div>
                            </a>
                        ))}
                    </div>
                    <div><h4 className="contact-social-title"><i className="fas fa-share-alt"></i> Connect on Social Media</h4>
                        <div className="contact-social-grid">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.url} className="contact-social-link" target="_blank" rel="noopener noreferrer"><i className={social.icon}></i></a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="contact-form-section">
                    <h3 className="contact-form-title">Send Me a Message</h3>
                    <p className="contact-form-text">Fill out the form below and I'll get back to you as soon as possible.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="contact-input-group">
                            <div className="contact-input-icon">
                                <i className="fas fa-user"></i>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} onFocus={() => handleFocus('name')} onBlur={() => handleBlur('name')} required className="contact-input" style={focusStates.name ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102,126,234,0.2)' } : {}} />
                            </div>
                            {errors.name && <div className="contact-error">{errors.name}</div>}
                        </div>
                        <div className="contact-input-group">
                            <div className="contact-input-icon">
                                <i className="fas fa-envelope"></i>
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} required className="contact-input" style={focusStates.email ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102,126,234,0.2)' } : {}} />
                            </div>
                            {errors.email && <div className="contact-error">{errors.email}</div>}
                        </div>
                        <div className="contact-input-group">
                            <div className="contact-input-icon">
                                <i className="fas fa-tag"></i>
                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} onFocus={() => handleFocus('subject')} onBlur={() => handleBlur('subject')} className="contact-input" style={focusStates.subject ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102,126,234,0.2)' } : {}} />
                            </div>
                        </div>
                        <div className="contact-input-group">
                            <div className="contact-input-icon">
                                <i className="fas fa-comment"></i>
                                <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')} required className="contact-textarea" style={focusStates.message ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102,126,234,0.2)' } : {}}></textarea>
                            </div>
                            {errors.message && <div className="contact-error">{errors.message}</div>}
                        </div>
                        <button type="submit" className="contact-button" disabled={isSubmitting}>
                            {isSubmitting ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;