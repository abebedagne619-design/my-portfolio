import React, { useState } from 'react';
import './components.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, title: 'E-Commerce Website', description: 'A fully responsive e-commerce platform with product listing, cart functionality, user authentication, and payment integration built with React and Node.js.', fullDescription: 'This e-commerce platform includes features like product search, filtering, shopping cart, wishlist, user profiles, order tracking, and admin dashboard.', image: 'https://via.placeholder.com/400x250?text=E-Commerce', tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'], category: 'web', github: '#', demo: '#', featured: true },
        { id: 2, title: 'Task Manager App', description: 'A productivity application for managing tasks, setting deadlines, tracking progress, and collaborating with team members.', fullDescription: 'Task manager app with drag-and-drop functionality, real-time updates, task categories, priority levels, due dates, comments, and file attachments.', image: 'https://via.placeholder.com/400x250?text=Task+Manager', tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'], category: 'app', github: '#', demo: '#', featured: true },
        { id: 3, title: 'Student Management System', description: 'A comprehensive system for managing student records, grades, attendance, and generating reports.', fullDescription: 'Complete student management solution with student enrollment, grade tracking, attendance monitoring, fee management, and report generation.', image: 'https://via.placeholder.com/400x250?text=Student+MS', tech: ['Python', 'Django', 'SQLite', 'Bootstrap', 'Chart.js'], category: 'web', github: '#', demo: '#', featured: false }
    ];

    const categories = [{ id: 'all', name: 'All Projects' }, { id: 'web', name: 'Web Development' }, { id: 'app', name: 'Mobile/App' }];
    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

    const openModal = (project) => { setSelectedProject(project); document.body.style.overflow = 'hidden'; };
    const closeModal = () => { setSelectedProject(null); document.body.style.overflow = 'auto'; };

    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-subtitle">Here are some of my recent works and personal projects</p>
            <div className="projects-filter-container">
                {categories.map(cat => (<button key={cat.id} className={`projects-filter-btn ${filter === cat.id ? 'projects-filter-btn-active' : ''}`} onClick={() => setFilter(cat.id)}>{cat.name}</button>))}
            </div>
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="projects-card" onClick={() => openModal(project)}>
                        {project.featured && <div className="projects-featured-badge"><i className="fas fa-star"></i> Featured</div>}
                        <img src={project.image} alt={project.title} className="projects-card-image" />
                        <div className="projects-card-content">
                            <h3 className="projects-card-title">{project.title}</h3>
                            <p className="projects-card-description">{project.description.substring(0, 100)}...</p>
                            <div className="projects-tech-stack">{project.tech.slice(0, 4).map((t, i) => <span key={i} className="projects-tech-tag">{t}</span>)}</div>
                            <div className="projects-links"><a href={project.github} className="projects-link" onClick={(e) => e.stopPropagation()} target="_blank"><i className="fab fa-github"></i> Code</a><a href={project.demo} className="projects-link" onClick={(e) => e.stopPropagation()} target="_blank"><i className="fas fa-external-link-alt"></i> Demo</a></div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="projects-modal-overlay" onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <div className="projects-modal" onClick={(e) => e.stopPropagation()} style={{ background: '#1a1a3a', borderRadius: '20px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }}>
                        <div className="projects-modal-close" onClick={closeModal} style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '2rem', cursor: 'pointer', color: '#fff', background: 'rgba(0,0,0,0.5)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-times"></i></div>
                        <img src={selectedProject.image} alt={selectedProject.title} className="projects-modal-image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <div className="projects-modal-content" style={{ padding: '2rem' }}>
                            <h2 className="projects-modal-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#667eea' }}>{selectedProject.title}</h2>
                            <div className="projects-tech-stack">{selectedProject.tech.map((t, i) => <span key={i} className="projects-tech-tag">{t}</span>)}</div>
                            <p className="projects-modal-description" style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '1.5rem' }}>{selectedProject.fullDescription || selectedProject.description}</p>
                            <div className="projects-links"><a href={selectedProject.github} className="projects-link" target="_blank"><i className="fab fa-github"></i> View Code</a><a href={selectedProject.demo} className="projects-link" target="_blank"><i className="fas fa-external-link-alt"></i> Live Demo</a></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;