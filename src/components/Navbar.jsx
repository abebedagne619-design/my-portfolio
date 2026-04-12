import React, { useState, useEffect } from 'react';
import './components.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, target) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) { element.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }
    };

    const downloadCV = () => {
        const cvUrl = '/cv/Abebe_Dagne_CV.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Abebe_Dagne_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navbarStyle = {
        padding: scrolled ? '0.8rem 5%' : '1.2rem 5%',
        background: scrolled ? 'rgba(10, 10, 42, 0.98)' : 'rgba(10, 10, 42, 0.95)',
        borderBottom: scrolled ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid rgba(102, 126, 234, 0.2)'
    };

    return (
        <nav className="navbar" style={navbarStyle}>
            <div className="navbar-logo" onClick={(e) => handleClick(e, '#home')}>
                <i className="fas fa-laptop-code navbar-logo-icon"></i>
                <span>Abebe Dagne</span>
            </div>
            <div className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
            <ul className="navbar-links" style={{ display: window.innerWidth <= 768 ? (isOpen ? 'flex' : 'none') : 'flex' }}>
                <li><a href="#home" className="navbar-link" onClick={(e) => handleClick(e, '#home')}>Home</a></li>
                <li><a href="#about" className="navbar-link" onClick={(e) => handleClick(e, '#about')}>About</a></li>
                <li><a href="#skills" className="navbar-link" onClick={(e) => handleClick(e, '#skills')}>Skills</a></li>
                <li><a href="#experience" className="navbar-link" onClick={(e) => handleClick(e, '#experience')}>Experience</a></li>
                <li><a href="#education" className="navbar-link" onClick={(e) => handleClick(e, '#education')}>Education</a></li>
                <li><a href="#projects" className="navbar-link" onClick={(e) => handleClick(e, '#projects')}>Projects</a></li>
                <li><a href="#services" className="navbar-link" onClick={(e) => handleClick(e, '#services')}>Services</a></li>
                <li><a href="#contact" className="navbar-link" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
            </ul>
            <button className="navbar-cv-button" onClick={downloadCV}><i className="fas fa-download"></i> Download CV</button>
        </nav>
    );
};

export default Navbar;