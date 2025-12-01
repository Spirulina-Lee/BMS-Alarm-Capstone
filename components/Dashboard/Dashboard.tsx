import React, { useState } from 'react';
import { BMSAlarm, AlarmPriority } from '../../types';
import { MOCK_ALARMS } from '../../constants';
import { AlarmChart } from './AlarmChart';
import { AIAdvisor } from './AIAdvisor';
import { AlertCircle, CheckCircle2, Clock, MapPin, Building2, Calendar, Search, SlidersHorizontal } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [selectedAlarm, setSelectedAlarm] = useState<BMSAlarm | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredAlarms = MOCK_ALARMS.filter(alarm => {
    if (filter === 'All') return true;
    return alarm.priority === filter;
  });

  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-[calc(130vh-140px)] flex flex-col">
        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="h-6 w-6 text-nau-blue" />
                Live Operator Dashboard
            </h2>
            <p className="text-slate-500 text-sm mt-1">Real-time surveillance of Willow, Compass, and Niagara streams.</p>
          </div>
          <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm self-start">
             {['All', AlarmPriority.CRITICAL, AlarmPriority.WARNING, AlarmPriority.SUPPRESSED].map(f => (
                 <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                        filter === f 
                        ? 'bg-nau-blue text-white shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                 >
                    {f === 'All' ? 'All Events' : f}
                 </button>
             ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Left Column: List & Stats */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full overflow-hidden">
                {/* Chart Section - responsive height with safe spacing */}
                <div className="shrink-0 h-[200px] md:h-[220px] lg:h-[260px]">
                    <AlarmChart />
                </div>

                {/* Alarm List */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                        <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                             <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Active Feed</h3>
                             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full border border-slate-200">{filteredAlarms.length}</span>
                        </div>
                        <div className="relative group">
                            <Search className="absolute left-2.5 top-2 h-4 w-4 text-slate-400 group-focus-within:text-nau-blue transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search by equipment ID..."
                                className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nau-blue/20 w-48 transition-all focus:w-64"
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-2 bg-slate-50/30">
                        {filteredAlarms.map((alarm) => (
                            <div 
                                key={alarm.id}
                                onClick={() => setSelectedAlarm(alarm)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all hover:shadow-md group ${
                                    selectedAlarm?.id === alarm.id 
                                    ? 'bg-white border-nau-blue ring-1 ring-nau-blue shadow-md' 
                                    : 'bg-white border-slate-200 hover:border-blue-200'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {alarm.priority === AlarmPriority.CRITICAL && <AlertCircle className="h-5 w-5 text-red-600" />}
                                        {alarm.priority === AlarmPriority.WARNING && <AlertCircle className="h-5 w-5 text-amber-500" />}
                                        {alarm.priority === AlarmPriority.SUPPRESSED && <CheckCircle2 className="h-5 w-5 text-slate-400" />}
                                        <span className={`font-bold ${selectedAlarm?.id === alarm.id ? 'text-nau-blue' : 'text-slate-800'}`}>
                                            {alarm.equipment}
                                        </span>
                                    </div>
                                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full border ${
                                        alarm.priority === AlarmPriority.CRITICAL ? 'bg-red-50 text-red-700 border-red-100' :
                                        alarm.priority === AlarmPriority.WARNING ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                        'bg-slate-100 text-slate-500 border-slate-200'
                                    }`}>
                                        {alarm.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 mb-3 pl-7">{alarm.description}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-500 pl-7">
                                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                                        <Clock className="h-3 w-3" />
                                        {new Date(alarm.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                    </span>
                                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                                        <MapPin className="h-3 w-3" />
                                        {alarm.location}
                                    </span>
                                    <span className={`flex items-center gap-1 px-2 py-1 rounded ${alarm.occupancyStatus ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-400'}`}>
                                        <Building2 className="h-3 w-3" />
                                        {alarm.occupancyStatus ? 'Occupied' : 'Vacant'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: AI Assistant */}
            <div className="lg:col-span-1 h-full rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-white relative">
                <AIAdvisor selectedAlarm={selectedAlarm} />
            </div>
        </div>
      </div>
    </div>
  );
};