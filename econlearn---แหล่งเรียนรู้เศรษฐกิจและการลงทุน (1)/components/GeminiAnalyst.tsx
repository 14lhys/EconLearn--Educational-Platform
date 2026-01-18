import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, BrainCircuit, RefreshCw } from 'lucide-react';

const GeminiAnalyst: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInsight = async () => {
    setLoading(true);
    try {
      // Use the injected API_KEY directly as per SDK guidelines; assume it is pre-configured and accessible.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'วิเคราะห์สภาวะตลาดการเงินโลก หุ้น และคริปโตวันนี้แบบสั้นๆ กระชับ เน้นข้อมูลสำคัญ 3 ข้อ และคำแนะนำการออมเงินสำหรับนักเรียนวัยรุ่น',
      });
      // Correctly access the .text property (not a method) as per SDK requirements.
      setInsight(response.text || 'Market analysis unavailable.');
    } catch (error) {
      console.error('Gemini API Error:', error);
      setInsight('ระบบวิเคราะห์กำลังรีเซ็ตข้อมูลตลาด โปรดลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsight();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <div className="p-2 bg-indigo-500/20 rounded-xl">
            <BrainCircuit className="text-indigo-400" size={20} />
          </div>
          AI Market Insight
        </h2>
        <button 
          onClick={fetchInsight}
          disabled={loading}
          className="p-2 text-slate-400 hover:text-white transition-colors disabled:opacity-30"
        >
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {loading ? (
        <div className="py-12 flex flex-col items-center justify-center text-slate-500">
          <Loader2 className="animate-spin mb-4" size={32} />
          <p className="text-sm font-medium animate-pulse">Scanning global markets...</p>
        </div>
      ) : (
        <div className="relative z-10">
          <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line space-y-4 font-medium italic opacity-90">
            {insight}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              <Sparkles size={12} /> Live Intelligence
            </div>
            <span className="text-[10px] text-slate-600 font-bold uppercase">Gemini 3 Flash</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAnalyst;