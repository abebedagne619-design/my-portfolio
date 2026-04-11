import React from 'react';

const LanguageSkills = () => {
    const languages = [
        { name: 'Amharic', level: 'Native', percent: 100 },
        { name: 'English', level: 'Fluent', percent: 85 },
        { name: 'Arabic', level: 'Intermediate', percent: 50 }
    ];

    const styles = {
        section: { padding: '100px 5%', background: '#0a0a2a' },
        title: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #667eea)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
        container: { maxWidth: '600px', margin: '0 auto' },
        languageItem: { marginBottom: '1.5rem' },
        languageHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' },
        languageName: { fontSize: '1.1rem', fontWeight: 500 },
        languageLevel: { color: '#667eea', fontSize: '0.9rem' },
        progressBar: { width: '100%', height: '8px', background: '#2a2a4a', borderRadius: '10px', overflow: 'hidden' },
        progressFill: { height: '100%', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '10px', transition: 'width 1s ease-out' }
    };

    return (
        <section id="languages" style={styles.section}>
            <h2 style={styles.title}>Languages</h2>
            <div style={styles.container}>
                {languages.map((lang, index) => (
                    <div key={index} style={styles.languageItem}>
                        <div style={styles.languageHeader}>
                            <span style={styles.languageName}>{lang.name}</span>
                            <span style={styles.languageLevel}>{lang.level}</span>
                        </div>
                        <div style={styles.progressBar}>
                            <div style={{ ...styles.progressFill, width: `${lang.percent}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LanguageSkills;