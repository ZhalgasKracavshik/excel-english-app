import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import IntroAnimation from './IntroAnimation';
import './Layout.css';

export default function Layout({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Check if intro has been shown in this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <div className={`layout-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle glass"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          ☰
        </button>

        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  );
}
