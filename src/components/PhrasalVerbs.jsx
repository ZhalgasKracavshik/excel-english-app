import React, { useState } from 'react';
import './PhrasalVerbs.css';

export default function PhrasalVerbs({ verbs }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVerbs = verbs.filter(item =>
        item.verb.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="phrasal-verbs">
            <div className="search-container glass">
                <input
                    type="text"
                    placeholder="Фразалық етістікті іздеу..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <span className="search-icon">🔍</span>
            </div>

            <div className="verbs-grid">
                {filteredVerbs.map((item, index) => (
                    <div key={index} className="verb-card glass animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                        <div className="verb-header">
                            <h3 className="verb-title">{item.verb}</h3>
                            <span className="verb-translation">{item.translation}</span>
                        </div>
                        <div className="verb-body">
                            <p className="verb-example">"{item.example}"</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredVerbs.length === 0 && (
                <div className="no-results glass">
                    <p>Ештеңе табылмады 😔</p>
                </div>
            )}
        </div>
    );
}
