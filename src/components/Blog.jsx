import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: 'Getting Started with React',
            excerpt: 'Learn the basics of React and how to build your first component...',
            date: 'March 15, 2024',
            readTime: '5 min read'
        },
        {
            title: 'Understanding JavaScript Closures',
            excerpt: 'A deep dive into closures and how they work in JavaScript...',
            date: 'March 10, 2024',
            readTime: '7 min read'
        },
        {
            title: 'Top 10 VS Code Extensions for Developers',
            excerpt: 'Boost your productivity with these essential VS Code extensions...',
            date: 'March 5, 2024',
            readTime: '4 min read'
        }
    ];

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
        card: { background: '#1a1a3a', padding: '1.5rem', borderRadius: '20px', transition: 'all 0.3s ease' },
        postTitle: { fontSize: '1.3rem', marginBottom: '0.5rem', color: '#667eea' },
        meta: { display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#888', fontSize: '0.8rem' },
        excerpt: { color: '#ccc', lineHeight: 1.6 },
        readMore: { display: 'inline-block', marginTop: '1rem', color: '#667eea', textDecoration: 'none' }
    };

    return (
        <section id="blog" style={styles.section}>
            <h2 style={styles.title}>Latest Blog Posts</h2>
            <div style={styles.grid}>
                {posts.map((post, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.postTitle}>{post.title}</h3>
                        <div style={styles.meta}>
                            <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                            <span><i className="far fa-clock"></i> {post.readTime}</span>
                        </div>
                        <p style={styles.excerpt}>{post.excerpt}</p>
                        <a href="#" style={styles.readMore}>Read More →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;