import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import LanguageSkills from './components/LanguageSkills';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPos = window.scrollY + 200;
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    const id = section.getAttribute('id');
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
            
            // Show back to top button after scrolling 500px
            setShowBackToTop(window.scrollY > 500);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-mode');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Services />
            <LanguageSkills />
            <Testimonials />
            <Blog />
            <Contact />
            <div className="theme-toggle" onClick={toggleTheme}>
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
}

export default App;