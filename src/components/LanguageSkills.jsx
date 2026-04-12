import React from 'react';
import './components.css';

const LanguageSkills = () => {
    const languages = [
        { name: 'Amharic', level: 'Native', percent: 100 },
        { name: 'English', level: 'Fluent', percent: 85 },
        { name: 'Arabic', level: 'Intermediate', percent: 50 }
    ];

    return (
        <section id="languages" className="language-section">
            <h2 className="language-title">Languages</h2>
            <div className="language-container">
                {languages.map((lang, index) => (
                    <div key={index} className="language-item">
                        <div className="language-header"><span className="language-name">{lang.name}</span><span className="language-level">{lang.level}</span></div>
                        <div className="language-progress-bar"><div className="language-progress-fill" style={{ width: `${lang.percent}%` }}></div></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LanguageSkills;