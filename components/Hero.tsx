import React from 'react';
import { ArrowRight, ShieldAlert, Cpu, BarChart3 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="overview" className="relative bg-slate-50 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-nau-blue text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nau-blue"></span>
            </span>
            NAU Engineering Capstone 2024
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
            Intelligent Alarm Management <br className="hidden sm:block" />
            <span className="text-nau-blue">for Smarter Campus Ops</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-8">
            Reducing noise and enhancing reliability in NAU's Building Management Systems through advanced data analysis, contextual logic, and AI-driven prioritization.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-nau-blue hover:bg-blue-800 transition-all"
            >
              Launch Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#methodology"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-all"
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
              desc: 'Visualizing data to drive operational efficiency.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="relative bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6 bg-nau-gold p-3 rounded-lg shadow-sm">
                <feature.icon className="h-6 w-6 text-nau-blue" />
              </div>
              <h3 className="mt-8 text-lg font-medium text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-30 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};