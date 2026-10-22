import React, { useState, useEffect } from 'react';
import './components.css';

const Home = () => {
    const [imageUrl, setImageUrl] = useState("/images/abex.jfif");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const [typedText, setTypedText] = useState('');
    const fullText = "3rd Year Computer Science Student";

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) setImageUrl(savedImage);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, [currentTime]);

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullText.length) { setTypedText(fullText.substring(0, i + 1)); i++; }
            else clearInterval(typing);
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
        setImageUrl("/images/abex.jfif");
        localStorage.removeItem('profileImage');
    };

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes blink { 0%,50%{opacity:1;} 51%,100%{opacity:0;} }
            @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
            @keyframes fadeInLeft { from{opacity:0;transform:translateX(-40px);} to{opacity:1;transform:translateX(0);} }
            @keyframes fadeInRight { from{opacity:0;transform:translateX(40px);} to{opacity:1;transform:translateX(0);} }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="hero-floating-shape"></div>
            <div className="hero-floating-shape2"></div>
            <div className="hero-content">
                <div className="hero-greeting-msg"><i className="fas fa-sun"></i> {greeting}! 👋</div>
                <h3 className="hero-hello">Hello, I'm</h3>
                <h1 className="hero-name">Abebe <span className="hero-highlight">Dagne Mengist</span></h1>
                <h3 className="hero-title">{typedText}<span className="hero-cursor">|</span></h3>
                <div className="hero-time-container"><i className="fas fa-clock"></i> Local Time: {currentTime.toLocaleTimeString()}</div>
                <p className="hero-description">Passionate computer science student with a drive for creating innovative digital solutions. Currently expanding my knowledge in software development, web technologies, and problem-solving.</p>
                <div className="hero-buttons"><a href="#contact" className="hero-btn-primary">Hire Me</a><a href="#projects" className="hero-btn-outline">View Work</a></div>
            </div>
            <div className="hero-image">
                <img src={imageUrl} alt="Profile" className="hero-profile-image" onClick={() => document.getElementById('profileInput').click()} />
                <input id="profileInput" type="file" accept="image/*" className="hero-file-input" onChange={handleImageUpload} />
                <div className="hero-button-group">
                    <button className="hero-upload-button" onClick={() => document.getElementById('profileInput').click()}><i className="fas fa-camera"></i> Change</button>
                    <button className="hero-upload-button" style={{ background: 'rgba(236, 72, 153, 0.2)', borderColor: '#ec489a', color: '#ec489a' }} onClick={resetImage}><i className="fas fa-undo"></i> Reset</button>
                </div>
            </div>
        </section>
    );
};

export default Home;