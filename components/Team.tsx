import React from 'react';
import { Award, GraduationCap, Users } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Shawn Young', role: 'Team Lead', major: 'Computer Engineering' },
    { name: 'Evan Paddock', role: 'Team Member', major: 'Computer Engineering' },
    { name: 'Kaulan Hale', role: 'Team Member', major: 'Computer Engineering' },
    { name: 'Michael Miller', role: 'Team Member', major: 'Computer Engineering' },
    { name: 'Xianzhe Li', role: 'Team Member', major: 'Electrical Engineering' },
    { name: 'Yuhuan Guo', role: 'Team Member', major: 'Electrical Engineering' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Meet the Team</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
                The Capstone team behind the Intelligent BMS Strategy.
            </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center text-left gap-4 h-full">
                    <div className="h-12 w-12 rounded-full bg-nau-blue/10 flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                        {member.role === 'Team Lead' ? (
                            <Award className="h-6 w-6 text-nau-gold" />
                        ) : (
                            <Users className="h-6 w-6 text-nau-blue" />
                        )}
                    </div>
                    <div className="min-w-0 flex-1 w-full">
                        <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mt-1">
                            <span className={`font-medium shrink-0 ${member.role === 'Team Lead' ? 'text-nau-gold' : 'text-slate-500'}`}>
                                {member.role}
                            </span>
                            <span className="text-slate-300 hidden sm:inline">•</span>
                            <span className="text-slate-500 leading-tight w-full sm:w-auto">{member.major}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Acknowledgements */}
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-2">
                <GraduationCap className="h-6 w-6 text-nau-blue" />
                Acknowledgements
            </h2>
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-nau-gold"></div>
                <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        This project would not have been possible without the support and resources provided by our partners. We would like to extend our sincere gratitude to:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors">
                            <h4 className="font-bold text-nau-blue mb-2 text-lg">Willow</h4>
                            <p className="text-sm text-slate-600">For their industry-leading digital twin platform and data integration support.</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors">
                            <h4 className="font-bold text-nau-blue mb-2 text-lg">Alerton Compass</h4>
                            <p className="text-sm text-slate-600">For providing foundational building control system access and infrastructure.</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors">
                            <h4 className="font-bold text-nau-blue mb-2 text-lg">Niagara Framework</h4>
                            <p className="text-sm text-slate-600">For enabling the complex workflows and integration capabilities required for this strategy.</p>
                        </div>
                    </div>
                    <p className="mt-8 text-sm text-slate-500 italic text-center border-t border-slate-100 pt-6">
                        Special thanks to the NAU Facility Services team for their mentorship and guidance throughout the 2025-2026 academic year.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
