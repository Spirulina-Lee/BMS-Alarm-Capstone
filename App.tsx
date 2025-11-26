import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ProjectOverview } from './components/ProjectOverview';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Team } from './components/Team';
import { Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-white font-bold text-lg mb-1">NAU Capstone 2025-2026</h3>
        <p className="text-sm">Intelligent BMS Alarm Management Strategy</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
        <a href="https://nau.edu" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><ExternalLink className="h-5 w-5" /></a>
      </div>
      <div className="text-sm">
        &copy; 2026 Northern Arizona University.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-nau-gold/30 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methodology" element={<ProjectOverview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;