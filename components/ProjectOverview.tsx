import React from 'react';
import { AlertTriangle, CheckCircle, Filter, Layers, Server, ArrowRight } from 'lucide-react';

export const ProjectOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Methodology & Approach</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
                How we transform raw BMS data into actionable intelligence for the NAU Facilities team.
            </p>
        </div>

        {/* The Problem */}
        <div className="mb-20 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-4">
                THE CHALLENGE
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Fragmented Alarm Systems</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                NAU operates a complex ecosystem utilizing <span className="font-bold text-nau-blue">Alerton Compass</span>, <span className="font-bold text-nau-blue">Niagara Framework</span>, and <span className="font-bold text-nau-blue">Willow</span>. While these tools are powerful, running them in parallel without a unified strategy generates a high volume of fragmented alarms.
              </p>
              <ul className="space-y-4">
                {[
                  'Disparate data sources (Compass, Niagara, Willow) creating silos',
                  'High volume of nuisance alarms obscuring real mechanical issues',
                  'Lack of unified context (e.g., occupancy vs. schedule) in alarm logic',
                  'Operator "Alarm Fatigue" leading to reduced response efficiency'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="p-1 bg-red-50 rounded mt-1 mr-3">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative">
               <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 shadow-inner">
                 <h3 className="text-lg font-semibold text-slate-900 mb-6">Nuisance Alarm Reduction Goal</h3>
                 <div className="space-y-8">
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-500">Current State (Unfiltered)</span>
                            <span className="text-red-600 font-bold">65% Nuisance Rate</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                            <div className="bg-red-500 h-full rounded-full stripe-pattern" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">High volume of false positives from transient sensors.</p>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-500">Target State (With Our Logic)</span>
                            <span className="text-emerald-600 font-bold">10% Nuisance Rate</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '10%' }}></div>
                        </div>
                         <p className="text-xs text-slate-400 mt-2">Achieved via context-aware suppression rules.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* The Solution Flow */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Solution Architecture</h2>
            <div className="grid md:grid-cols-4 gap-4 text-center relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-200 -z-10"></div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 mx-auto bg-nau-blue rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm mb-4">
                        <Server className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Data Ingestion</h3>
                    <p className="text-sm text-slate-600">Aggregating logs from Willow, Compass, and Niagara.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 mx-auto bg-nau-blue rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm mb-4">
                        <Filter className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Logic Filtering</h3>
                    <p className="text-sm text-slate-600">Applying suppression rules based on schedule & occupancy.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 mx-auto bg-nau-blue rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm mb-4">
                        <Layers className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Prioritization</h3>
                    <p className="text-sm text-slate-600">Ranking alarms by criticality (Critical vs Warning vs Info).</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 mx-auto bg-nau-blue rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm mb-4">
                        <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Actionable UI</h3>
                    <p className="text-sm text-slate-600">Presenting clean data to operators via Dashboard.</p>
                </div>
            </div>
        </div>

        {/* Strategy Details */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-nau-blue rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">Context Integration</h3>
                <p className="text-slate-300 mb-6 relative z-10">
                    Traditional alarms are binary (On/Off). Our strategy introduces dimensionality:
                </p>
                <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                        <div className="h-10 w-10 rounded bg-nau-gold/20 flex items-center justify-center font-bold text-nau-gold">01</div>
                        <div>
                            <h4 className="font-bold">Occupancy Status</h4>
                            <p className="text-xs text-slate-400">Is the room currently in use?</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                         <div className="h-10 w-10 rounded bg-nau-gold/20 flex items-center justify-center font-bold text-nau-gold">02</div>
                        <div>
                            <h4 className="font-bold">Schedule Data</h4>
                            <p className="text-xs text-slate-400">Is the building in 'Unoccupied' mode?</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                         <div className="h-10 w-10 rounded bg-nau-gold/20 flex items-center justify-center font-bold text-nau-gold">03</div>
                        <div>
                            <h4 className="font-bold">Maintenance Mode</h4>
                            <p className="text-xs text-slate-400">Is the equipment under active repair?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-200 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Future Work</h3>
                 <ul className="space-y-4">
                     {[
                         "Develop advanced skills in WillowActivate",
                         "Refine Alarm Classification Model with larger datasets",
                         "Expand Analysis to Additional Campus Buildings (North Campus)",
                         "Integrate real-time Context-Aware Logic into Niagara",
                         "Collaborate further with Willow & NAU Facilities for deployment"
                     ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3">
                             <ArrowRight className="h-5 w-5 text-nau-blue shrink-0 mt-0.5" />
                             <span className="text-slate-700">{item}</span>
                         </li>
                     ))}
                 </ul>
            </div>
        </div>

      </div>
    </div>
  );
};