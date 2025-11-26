import React from 'react';
import { ArrowRight, ShieldAlert, Cpu, BarChart3 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="overview" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay - NAU Style (Pine trees, Brick buildings) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" 
          alt="NAU Campus Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nau-blue/90 border border-nau-blue/50 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nau-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nau-gold"></span>
            </span>
            NAU Capstone 2025 Fall - 2026 Spring
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 drop-shadow-md">
            Intelligent Alarm Management <br className="hidden sm:block" />
            <span className="text-nau-gold">for Smarter Campus Ops</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-200 mb-8 font-light leading-relaxed">
            Reducing noise and enhancing reliability in NAU's Building Management Systems through advanced data analysis, contextual logic, and AI-driven prioritization.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-nau-blue bg-nau-gold hover:bg-yellow-400 transition-all"
            >
              Launch Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#methodology"
              className="inline-flex items-center px-6 py-3 border border-slate-400 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
            >
              View Methodology
            </a>
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
              title: 'Actionable Insights',
              desc: 'Visualizing data from Willow, Compass, and Niagara in one place.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="relative bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-4 left-6 bg-nau-blue p-3 rounded-lg shadow-lg border border-nau-blue/50">
                <feature.icon className="h-6 w-6 text-nau-gold" />
              </div>
              <h3 className="mt-8 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};