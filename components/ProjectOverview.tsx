import React from 'react';
import { AlertTriangle, CheckCircle, Filter, Layers } from 'lucide-react';

export const ProjectOverview: React.FC = () => {
  return (
    <section id="methodology" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Problem */}
        <div className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge: Fragmented Systems</h2>
              <p className="text-lg text-slate-600 mb-6">
                NAU operates a complex ecosystem utilizing <span className="font-semibold text-nau-blue">Alerton Compass</span>, <span className="font-semibold text-nau-blue">Niagara Framework</span>, and <span className="font-semibold text-nau-blue">Willow</span>. While these tools are powerful, running them in parallel generates a high volume of fragmented alarms.
              </p>
              <ul className="space-y-4">
                {[
                  'Disparate data sources (Compass, Niagara, Willow)',
                  'High volume of nuisance alarms obscuring real issues',
                  'Lack of unified context (e.g., occupancy vs. schedule)',
                  'Operator "Alarm Fatigue" leading to slower response times'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mr-3" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative">
               <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 shadow-inner">
                 <h3 className="text-lg font-semibold text-slate-900 mb-4">Current vs. Proposed State</h3>
                 <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-1">
                            <span className="text-slate-500">Current Nuisance Rate</span>
                            <span className="text-red-600">65%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-1">
                            <span className="text-slate-500">Target Nuisance Rate</span>
                            <span className="text-emerald-600">10%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                    </div>
                 </div>
                 <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200 text-sm text-slate-600 italic border-l-4 border-l-nau-blue">
                    "Our goal is to unify the data from Niagara and Alerton into a single, intelligent prioritization layer."
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* The Strategy */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Methodology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Filter className="h-6 w-6 text-nau-blue" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Classification & Suppression</h3>
                <p className="text-slate-600">
                    We conducted a deep audit of historical alarm logs from Willow and Niagara to identify patterns. Rules were developed to auto-suppress alarms caused by transient states.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                    <Layers className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Context Integration</h3>
                <p className="text-slate-600">
                    Incorporating data from scheduling systems. An HVAC unit in an unoccupied classroom at 2 AM should be treated differently than one in a packed lecture hall.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Intelligent Interface</h3>
                <p className="text-slate-600">
                    Designing a prioritization dashboard that bubbles up high-value alarms. We are also prototyping AI-assisted diagnostics using Google Gemini to help operators resolve issues faster.
                </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};