import React, { useState, useEffect } from 'react';
import allWords from '../data/grade9-words.json';
import phrasalVerbs from '../data/grade9-phrasal-verbs.json';
import BackButton from '../components/BackButton';
import './QuizPage.css';

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        generateQuestions();
    }, []);

    const generateQuestions = () => {
        // Combine words and phrasal verbs
        const combinedData = [
            ...allWords.map(w => ({ question: w.word, answer: w.translation, type: 'word' })),
            ...phrasalVerbs.map(pv => ({ question: pv.verb, answer: pv.meaning, type: 'phrasal' }))
        ];

        // Shuffle and pick 10
        const shuffled = [...combinedData].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        const quizQuestions = selected.map(item => {
            // Generate 3 wrong answers from the same type (word or phrasal)
            const wrongAnswers = combinedData
                .filter(w => w.type === item.type && w.question !== item.question)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(w => w.answer);

            const options = [...wrongAnswers, item.answer].sort(() => 0.5 - Math.random());

            return {
                question: item.question,
                correctAnswer: item.answer,
                options,
                type: item.type
            };
        });

        setQuestions(quizQuestions);
    };

    const handleAnswerClick = (option) => {
        if (selectedAnswer) return;

        setSelectedAnswer(option);
        const correct = option === questions[currentQuestion].correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
        generateQuestions();
    };

    if (questions.length === 0) return <div className="loading">Loading...</div>;

    return (
        <div className="quiz-page">
            <BackButton />
            <div className="container">
                <h1 className="quiz-title">Проверь себя 🎯</h1>

                {showScore ? (
                    <div className={`score-section glass animate-fade-up ${score > 5 ? 'celebration' : ''}`}>
                        <div className="score-header">
                            {score === 10 ? '🏆' : score > 5 ? '🌟' : '📝'}
                        </div>
                        <h2>Нәтиже: {score} / {questions.length}</h2>
                        <p className="score-message">
                            {score === 10 ? 'Керемет! Барлық сұраққа дұрыс жауап бердің!' :
                                score > 5 ? 'Жақсы нәтиже! Бірақ әлі де дайындалу керек.' :
                                    'Мұңайма! Қайтадан оқып, тағы тапсырып көр.'}
                        </p>
                        <button onClick={restartQuiz} className="btn btn-primary">Қайта тапсыру 🔄</button>
                    </div>
                ) : (
                    <div className="question-section glass animate-fade-up">
                        <div className="question-header">
                            <span className="question-count">Сұрақ {currentQuestion + 1}/{questions.length}</span>
                            <span className="score-tag">XP: {score * 10}</span>
                        </div>

                        <div className="question-type-badge">
                            {questions[currentQuestion].type === 'word' ? 'Сөзді аудар' : 'Фразалық етістік'}
                        </div>
                        <h2 className="question-text">{questions[currentQuestion].question}</h2>

                        <div className="options-grid">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    className={`option-btn ${selectedAnswer === option
                                            ? isCorrect ? 'correct' : 'wrong'
                                            : ''
                                        } ${selectedAnswer && option === questions[currentQuestion].correctAnswer ? 'correct' : ''}`}
                                    disabled={selectedAnswer !== null}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
