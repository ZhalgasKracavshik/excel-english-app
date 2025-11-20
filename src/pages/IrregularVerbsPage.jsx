import React from 'react';
import { useParams } from 'react-router-dom';
import IrregularVerbs from '../components/IrregularVerbs';
import irregularVerbs from '../data/irregular-verbs.json';
import BackButton from '../components/BackButton';
import './IrregularVerbsPage.css';

export default function IrregularVerbsPage() {
    const { gradeId } = useParams();

    return (
        <div className="irregular-verbs-page">
            <BackButton />
            <div className="irregular-header">
                <div className="container">
                    <h1 className="irregular-page-title">Irregular Verbs</h1>
                    <p className="irregular-subtitle">Бұрыс етістіктер тізімі</p>
                </div>
            </div>
            <div className="container">
                <IrregularVerbs verbs={irregularVerbs} />
            </div>
        </div>
    );
}
