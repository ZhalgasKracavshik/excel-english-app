import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ClassesPage from './pages/ClassesPage';
import GradePage from './pages/GradePage';
import ModulePage from './pages/ModulePage';
import IrregularVerbsPage from './pages/IrregularVerbsPage';
import PhrasalVerbsPage from './pages/PhrasalVerbsPage';
import QuizPage from './pages/QuizPage';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grades" element={<ClassesPage />} />
          <Route path="/grade/:gradeId" element={<GradePage />} />
          <Route path="/grade/:gradeId/module/:moduleId" element={<ModulePage />} />
          <Route path="/grade/:gradeId/irregular-verbs" element={<IrregularVerbsPage />} />
          <Route path="/grade/:gradeId/phrasal-verbs" element={<PhrasalVerbsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
