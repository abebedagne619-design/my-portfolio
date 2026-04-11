import React, { useState } from 'react';

const Hero = () => {
    const [imageUrl, setImageUrl] = useState("/images/abex2.jfif"); 

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setImageUrl(newImageUrl);
        }
    };

    const styles = {
        section: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            flexWrap: 'wrap',
            minHeight: '100vh',
            padding: '100px 5%',
            background: '#0a0a2a'
        },
        content: { flex: 1 },
        greeting: { fontSize: '1.5rem', color: '#667eea' },
        name: { fontSize: '3.5rem', margin: '1rem 0', lineHeight: 1.2 },
        highlight: {
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
        },
        title: { fontSize: '1.3rem', color: '#aaa' },
        description: { color: '#888', margin: '1.5rem 0', lineHeight: 1.6 },
        buttons: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
        btnPrimary: {
            padding: '0.8rem 2rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            display: 'inline-block'
        },
        btnOutline: {
            padding: '0.8rem 2rem',
            border: '2px solid #667eea',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            display: 'inline-block'
        },
        image: { flex: 1, textAlign: 'center' },
        profileImage: {
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '5px solid #667eea',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        uploadButton: {
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            background: 'rgba(102, 126, 234, 0.2)',
            border: '1px solid #667eea',
            borderRadius: '50px',
            color: '#667eea',
            cursor: 'pointer',
            fontSize: '0.8rem',
            transition: 'all 0.3s ease'
        },
        fileInput: {
            display: 'none'
        }
    };

    return (
        <section id="home" style={styles.section}>
            <div style={styles.content}>
                <h3 style={styles.greeting}>Hello, I'm</h3>
                <h1 style={styles.name}>Abebe <span style={styles.highlight}>Dagne Mengist</span></h1>
                <h3 style={styles.title}>3rd Year Computer Science Student</h3>
                <p style={styles.description}>
                    Passionate computer science student with a drive for creating innovative digital solutions. 
                    Currently expanding my knowledge in software development, web technologies, and problem-solving.
                </p>
                <div style={styles.buttons}>
                    <a href="#contact" style={styles.btnPrimary}>Hire Me</a>
                    <a href="#projects" style={styles.btnOutline}>View Work</a>
                </div>
            </div>
            <div style={styles.image}>
                <img 
                    src={imageUrl}
                    alt="Profile" 
                    style={styles.profileImage}
                    onClick={() => document.getElementById('profileInput').click()}
                />
                <input
                    id="profileInput"
                    type="file"
                    accept="image/*"
                    style={styles.fileInput}
                    onChange={handleImageUpload}
                />
                <div>
                    <button 
                        style={styles.uploadButton}
                        onClick={() => document.getElementById('profileInput').click()}
                    >
                        <i className="fas fa-camera"></i> Change Profile Picture
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;