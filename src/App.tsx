import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ClassicMode } from './pages/ClassicMode';
import { TimeAttackMode } from './pages/TimeAttackMode';
import { MemoryMode } from './pages/MemoryMode';
import { EndlessMode } from './pages/EndlessMode';
import { Statistics } from './pages/Statistics';
import { Settings } from './pages/Settings';
import './index.css';

export function App() {
  return (
    <Router>
      <div className="app-container p-4 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classic" element={<ClassicMode />} />
          <Route path="/time-attack" element={<TimeAttackMode />} />
          <Route path="/memory" element={<MemoryMode />} />
          <Route path="/endless" element={<EndlessMode />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
