import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

export default function BackButton({ to, label = 'Артқа' }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (to) {
            navigate(to);
        } else {
            navigate(-1);
        }
    };

    return (
        <button onClick={handleClick} className="fixed-back-btn glass">
            <span className="icon">←</span>
            <span className="label">{label}</span>
        </button>
    );
}
