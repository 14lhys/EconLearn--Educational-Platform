import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Search, Loader2, Globe, ExternalLink, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { Asset, AssetType } from '../types';
import AssetCard from './AssetCard';

interface GlobalSearchSectionProps {
  type: 'STOCK' | 'CRYPTO';
  placeholder: string;
}

const GlobalSearchSection: React.FC<GlobalSearchSectionProps> = ({ type, placeholder }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState<string | null>(null);
  const [extractedAsset, setExtractedAsset] = useState<Asset | null>(null);
  const [sources, setSources] = useState<{ title: string; uri: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResultText(null);
    setExtractedAsset(null);
    setSources([]);

    try {
      // Direct initialization with the environment variable; assume it exists and is valid.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = type === 'STOCK' 
        ? `ขอข้อมูลราคาหุ้นล่าสุดและสรุปสั้นๆ ของ "${query}" ในตลาดโลกวันนี้ โดยในบรรทัดสุดท้ายให้แสดงผลในรูปแบบบรรทัดเดียวดังนี้เท่านั้น:
           METADATA: [Symbol]|[Company Name]|[Current Price Number]|[Change Percentage Number]
           ตัวอย่าง: METADATA: NVDA|NVIDIA Corporation|850.25|2.5
           วิเคราะห์ข่าวสำคัญสั้นๆ 3 ข้อด้านบนบรรทัดนี้`
        : `ขอข้อมูลราคาล่าสุดและสรุปสถานะตลาดของคริปโต "${query}" วันนี้ โดยในบรรทัดสุดท้ายให้แสดงผลในรูปแบบบรรทัดเดียวดังนี้เท่านั้น:
           METADATA: [Symbol]|[Coin Name]|[Current Price Number]|[Change Percentage Number]
           ตัวอย่าง: METADATA: BTC|Bitcoin|62000.50|1.2
           วิเคราะห์แนวโน้มข่าวสำคัญ 3 ข้อด้านบนบรรทัดนี้`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      // Correctly access the .text property (not a method).
      const fullText = response.text || '';
      setResultText(fullText);
      
      const metaLine = fullText.split('\n').find(line => line.includes('METADATA:'));
      if (metaLine) {
        const parts = metaLine.replace('METADATA:', '').trim().split('|');
        if (parts.length >= 4) {
          const symbol = parts[0].trim();
          const name = parts[1].trim();
          const priceStr = parts[2].trim().replace(/,/g, '');
          const price = parseFloat(priceStr);
          const change = parseFloat(parts[3].trim());
          
          const newAsset: Asset = {
            id: `global-${type}-${symbol}-${Date.now()}`,
            symbol: symbol,
            name: name,
            price: isNaN(price) ? 0 : price,
            change: isNaN(change) ? 0 : change,
            type: type === 'STOCK' ? AssetType.STOCK : AssetType.CRYPTO,
            trend: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
            isGlobal: true
          };
          setExtractedAsset(newAsset);
        }
      }

      // Extract website URLs from groundingChunks as required when using googleSearch.
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const extractedSources = chunks
          .filter((chunk: any) => chunk.web)
          .map((chunk: any) => ({
            title: chunk.web.title,
            uri: chunk.web.uri,
          }));
        setSources(extractedSources);
      }
    } catch (err) {
      console.error(err);
      setError('เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI โปรดลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="block w-full pl-12 pr-32 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-xl"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Globe size={18} />}
          {loading ? 'Searching...' : 'Global Search'}
        </button>
      </form>

      {loading && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4 animate-pulse">
          <div className="p-4 bg-indigo-500/10 rounded-full">
            <Sparkles className="text-indigo-400 animate-bounce" size={32} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight">AI กำลังวิเคราะห์ตลาดโลก...</h3>
            <p className="text-slate-500 text-sm">กำลังเชื่อมต่อข้อมูลเรียลไทม์จากแหล่งข้อมูลสากล</p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-2xl flex items-start gap-4 text-rose-400">
          <div className="mt-1 p-2 bg-rose-500/20 rounded-lg">
            <AlertCircle size={20} />
          </div>
          <div>
            <h4 className="font-bold mb-1">แจ้งเตือนระบบ</h4>
            <p className="text-sm font-medium opacity-80 leading-relaxed">{error}</p>
          </div>
        </div>
      )}

      {extractedAsset && (
        <div className="animate-fade-in mb-6">
          <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ml-2">
            <TrendingUp size={12} /> AI Detected Market Asset
          </h4>
          <div className="max-w-md">
            <AssetCard asset={extractedAsset} />
          </div>
        </div>
      )}

      {resultText && (
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <TrendingUp size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-600/20 rounded-lg">
                <Sparkles className="text-indigo-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">AI Analysis: {query.toUpperCase()}</h3>
            </div>
            
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 whitespace-pre-line font-medium text-lg italic opacity-95">
              {resultText.split('METADATA:')[0]}
            </div>

            {sources.length > 0 && (
              <div className="mt-10 pt-8 border-t border-slate-800">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Globe size={12} /> Sources from Web Grounding
                </h4>
                <div className="flex flex-wrap gap-3">
                  {sources.slice(0, 3).map((source, i) => (
                    <a
                      key={i}
                      href={source.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-all group"
                    >
                      <span className="truncate max-w-[150px]">{source.title}</span>
                      <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearchSection;