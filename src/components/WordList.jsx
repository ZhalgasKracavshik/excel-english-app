import React, { useState } from 'react';
import './WordList.css';

export default function WordList({ words }) {
    const [flippedCards, setFlippedCards] = useState(new Set());

    const toggleFlip = (index) => {
        const newFlipped = new Set(flippedCards);
        if (newFlipped.has(index)) {
            newFlipped.delete(index);
        } else {
            newFlipped.add(index);
        }
        setFlippedCards(newFlipped);
    };

    return (
        <div className="word-list">
            <h2 className="section-title">Сөздер тізімі</h2>
            <div className="words-grid">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className={`word-card ${flippedCards.has(index) ? 'flipped' : ''}`}
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="word-card-inner">
                            <div className="word-card-front">
                                <div className="word-text">{word.word}</div>
                                <div className="word-hint">👆 Басыңыз</div>
                            </div>
                            <div className="word-card-back">
                                <div className="word-translation">{word.translation}</div>
                                <div className="word-definition">{word.definition}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
