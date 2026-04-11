import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, target) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const downloadCV = () => {
        // Create a temporary link for CV download
        const cvUrl = '/cv/Abebe_Dagne_CV.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Abebe_Dagne_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // If CV file doesn't exist yet, show alert
        // alert("CV download will start! Please add your CV file to public/cv/ folder");
    };

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            width: '100%',
            padding: scrolled ? '0.8rem 5%' : '1.2rem 5%',
            background: scrolled ? 'rgba(10, 10, 42, 0.98)' : 'rgba(10, 10, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            borderBottom: scrolled ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid rgba(102, 126, 234, 0.2)',
            transition: 'all 0.3s ease'
        },
        logo: {
            fontSize: '1.6rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        logoIcon: {
            fontSize: '1.6rem',
            color: '#667eea'
        },
        navLinks: {
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            position: 'relative'
        },
        hamburger: {
            display: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#fff',
            transition: 'all 0.3s ease'
        },
        cvButton: {
            padding: '0.5rem 1.2rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            border: 'none',
            borderRadius: '50px',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        closeIcon: {
            fontSize: '1.2rem'
        }
    };

    // Add hover effect for nav links
    const navLinkHover = {
        color: '#667eea'
    };

    // Responsive styles
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        styles.navLinks.display = isOpen ? 'flex' : 'none';
        styles.hamburger.display = 'block';
        if (isOpen) {
            styles.navLinks.position = 'absolute';
            styles.navLinks.top = '70px';
            styles.navLinks.left = 0;
            styles.navLinks.width = '100%';
            styles.navLinks.flexDirection = 'column';
            styles.navLinks.alignItems = 'center';
            styles.navLinks.background = 'rgba(10, 10, 42, 0.98)';
            styles.navLinks.backdropFilter = 'blur(10px)';
            styles.navLinks.padding = '2rem';
            styles.navLinks.gap = '1.5rem';
            styles.navLinks.borderBottom = '1px solid #667eea';
            styles.navLinks.zIndex = 999;
        }
    }

    return (
        <nav style={styles.nav}>
            <div style={styles.logo} onClick={(e) => handleClick(e, '#home')}>
                <i className="fas fa-laptop-code" style={styles.logoIcon}></i>
                <span>Abebe Dagne</span>
            </div>
            
            <div style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} style={isOpen ? styles.closeIcon : {}}></i>
            </div>
            
            <ul style={styles.navLinks} className="nav-links">
                <li>
                    <a 
                        href="#home" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#home')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#about" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#about')}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="#skills" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#skills')}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a 
                        href="#experience" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#experience')}
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a 
                        href="#education" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#education')}
                    >
                        Education
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#projects')}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a 
                        href="#services" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#services')}
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        style={styles.navLink}
                        onMouseEnter={(e) => e.target.style.color = navLinkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
                        onClick={(e) => handleClick(e, '#contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            
            <button style={styles.cvButton} onClick={downloadCV}>
                <i className="fas fa-download"></i>
                Download CV
            </button>
        </nav>
    );
};

export default Navbar;