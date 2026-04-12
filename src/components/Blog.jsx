import React from 'react';
import './components.css';

const Blog = () => {
    const posts = [
        { title: 'Getting Started with React', excerpt: 'Learn the basics of React and how to build your first component...', date: 'March 15, 2024', readTime: '5 min read' },
        { title: 'Understanding JavaScript Closures', excerpt: 'A deep dive into closures and how they work in JavaScript...', date: 'March 10, 2024', readTime: '7 min read' },
        { title: 'Top 10 VS Code Extensions for Developers', excerpt: 'Boost your productivity with these essential VS Code extensions...', date: 'March 5, 2024', readTime: '4 min read' }
    ];

    return (
        <section id="blog" className="blog-section">
            <h2 className="blog-title">Latest Blog Posts</h2>
            <div className="blog-grid">
                {posts.map((post, index) => (
                    <div key={index} className="blog-card">
                        <h3 className="blog-post-title">{post.title}</h3>
                        <div className="blog-meta">
                            <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                            <span><i className="far fa-clock"></i> {post.readTime}</span>
                        </div>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <a href="#" className="blog-read-more">Read More →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;