import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // EmailJS integration can be added here
        setIsSent(true);
        alert(`Thank you ${formData.name}! I will get back to you soon.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 3000);
    };

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        container: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' },
        info: { color: '#aaa' },
        details: { listStyle: 'none', marginTop: '1.5rem' },
        iconSmall: { width: '40px', height: '40px', background: '#1a1a3a', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', color: '#667eea' },
        social: { display: 'flex', gap: '1rem', marginTop: '2rem' },
        socialLink: { width: '45px', height: '45px', background: '#1a1a3a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease' },
        form: { background: '#1a1a3a', padding: '2rem', borderRadius: '20px' },
        input: { width: '100%', padding: '1rem', marginBottom: '1rem', background: '#0a0a2a', border: 'none', borderRadius: '10px', color: '#fff' },
        textarea: { width: '100%', padding: '1rem', marginBottom: '1rem', background: '#0a0a2a', border: 'none', borderRadius: '10px', color: '#fff', resize: 'vertical' },
        button: { width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none', borderRadius: '50px', color: '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }
    };

    return (
        <section id="contact" style={styles.section}>
            <h2 style={styles.title}>Get In Touch</h2>
            <div style={styles.container}>
                <div style={styles.info}>
                    <h3>Let's Connect!</h3>
                    <p>I'm always excited to collaborate on projects, discuss opportunities, or just have a chat about technology. Feel free to reach out!</p>
                    <ul style={styles.details}>
                        <li><i className="fas fa-envelope" style={styles.iconSmall}></i> abebedagne619@gmail.com</li>
                        <li><i className="fas fa-phone" style={styles.iconSmall}></i> +251 925 518 992</li>
                        <li><i className="fas fa-map-marker-alt" style={styles.iconSmall}></i> Addis Ababa, Ethiopia</li>
                    </ul>
                    <div style={styles.social}>
                        <a href="https://github.com/abebedagne" style={styles.socialLink}><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/abebedagne" style={styles.socialLink}><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/abebedagne" style={styles.socialLink}><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/abebedagne" style={styles.socialLink}><i className="fab fa-instagram"></i></a>
                        <a href="https://t.me/abebedagne" style={styles.socialLink}><i className="fab fa-telegram"></i></a>
                    </div>
                </div>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={styles.input} />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={styles.input} />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} style={styles.input} />
                    <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={styles.textarea}></textarea>
                    <button type="submit" style={styles.button}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;