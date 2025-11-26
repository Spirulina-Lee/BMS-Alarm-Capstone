import React, { useState } from 'react';
import { BMSAlarm, AlarmPriority } from '../../types';
import { MOCK_ALARMS } from '../../constants';
import { AlarmChart } from './AlarmChart';
import { AIAdvisor } from './AIAdvisor';
import { AlertCircle, CheckCircle2, Clock, MapPin, Building2, Calendar, Search } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [selectedAlarm, setSelectedAlarm] = useState<BMSAlarm | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredAlarms = MOCK_ALARMS.filter(alarm => {
    if (filter === 'All') return true;
    return alarm.priority === filter;
  });

  return (
    <div id="dashboard" className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Operator Dashboard</h2>
            <p className="text-slate-500">Live system status and intelligent insights.</p>
          </div>
          <div className="flex gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm self-start">
             {['All', AlarmPriority.CRITICAL, AlarmPriority.WARNING, AlarmPriority.SUPPRESSED].map(f => (
                 <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        filter === f 
                        ? 'bg-nau-blue text-white shadow-sm' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                 >
                    {f}
                 </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[800px]">
            {/* Left Column: List & Stats */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full">
                {/* Chart Section */}
                <div className="shrink-0">
                    <AlarmChart />
                </div>

                {/* Alarm List */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                        <h3 className="font-semibold text-slate-800">Active Alarms</h3>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2 h-4 w-4 text-slate-400" />
                            <input 
                                type="text" 
                                placeholder="Search equipment..."
                                className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nau-blue/20"
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-2">
                        {filteredAlarms.map((alarm) => (
                            <div 
                                key={alarm.id}
                                onClick={() => setSelectedAlarm(alarm)}
                                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                                    selectedAlarm?.id === alarm.id 
                                    ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-300' 
                                    : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {alarm.priority === AlarmPriority.CRITICAL && <AlertCircle className="h-5 w-5 text-red-500" />}
                                        {alarm.priority === AlarmPriority.WARNING && <AlertCircle className="h-5 w-5 text-amber-500" />}
                                        {alarm.priority === AlarmPriority.SUPPRESSED && <CheckCircle2 className="h-5 w-5 text-slate-400" />}
                                        <span className="font-medium text-slate-900">{alarm.equipment}</span>
                                    </div>
                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${
                                        alarm.priority === AlarmPriority.CRITICAL ? 'bg-red-50 text-red-700 border-red-100' :
                                        alarm.priority === AlarmPriority.WARNING ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                        'bg-slate-100 text-slate-600 border-slate-200'
                                    }`}>
                                        {alarm.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 mb-3">{alarm.description}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {new Date(alarm.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {alarm.location}
                                    </span>
                                    {/* Context indicators */}
                                    <span className={`flex items-center gap-1 ${alarm.occupancyStatus ? 'text-emerald-600' : 'text-slate-400'}`} title="Occupancy Status">
                                        <Building2 className="h-3 w-3" />
                                        {alarm.occupancyStatus ? 'Occupied' : 'Vacant'}
                                    </span>
                                    <span className={`flex items-center gap-1 ${alarm.scheduleActive ? 'text-emerald-600' : 'text-slate-400'}`} title="Schedule Status">
                                        <Calendar className="h-3 w-3" />
                                        {alarm.scheduleActive ? 'Scheduled' : 'Off-Sched'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: AI Assistant (Sticky/Fixed in mobile view logic handled in component usually, but here simple layout) */}
            <div className="lg:col-span-1 h-full rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <AIAdvisor selectedAlarm={selectedAlarm} />
            </div>
        </div>
      </div>
    </div>
  );
};