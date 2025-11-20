import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

export default function IntroAnimation({ onComplete }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence of animations
        const timeouts = [
            setTimeout(() => setStep(1), 500),  // Text appears
            setTimeout(() => setStep(2), 2500), // Curtain starts opening
            setTimeout(() => {
                setStep(3);
                onComplete(); // Notify parent that intro is done
            }, 3500), // Animation finished
        ];

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    if (step === 3) return null;

    return (
        <div className={`intro-container ${step >= 2 ? 'fade-out' : ''}`}>
            <div className="curtain curtain-left"></div>
            <div className="curtain curtain-right"></div>

            <div className={`intro-content ${step >= 1 ? 'visible' : ''}`}>
                <h1 className="intro-title">
                    <span className="word">Excel</span>
                    <span className="word">English</span>
                </h1>
                <div className="intro-line"></div>
                <p className="intro-subtitle">Learn. Practice. Master.</p>
            </div>
        </div>
    );
}
