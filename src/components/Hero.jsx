import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="animate-text">Excel</span> <span className="animate-text delay-1">English</span>
                </h1>
                <p className="hero-subtitle animate-fade-up">
                    Интерактивті ағылшын тілі курсы.<br />
                    9-сыныпқа арналған арнайы бағдарлама.
                </p>
            </div>

            <div className="hero-features">
                <div className="feature-card glass animate-fade-up delay-2">
                    <div className="feature-icon">📚</div>
                    <h3>Сөздік қор</h3>
                    <p>Барлық модульдер бойынша жаңа сөздер</p>
                </div>
                <div className="feature-card glass animate-fade-up delay-3">
                    <div className="feature-icon">⚡</div>
                    <h3>Грамматика</h3>
                    <p>Неправильные глаголы және ережелер</p>
                </div>
                <div className="feature-card glass animate-fade-up delay-4">
                    <div className="feature-icon">🎯</div>
                    <h3>Тесттер</h3>
                    <p>Өз біліміңді тексер және XP жина</p>
                </div>
            </div>
        </div>
    );
}
