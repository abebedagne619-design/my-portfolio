import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [imageUrl, setImageUrl] = useState("/images/abex2.jfif");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const [typedText, setTypedText] = useState('');
    const fullText = "3rd Year Computer Science Student";

    // Load saved image from localStorage
    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setImageUrl(savedImage);
        }
    }, []);

    // Live Clock and Greeting
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    // Update greeting based on time of day
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, [currentTime]);

    // Typing Animation
    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
        return () => clearInterval(typing);
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setImageUrl(newImageUrl);
            localStorage.setItem('profileImage', newImageUrl);
        }
    };

    const resetImage = () => {
        setImageUrl("/images/abex2.jfif");
        localStorage.removeItem('profileImage');
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
        greetingMsg: { 
            fontSize: '1.2rem', 
            color: '#a855f7', 
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        hello: { fontSize: '1.5rem', color: '#667eea', marginBottom: '0.5rem' },
        timeContainer: { 
            fontSize: '0.9rem', 
            color: '#667eea', 
            marginTop: '0.5rem', 
            marginBottom: '1rem',
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
        },
        name: { fontSize: '3.5rem', margin: '0.5rem 0', lineHeight: 1.2 },
        highlight: {
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
        },
        title: { 
            fontSize: '1.3rem', 
            color: '#aaa',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            flexWrap: 'wrap'
        },
        cursor: {
            animation: 'blink 1s infinite',
            fontWeight: 'bold'
        },
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
            transition: 'all 0.3s ease',
            marginRight: '0.5rem'
        },
        fileInput: {
            display: 'none'
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1rem'
        }
    };

    // Add blink animation to the document
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <section id="home" style={styles.section}>
            <div style={styles.content}>
                <div style={styles.greetingMsg}>
                    <i className="fas fa-sun"></i> {greeting}! 👋
                </div>
                <h3 style={styles.hello}>Hello, I'm</h3>
                <h1 style={styles.name}>Abebe <span style={styles.highlight}>Dagne Mengist</span></h1>
                <h3 style={styles.title}>
                    {typedText}
                    <span style={styles.cursor}>|</span>
                </h3>
                <div style={styles.timeContainer}>
                    <i className="fas fa-clock"></i> Local Time: {currentTime.toLocaleTimeString()}
                </div>
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
                <div style={styles.buttonGroup}>
                    <button 
                        style={styles.uploadButton}
                        onClick={() => document.getElementById('profileInput').click()}
                    >
                        <i className="fas fa-camera"></i> Change
                    </button>
                    <button 
                        style={{...styles.uploadButton, background: 'rgba(236, 72, 153, 0.2)', borderColor: '#ec489a', color: '#ec489a'}}
                        onClick={resetImage}
                    >
                        <i className="fas fa-undo"></i> Reset
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;