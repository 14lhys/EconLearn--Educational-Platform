
import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, Zap, Activity, Globe, LayoutGrid } from 'lucide-react';
import AssetCard from '../components/AssetCard';
import { AssetType } from '../types';
import { useRealtimeData } from '../hooks/useRealtimeData';
import GlobalSearchSection from '../components/GlobalSearchSection';

const Crypto: React.FC = () => {
  const allAssets = useRealtimeData();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'local' | 'global'>('local');

  const filteredCryptos = useMemo(() => {
    return allAssets
      .filter(asset => asset.type === AssetType.CRYPTO)
      .filter(coin => 
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, allAssets]);

  return (
    <div className="space-y-8 pb-12 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white flex items-center gap-3 tracking-tighter">
            <div className="p-2 bg-amber-500/10 rounded-2xl">
              <Zap className="text-amber-500 fill-amber-500" size={32} />
            </div>
            Crypto Hub
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Real-time Global Market Tickers
          </p>
        </div>

        <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-2xl">
          <button 
            onClick={() => setViewMode('local')}
            className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${viewMode === 'local' ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <LayoutGrid size={18} /> Top Coins
          </button>
          <button 
            onClick={() => setViewMode('global')}
            className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${viewMode === 'global' ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Globe size={18} /> AI Coin Search
          </button>
        </div>
      </div>

      {viewMode === 'global' ? (
        <div className="animate-fade-in">
          <GlobalSearchSection type="CRYPTO" placeholder="ค้นหาเหรียญคริปโตทั่วโลก (เช่น BTC, SOL, XRP)..." />
          <div className="mt-12">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3 opacity-50">
              <div className="w-8 h-px bg-slate-800"></div> Popular Assets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCryptos.slice(0, 3).map(asset => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          <div className="relative max-w-xl mx-auto group">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-400 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="ค้นหาในรายการเหรียญยอดนิยม..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCryptos.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Activity size={100} />
            </div>
            <div className="relative z-10">
              <h3 className="font-black text-amber-500 mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                <Activity size={18} /> Smart Trading Insights
              </h3>
              <p className="text-slate-300 leading-relaxed font-medium">
                คริปโตเคอร์เรนซีมีความผันผวนสูงมาก การใช้ AI Search เพื่อติดตามข่าวสาร (Sentiment Analysis) 
                ร่วมกับการวิเคราะห์กราฟเทคนิค เป็นกลยุทธ์ที่นักเทรดมืออาชีพนิยมใช้ในการจับจังหวะตลาด
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crypto;
