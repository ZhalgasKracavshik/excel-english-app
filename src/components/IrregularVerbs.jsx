import React, { useState } from 'react';
import './IrregularVerbs.css';

export default function IrregularVerbs({ verbs }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVerbs = verbs.filter(verb =>
        verb.base.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="irregular-verbs">
            <h2 className="section-title">Бұрыс етістіктер (Irregular Verbs)</h2>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Іздеу..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <span className="search-icon">🔍</span>
            </div>

            <div className="verbs-table-container">
                <table className="verbs-table">
                    <thead>
                        <tr>
                            <th>Base Form</th>
                            <th>Past Simple</th>
                            <th>Past Participle</th>
                            <th>Қазақша</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredVerbs.map((verb, index) => (
                            <tr key={index} className="verb-row animate-fade-in" style={{ animationDelay: `${index * 0.02}s` }}>
                                <td className="verb-base">{verb.base}</td>
                                <td>{verb.pastSimple}</td>
                                <td>{verb.pastParticiple}</td>
                                <td className="verb-translation">{verb.translation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredVerbs.length === 0 && (
                <div className="no-results">
                    <p>Ештеңе табылмады 😢</p>
                </div>
            )}
        </div>
    );
}
