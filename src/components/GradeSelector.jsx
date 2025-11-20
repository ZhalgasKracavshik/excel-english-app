import React from 'react';
import './GradeSelector.css';

const grades = [
    { id: 5, name: '5-сынып', emoji: '📘', color: '#3b82f6' },
    { id: 6, name: '6-сынып', emoji: '📗', color: '#10b981' },
    { id: 7, name: '7-сынып', emoji: '📙', color: '#f59e0b' },
    { id: 8, name: '8-сынып', emoji: '📕', color: '#ef4444' },
    { id: 9, name: '9-сынып', emoji: '📔', color: '#8b5cf6' },
];

export default function GradeSelector() {
    return (
        <div className="grade-selector">
            <h2 className="grade-title">Сыныпты таңдаңыз</h2>
            <div className="grade-grid">
                {grades.map((grade, index) => (
                    <a
                        key={grade.id}
                        href={`/grade/${grade.id}`}
                        className="grade-card animate-fade-in"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            '--grade-color': grade.color
                        }}
                    >
                        <div className="grade-emoji">{grade.emoji}</div>
                        <h3 className="grade-name">{grade.name}</h3>
                        <p className="grade-description">Модульдер мен сөздер</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
