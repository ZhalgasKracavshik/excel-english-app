import React from 'react';
import { useParams } from 'react-router-dom';
import PhrasalVerbs from '../components/PhrasalVerbs';
import phrasalVerbsData from '../data/grade9-phrasal-verbs.json';
import BackButton from '../components/BackButton';
import './PhrasalVerbsPage.css';

export default function PhrasalVerbsPage() {
    const { gradeId } = useParams();

    return (
        <div className="phrasal-page">
            <BackButton />
            <div className="phrasal-header">
                <div className="container">
                    <h1 className="phrasal-title">Phrasal Verbs</h1>
                    <p className="phrasal-subtitle">Фразалық етістіктер және олардың мағынасы</p>
                </div>
            </div>
            <div className="container">
                <PhrasalVerbs verbs={phrasalVerbsData} />
            </div>
        </div>
    );
}
