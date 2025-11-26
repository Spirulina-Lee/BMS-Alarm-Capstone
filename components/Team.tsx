import React from 'react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">The Capstone Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
                <div key={member} className="group">
                    <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden relative">
                         <img 
                            src={`https://picsum.photos/150/150?random=${member}`} 
                            alt="Team Member" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">Student Engineer {member}</h3>
                    <p className="text-nau-blue text-sm">Computer Engineering</p>
                </div>
            ))}
        </div>
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 inline-block text-left max-w-2xl">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Project Acknowledgements</h4>
            <p className="text-slate-600 mb-4">
                Special thanks to NAU Facility Services for providing access to Alerton and Niagara system data, and to our faculty mentors for their guidance on control theory and UI/UX design.
            </p>
        </div>
      </div>
    </section>
  );
};