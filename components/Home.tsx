import React from 'react';
import { ArrowRight, Activity, Users, FileText, Server, ShieldCheck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[85vh]">
        {/* Background Image - NAU/Flagstaff Winter Vibe */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548625361-12e2d9760777?q=80&w=2128&auto=format&fit=crop" 
            alt="Snowy Campus Building" 
            className="w-full h-full object-cover"
          />
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-nau-blue/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-nau-gold text-sm font-bold mb-8 backdrop-blur-md shadow-xl animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nau-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nau-gold"></span>
              </span>
              Capstone Project 2025 Fall - 2026 Spring
            </div>
            
            <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl mb-8 drop-shadow-2xl">
              Intelligent Alarm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nau-gold to-yellow-200">
                Management Strategy
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-100 mb-10 font-light leading-relaxed drop-shadow-md">
              Optimizing NAU's campus operations by integrating Willow, Compass, and Niagara into a unified, noise-free intelligence layer.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-xl text-nau-blue bg-nau-gold hover:bg-yellow-400 transform hover:-translate-y-1 transition-all duration-200"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/methodology"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-lg font-semibold rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                View Methodology
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Navigation Cards */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Link to="/dashboard" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-nau-blue hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-nau-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-nau-blue group-hover:text-white transition-colors text-nau-blue">
                  <Activity className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Live Dashboard</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Experience the operator interface. View real-time alarm feeds, AI-powered analysis, and suppression statistics.
                </p>
                <div className="flex items-center text-nau-blue font-semibold group-hover:gap-2 transition-all">
                  See Demo <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link to="/methodology" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-nau-gold hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-nau-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-nau-gold group-hover:text-nau-blue transition-colors text-nau-gold">
                  <FileText className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Methodology</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Explore our "Problem, Cause, Solution" framework and the system architecture behind the noise reduction.
                </p>
                <div className="flex items-center text-nau-blue font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link to="/team" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-nau-blue hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors text-slate-600">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Team</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Meet the Computer Engineering students and faculty partners behind this Capstone project.
                </p>
                <div className="flex items-center text-nau-blue font-semibold group-hover:gap-2 transition-all">
                  Meet Us <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
                Integrated Systems Ecosystem
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-3">
                    <Server className="h-8 w-8 text-nau-blue" />
                    <span className="text-xl font-bold text-slate-700">Willow</span>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-nau-blue" />
                    <span className="text-xl font-bold text-slate-700">Compass</span>
                </div>
                <div className="flex items-center gap-3">
                    <Database className="h-8 w-8 text-nau-blue" />
                    <span className="text-xl font-bold text-slate-700">Niagara</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};