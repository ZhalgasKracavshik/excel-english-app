import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ isCollapsed, toggleSidebar }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <aside className={`sidebar glass ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-icon">📚</div>
                <h1 className={`sidebar-logo ${isCollapsed ? 'hidden' : ''}`}>Excel</h1>
                <button className="collapse-btn" onClick={toggleSidebar}>
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>

            <nav className="sidebar-nav">
                <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} title="Басты бет">
                    <span className="nav-icon">🏠</span>
                    <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Басты бет</span>
                </Link>
                <Link to="/grades" className={`nav-item ${isActive('/grades') ? 'active' : ''}`} title="Сыныптар">
                    <span className="nav-icon">🎓</span>
                    <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Сыныптар</span>
                </Link>
                <Link to="/grade/9" className={`nav-item ${isActive('/grade/9') ? 'active' : ''}`} title="9-сынып">
                    <span className="nav-icon">📖</span>
                    <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>9-сынып</span>
                </Link>
                <div className="nav-divider"></div>
                <Link to="/grade/9/irregular-verbs" className={`nav-item ${isActive('/grade/9/irregular-verbs') ? 'active' : ''}`} title="Грамматика">
                    <span className="nav-icon">⚡</span>
                    <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Грамматика</span>
                </Link>
                <Link to="/grade/9/phrasal-verbs" className={`nav-item ${isActive('/grade/9/phrasal-verbs') ? 'active' : ''}`} title="Фразалық етістіктер">
                    <span className="nav-icon">🗣️</span>
                    <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Фразалық</span>
                </Link>
                <div className="nav-divider"></div>
                <Link to="/quiz" className={`nav-item ${isActive('/quiz') ? 'active' : ''}`} title="Проверь себя">
                    <span className="nav-icon">🎯</span>
                    <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Проверь себя</span>
                </Link>
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">👤</div>
                    <div className={`user-info ${isCollapsed ? 'hidden' : ''}`}>
                        <div className="user-name">Оқушы</div>
                        <div className="user-level">Level 1</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
