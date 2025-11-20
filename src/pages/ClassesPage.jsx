import React from 'react';
import GradeSelector from '../components/GradeSelector';
import BackButton from '../components/BackButton';
import './ClassesPage.css';

export default function ClassesPage() {
    return (
        <div className="classes-page">
            <BackButton to="/" />
            <div className="container">
                <h1 className="classes-title">Сыныпты таңдаңыз</h1>
                <p className="classes-subtitle">Оқуды бастау үшін өз сыныбыңызды таңдаңыз</p>
                <GradeSelector />
            </div>
        </div>
    );
}
