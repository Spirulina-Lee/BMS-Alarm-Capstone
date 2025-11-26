import React, { useEffect, useState } from 'react';
import { BMSAlarm } from '../../types';
import { analyzeAlarm } from '../../services/geminiService';
import { Bot, Loader2, RefreshCw } from 'lucide-react';

interface AIAdvisorProps {
  selectedAlarm: BMSAlarm | null;
}

interface AnalysisResult {
  summary: string;
  rootCause: string;
  recommendation: string;
  priorityScore: number | string;
}

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ selectedAlarm }) => {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAlarm) {
      handleAnalysis();
    } else {
      setAnalysis(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAlarm]);

  const handleAnalysis = async () => {
    if (!selectedAlarm) return;
    
    setLoading(true);
    setError(null);
    setAnalysis(null);
    
    try {
      const resultJson = await analyzeAlarm(selectedAlarm);
      // Remove any markdown fencing if the model outputs it despite instructions
      const cleanJson = resultJson.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      setAnalysis(parsed);
    } catch (err) {
      console.error(err);
      setError("Failed to parse AI analysis. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedAlarm) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center border-l border-slate-200 bg-slate-50">
        <Bot className="h-12 w-12 mb-4 opacity-50" />
        <p className="text-sm">Select an alarm from the list to view Intelligent Analysis.</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-white border-l border-slate-200 flex flex-col shadow-xl z-20 w-full lg:w-96 fixed lg:relative right-0 top-0 bottom-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Bot className="h-5 w-5 text-nau-blue" />
            Smart Advisor
            </h3>
            {loading && <Loader2 className="h-4 w-4 animate-spin text-slate-400" />}
        </div>
        <p className="text-xs text-slate-500">
          Analyzing event ID: <span className="font-mono text-slate-700">{selectedAlarm.id}</span>
        </p>
      </div>

      <div className="p-6 flex-1 space-y-6">
        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
            <div className="h-24 bg-slate-200 rounded"></div>
            <div className="h-24 bg-slate-200 rounded"></div>
          </div>
        ) : error ? (
            <div className="p-4 bg-red-50 text-red-600 text-sm rounded-lg flex flex-col items-center gap-2">
                <p>{error}</p>
                <button 
                    onClick={handleAnalysis}
                    className="flex items-center gap-2 px-3 py-1 bg-white border border-red-200 rounded shadow-sm hover:bg-red-50 text-xs"
                >
                    <RefreshCw className="h-3 w-3" /> Retry
                </button>
            </div>
        ) : analysis ? (
          <>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">AI Summary</h4>
              <p className="text-sm text-blue-900 leading-relaxed">{analysis.summary}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Potential Root Cause</h4>
              <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                {analysis.rootCause}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Recommended Action</h4>
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                 <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                 <p className="text-sm text-emerald-900">{analysis.recommendation}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 font-medium">Urgency Score</span>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                                className={`h-full ${Number(analysis.priorityScore) > 7 ? 'bg-red-500' : 'bg-nau-gold'}`} 
                                style={{ width: `${Number(analysis.priorityScore) * 10}%` }}
                            />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{analysis.priorityScore}/10</span>
                    </div>
                </div>
            </div>
          </>
        ) : null}
      </div>
      
      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <p className="text-[10px] text-slate-400 text-center">
            AI analysis generated by Gemini 2.5 Flash. Verify all recommendations manually.
        </p>
      </div>
    </div>
  );
};