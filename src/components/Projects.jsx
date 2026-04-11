import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    const projects = [
        { 
            id: 1,
            title: 'E-Commerce Website', 
            description: 'A fully responsive e-commerce platform with product listing, cart functionality, user authentication, and payment integration built with React and Node.js.',
            fullDescription: 'This e-commerce platform includes features like product search, filtering, shopping cart, wishlist, user profiles, order tracking, and admin dashboard for managing products and orders.',
            image: 'https://via.placeholder.com/400x250?text=E-Commerce',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT'],
            category: 'web',
            github: 'https://github.com/abebedagne/ecommerce',
            demo: 'https://ecommerce-demo.com',
            featured: true
        },
        { 
            id: 2,
            title: 'Task Manager App', 
            description: 'A productivity application for managing tasks, setting deadlines, tracking progress, and collaborating with team members.',
            fullDescription: 'Task manager app with drag-and-drop functionality, real-time updates, task categories, priority levels, due dates, comments, file attachments, and team collaboration features.',
            image: 'https://via.placeholder.com/400x250?text=Task+Manager',
            tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
            category: 'app',
            github: 'https://github.com/abebedagne/taskmanager',
            demo: 'https://taskmanager-demo.com',
            featured: true
        },
        { 
            id: 3,
            title: 'Student Management System', 
            description: 'A comprehensive system for managing student records, grades, attendance, and generating reports.',
            fullDescription: 'Complete student management solution with features like student enrollment, grade tracking, attendance monitoring, fee management, report generation, and parent portal.',
            image: 'https://via.placeholder.com/400x250?text=Student+MS',
            tech: ['Python', 'Django', 'SQLite', 'Bootstrap', 'Chart.js'],
            category: 'web',
            github: 'https://github.com/abebedagne/studentms',
            demo: 'https://studentms-demo.com',
            featured: false
        },
        { 
            id: 4,
            title: 'Weather App', 
            description: 'Real-time weather application with 7-day forecast, interactive maps, and weather alerts.',
            fullDescription: 'Weather app using OpenWeatherMap API, displaying current conditions, hourly forecast, 7-day forecast, radar maps, UV index, air quality, and severe weather alerts.',
            image: 'https://via.placeholder.com/400x250?text=Weather+App',
            tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Chart.js'],
            category: 'app',
            github: 'https://github.com/abebedagne/weatherapp',
            demo: 'https://weatherapp-demo.com',
            featured: false
        },
        { 
            id: 5,
            title: 'Portfolio Website', 
            description: 'Modern and responsive portfolio website with dark/light mode, animations, and contact form.',
            fullDescription: 'Personal portfolio website showcasing skills, projects, and experience with features like theme toggle, project filtering, contact form, and smooth animations.',
            image: 'https://via.placeholder.com/400x250?text=Portfolio',
            tech: ['React', 'CSS3', 'EmailJS', 'Framer Motion'],
            category: 'web',
            github: 'https://github.com/abebedagne/portfolio',
            demo: 'https://abebedagne.com',
            featured: true
        },
        { 
            id: 6,
            title: 'Chat Application', 
            description: 'Real-time chat application with private messaging, group chats, and file sharing.',
            fullDescription: 'Chat app with WebSocket integration, user authentication, online status, typing indicators, message reactions, file sharing, and chat history.',
            image: 'https://via.placeholder.com/400x250?text=Chat+App',
            tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Tailwind'],
            category: 'app',
            github: 'https://github.com/abebedagne/chatapp',
            demo: 'https://chatapp-demo.com',
            featured: false
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'app', name: 'Mobile/App' }
    ];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    const featuredProjects = projects.filter(project => project.featured);

    const styles = {
        section: { 
            padding: '100px 5%', 
            background: '#0a0a2a',
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
        filterContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
        },
        filterBtn: {
            padding: '0.5rem 1.5rem',
            background: 'rgba(26, 26, 58, 0.8)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '50px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem'
        },
        filterBtnActive: {
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderColor: 'transparent'
        },
        featuredSection: {
            marginBottom: '4rem'
        },
        featuredTitle: {
            fontSize: '1.8rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#667eea'
        },
        grid: { 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '2rem' 
        },
        card: { 
            background: 'rgba(26, 26, 58, 0.8)',
            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px', 
            overflow: 'hidden', 
            transition: 'all 0.3s ease', 
            cursor: 'pointer',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            position: 'relative'
        },
        featuredBadge: {
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            padding: '0.3rem 0.8rem',
            borderRadius: '50px',
            fontSize: '0.7rem',
            fontWeight: 600,
            zIndex: 1
        },
        cardImage: { 
            height: '220px', 
            width: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
        },
        cardContent: { 
            padding: '1.5rem' 
        },
        cardTitle: {
            fontSize: '1.3rem',
            marginBottom: '0.5rem',
            color: '#fff'
        },
        cardDescription: {
            color: '#aaa',
            lineHeight: 1.6,
            marginBottom: '1rem'
        },
        techStack: { 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem', 
            margin: '1rem 0' 
        },
        techTag: { 
            background: 'rgba(102, 126, 234, 0.2)', 
            padding: '0.3rem 0.8rem', 
            borderRadius: '20px', 
            fontSize: '0.7rem',
            color: '#a855f7'
        },
        links: { 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '1rem' 
        },
        link: { 
            color: '#667eea', 
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
        },
        // Modal Styles
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        },
        modal: {
            background: '#1a1a3a',
            borderRadius: '20px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
        },
        modalImage: {
            width: '100%',
            height: '300px',
            objectFit: 'cover'
        },
        modalContent: {
            padding: '2rem'
        },
        modalClose: {
            position: 'absolute',
            top: '15px',
            right: '20px',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#fff',
            background: 'rgba(0,0,0,0.5)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
        },
        modalTitle: {
            fontSize: '1.8rem',
            marginBottom: '1rem',
            color: '#667eea'
        },
        modalDescription: {
            color: '#ccc',
            lineHeight: 1.8,
            marginBottom: '1.5rem'
        }
    };

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" style={styles.section}>
            <h2 style={styles.title}>Featured Projects</h2>
            <p style={styles.subtitle}>Here are some of my recent works and personal projects</p>

            {/* Filter Buttons */}
            <div style={styles.filterContainer}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        style={{
                            ...styles.filterBtn,
                            ...(filter === cat.id ? styles.filterBtnActive : {})
                        }}
                        onClick={() => setFilter(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div style={styles.grid}>
                {filteredProjects.map((project) => (
                    <div 
                        key={project.id} 
                        style={styles.card}
                        onClick={() => openModal(project)}
                    >
                        {project.featured && (
                            <div style={styles.featuredBadge}>
                                <i className="fas fa-star"></i> Featured
                            </div>
                        )}
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            style={styles.cardImage}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <div style={styles.cardContent}>
                            <h3 style={styles.cardTitle}>{project.title}</h3>
                            <p style={styles.cardDescription}>
                                {project.description.substring(0, 100)}...
                            </p>
                            <div style={styles.techStack}>
                                {project.tech.slice(0, 4).map((t, i) => (
                                    <span key={i} style={styles.techTag}>{t}</span>
                                ))}
                                {project.tech.length > 4 && (
                                    <span style={styles.techTag}>+{project.tech.length - 4}</span>
                                )}
                            </div>
                            <div style={styles.links}>
                                <a 
                                    href={project.github} 
                                    style={styles.link}
                                    onClick={(e) => e.stopPropagation()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"></i> Code
                                </a>
                                <a 
                                    href={project.demo} 
                                    style={styles.link}
                                    onClick={(e) => e.stopPropagation()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-external-link-alt"></i> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div style={styles.modalOverlay} onClick={closeModal}>
                    <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div style={styles.modalClose} onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </div>
                        <img src={selectedProject.image} alt={selectedProject.title} style={styles.modalImage} />
                        <div style={styles.modalContent}>
                            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                            <div style={styles.techStack}>
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} style={styles.techTag}>{t}</span>
                                ))}
                            </div>
                            <p style={styles.modalDescription}>
                                {selectedProject.fullDescription || selectedProject.description}
                            </p>
                            <div style={styles.links}>
                                <a href={selectedProject.github} style={styles.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> View Code
                                </a>
                                <a href={selectedProject.demo} style={styles.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;