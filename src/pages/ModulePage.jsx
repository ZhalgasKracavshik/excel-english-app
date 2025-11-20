import React from 'react';
import { useParams } from 'react-router-dom';
import WordList from '../components/WordList';
import allWords from '../data/grade9-words.json';
import BackButton from '../components/BackButton';
import './ModulePage.css';

export default function ModulePage() {
    const { gradeId, moduleId } = useParams();

    // Filter words for the specific module
    const moduleWords = allWords.filter(word => word.module === parseInt(moduleId));

    return (
        <div className="module-page">
            <BackButton />
            <div className="module-header">
                <div className="container">
                    <h1 className="module-page-title">Module {moduleId}</h1>
                    <p className="module-subtitle">Vocabulary List</p>
                </div>
            </div>
            <div className="container">
                <WordList words={moduleWords} />
            </div>
        </div>
    );
}
