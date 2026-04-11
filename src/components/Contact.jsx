import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mzdknrvj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            if (response.ok) {
                alert(`Thank you ${formData.name}! I will get back to you soon.`);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
        }

        setIsSubmitting(false);
    };

    const styles = {
        section: {
            padding: '100px 5%',
            background: '#18e444',
            position: 'relative'
        },
        title: {
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff, #667eea)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
        },
        subtitle: {
            textAlign: 'center',
            color: '#888',
            marginBottom: '3rem',
            fontSize: '1.1rem'
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem'
        },
        infoSection: {
            background: 'rgba(26, 26, 58, 0.8)',
            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(102, 126, 234, 0.2)'
        },
        infoTitle: {
            fontSize: '1.8rem',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
        },
        infoText: {
            color: '#aaa',
            lineHeight: 1.6,
            marginBottom: '2rem'
        },
        contactGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
        },
        contactCard: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            background: 'rgba(10, 10, 42, 0.5)',
            borderRadius: '15px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none'
        },
        contactIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem'
        },
        contactInfo: {
            flex: 1
        },
        contactLabel: {
            fontSize: '0.75rem',
            color: '#888',
            marginBottom: '0.2rem'
        },
        contactValue: {
            fontSize: '0.85rem',
            color: '#fff',
            fontWeight: 500
        },
        socialTitle: {
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: '#667eea'
        },
        socialGrid: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
        },
        socialLink: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            color: '#fff'
        },
        formSection: {
            background: 'rgba(26, 26, 58, 0.8)',
            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(102, 126, 234, 0.2)'
        },
        formTitle: {
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            color: '#fff'
        },
        formText: {
            color: '#888',
            marginBottom: '1.5rem',
            fontSize: '0.9rem'
        },
        inputGroup: {
            marginBottom: '1rem'
        },
        inputIcon: {
            position: 'relative'
        },
        input: {
            width: '100%',
            padding: '1rem 1rem 1rem 2.8rem',
            background: 'rgba(10, 10, 42, 0.8)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            outline: 'none'
        },
        inputFieldIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#667eea',
            fontSize: '1rem'
        },
        textarea: {
            width: '100%',
            padding: '1rem 1rem 1rem 2.8rem',
            background: 'rgba(10, 10, 42, 0.8)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.95rem',
            resize: 'vertical',
            transition: 'all 0.3s ease',
            outline: 'none',
            fontFamily: 'inherit'
        },
        button: {
            width: '100%',
            padding: '1rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            border: 'none',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
        },
        buttonDisabled: {
            opacity: 0.7,
            cursor: 'not-allowed'
        }
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
        { icon: 'fab fa-github', url: 'https://github.com/abebedagne', color: '#333', name: 'GitHub' },
        { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/abebedagne', color: '#0077b5', name: 'LinkedIn' },
        { icon: 'fab fa-twitter', url: 'https://twitter.com/abebedagne', color: '#1da1f2', name: 'Twitter' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com/abebedagne', color: '#e4405f', name: 'Instagram' },
        { icon: 'fab fa-telegram', url: 'https://t.me/abebedagne', color: '#26a5e4', name: 'Telegram' },
        { icon: 'fab fa-facebook-f', url: 'https://facebook.com/abebedagne', color: '#1877f2', name: 'Facebook' }
    ];

    const [focusStates, setFocusStates] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });

    const handleFocus = (field) => {
        setFocusStates({ ...focusStates, [field]: true });
    };

    const handleBlur = (field) => {
        setFocusStates({ ...focusStates, [field]: false });
    };

    return (
        <section id="contact" style={styles.section}>
            <h2 style={styles.title}>Get In Touch</h2>
            <p style={styles.subtitle}>
                <i className="fas fa-paper-plane"></i> Let's work together! Feel free to reach out
            </p>
            <div style={styles.container}>
                <div style={styles.infoSection}>
                    <h3 style={styles.infoTitle}>Let's Connect!</h3>
                    <p style={styles.infoText}>
                        I'm always excited to collaborate on projects, discuss opportunities,
                        or just have a chat about technology. Feel free to reach out through any of these channels.
                    </p>

                    <div style={styles.contactGrid}>
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                style={styles.contactCard}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <div style={{ ...styles.contactIcon, background: `${item.color}20`, color: item.color }}>
                                    <i className={item.icon}></i>
                                </div>
                                <div style={styles.contactInfo}>
                                    <div style={styles.contactLabel}>{item.label}</div>
                                    <div style={styles.contactValue}>{item.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div>
                        <h4 style={styles.socialTitle}>
                            <i className="fas fa-share-alt"></i> Connect on Social Media
                        </h4>
                        <div style={styles.socialGrid}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    style={styles.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.background = social.color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.background = 'rgba(26, 26, 58, 0.8)';
                                    }}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={styles.formSection}>
                    <h3 style={styles.formTitle}>Send Me a Message</h3>
                    <p style={styles.formText}>Fill out the form below and I'll get back to you as soon as possible.</p>

                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <div style={styles.inputIcon}>
                                <i className="fas fa-user" style={styles.inputFieldIcon}></i>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={() => handleBlur('name')}
                                    required
                                    style={{
                                        ...styles.input,
                                        ...(focusStates.name ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)' } : {})
                                    }}
                                />
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <div style={styles.inputIcon}>
                                <i className="fas fa-envelope" style={styles.inputFieldIcon}></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={() => handleBlur('email')}
                                    required
                                    style={{
                                        ...styles.input,
                                        ...(focusStates.email ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)' } : {})
                                    }}
                                />
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <div style={styles.inputIcon}>
                                <i className="fas fa-tag" style={styles.inputFieldIcon}></i>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('subject')}
                                    onBlur={() => handleBlur('subject')}
                                    style={{
                                        ...styles.input,
                                        ...(focusStates.subject ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)' } : {})
                                    }}
                                />
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <div style={styles.inputIcon}>
                                <i className="fas fa-comment" style={styles.inputFieldIcon}></i>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('message')}
                                    onBlur={() => handleBlur('message')}
                                    required
                                    style={{
                                        ...styles.textarea,
                                        ...(focusStates.message ? { borderColor: '#667eea', boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)' } : {})
                                    }}
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={{
                                ...styles.button,
                                ...(isSubmitting ? styles.buttonDisabled : {})
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Sending...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-paper-plane"></i> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;