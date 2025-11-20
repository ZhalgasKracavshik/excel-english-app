import React from 'react';
import { useParams } from 'react-router-dom';
import WordList from '../components/WordList';
import IrregularVerbs from '../components/IrregularVerbs';
import allWords from '../data/grade9-words.json';
import irregularVerbs from '../data/irregular-verbs.json';
import BackButton from '../components/BackButton';
import './GradePage.css';

const gradeInfo = {
    5: { name: '5-сынып', emoji: '📘', color: '#3b82f6' },
    6: { name: '6-сынып', emoji: '📗', color: '#10b981' },
    7: { name: '7-сынып', emoji: '📙', color: '#f59e0b' },
    8: { name: '8-сынып', emoji: '📕', color: '#ef4444' },
    9: { name: '9-сынып', emoji: '📔', color: '#8b5cf6' },
};

export default function GradePage() {
    const { gradeId } = useParams();
    const grade = gradeInfo[gradeId] || gradeInfo[9];
    const isGrade9 = gradeId === '9';

    // Group words by module for Grade 9
    const modules = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (!isGrade9) {
        return (
            <div className="grade-page">
                <BackButton />
                <div className="container text-center" style={{ paddingTop: '5rem' }}>
                    <h1 className="grade-page-title">{grade.name}</h1>
                    <div className="glass" style={{ padding: '3rem', marginTop: '2rem' }}>
                        <h2>🚧 Әзірленуде...</h2>
                        <p>Бұл сыныпқа арналған материалдар жақында қосылады.</p>
                        <a href="/grades" className="btn btn-primary" style={{ marginTop: '1rem' }}>Басқа сыныпты таңдау</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grade-page">
            <BackButton to="/grades" />
            <div className="grade-header-section">
                <div className="container">
                    <h1 className="grade-page-title">
                        <span className="grade-page-emoji">{grade.emoji}</span>
                        {grade.name}
                    </h1>
                    <p className="grade-page-subtitle">Excel for Kazakhstan</p>
                </div>
            </div>

            <div className="container">
                <div className="modules-grid">
                    {modules.map(modNum => (
                        <a key={modNum} href={`/grade/${gradeId}/module/${modNum}`} className="module-card glass">
                            <div className="module-icon">📚</div>
                            <div className="module-content">
                                <div className="module-number">Module {modNum}</div>
                                <h3 className="module-name">Vocabulary</h3>
                                <p className="module-desc">{allWords.filter(w => w.module === modNum).length} сөз</p>
                            </div>
                        </a>
                    ))}

                    <a href={`/grade/${gradeId}/irregular-verbs`} className="module-card glass special-card">
                        <div className="module-icon">⚡</div>
                        <div className="module-content">
                            <div className="module-number">Grammar</div>
                            <h3 className="module-name">Irregular Verbs</h3>
                            <p className="module-desc">{irregularVerbs.length} етістік</p>
                        </div>
                    </a>

                    <a href={`/grade/${gradeId}/phrasal-verbs`} className="module-card glass special-card-2">
                        <div className="module-icon">🗣️</div>
                        <div className="module-content">
                            <div className="module-number">Vocabulary</div>
                            <h3 className="module-name">Phrasal Verbs</h3>
                            <p className="module-desc">Фразалық етістіктер</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
