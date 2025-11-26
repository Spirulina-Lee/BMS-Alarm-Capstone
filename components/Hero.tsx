import React from 'react';
import { ArrowRight, ShieldAlert, Cpu, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      {/* Background Image - Snowy Pine Forest for NAU/Flagstaff vibe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518182170546-0766ce6fec56?q=80&w=2070&auto=format&fit=crop" 
          alt="NAU Campus Style Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark blue overlay for text readability */}
        <div className="absolute inset-0 bg-nau-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nau-blue/90 border border-nau-gold/30 text-white text-sm font-semibold mb-6 backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nau-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nau-gold"></span>
            </span>
            NAU Capstone 2025 Fall - 2026 Spring
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 drop-shadow-lg">
            Intelligent Alarm Management <br className="hidden sm:block" />
            <span className="text-nau-gold">for Smarter Campus Ops</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-100 mb-8 font-light leading-relaxed drop-shadow-md">
            Enhancing NAU's Building Management Systems by reducing nuisance alarms and integrating intelligence from Willow, Compass, and Niagara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-lg shadow-lg text-nau-blue bg-nau-gold hover:bg-yellow-400 transform hover:-translate-y-0.5 transition-all"
            >
              Launch Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/methodology"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-base font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-lg transition-all"
            >
              View Methodology
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: ShieldAlert,
              title: 'Noise Reduction',
              desc: 'Filtering out nuisance alarms to focus on critical system failures.'
            },
            {
              icon: Cpu,
              title: 'Context Aware',
              desc: 'Integrating schedule and occupancy data for smarter logic.'
            },
            {
              icon: BarChart3,
              title: 'Unified Insights',
              desc: 'Centralizing intelligence for Willow, Compass, and Niagara systems.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="relative bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl border-t-4 border-nau-gold hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-6 left-6 bg-nau-blue p-3 rounded-xl shadow-lg ring-4 ring-white/20">
                <feature.icon className="h-6 w-6 text-nau-gold" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};