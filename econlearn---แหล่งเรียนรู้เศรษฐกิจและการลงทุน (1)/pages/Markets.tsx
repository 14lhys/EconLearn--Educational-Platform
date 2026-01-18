
import React, { useState, useMemo } from 'react';
// Added missing Globe icon to the lucide-react imports
import { Activity, LayoutGrid, Search as SearchIcon, Globe } from 'lucide-react';
import { AssetType } from '../types';
import AssetCard from '../components/AssetCard';
import { useRealtimeData } from '../hooks/useRealtimeData';
import GlobalSearchSection from '../components/GlobalSearchSection';

const Markets: React.FC = () => {
  const allAssets = useRealtimeData();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | AssetType.STOCK | AssetType.FUND>('all');
  const [viewMode, setViewMode] = useState<'local' | 'global'>('local');

  const filteredItems = useMemo(() => {
    return allAssets
      .filter(item => item.type === AssetType.STOCK || item.type === AssetType.FUND)
      .filter(item => {
        const matchesSearch = item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTab = activeTab === 'all' || item.type === activeTab;
        return matchesSearch && matchesTab;
      });
  }, [searchTerm, activeTab, allAssets]);

  return (
    <div className="space-y-8 pb-12 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white flex items-center gap-3 tracking-tighter">
            <div className="p-2 bg-blue-600/20 rounded-2xl">
              <Activity className="text-blue-500" size={32} />
            </div>
            Markets Terminal
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
            Global Stocks & Mutual Funds Dashboard
          </p>
        </div>

        <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-2xl">
          <button 
            onClick={() => setViewMode('local')}
            className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${viewMode === 'local' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <LayoutGrid size={18} /> Local Assets
          </button>
          <button 
            onClick={() => setViewMode('global')}
            className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${viewMode === 'global' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Globe size={18} /> Global AI Search
          </button>
        </div>
      </div>

      {viewMode === 'global' ? (
        <div className="animate-fade-in">
          <GlobalSearchSection type="STOCK" placeholder="ค้นหาหุ้นทั่วโลก (เช่น NVDA, Apple, PTT)..." />
          <div className="mt-12">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3 opacity-50">
              <div className="w-8 h-px bg-slate-800"></div> Quick Access Local Markets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAssets.slice(0, 3).map(asset => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex bg-slate-900 p-1 rounded-2xl border border-slate-800 w-full md:w-fit">
              {[
                { id: 'all', label: 'ทั้งหมด' },
                { id: AssetType.STOCK, label: 'หุ้น' },
                { id: AssetType.FUND, label: 'กองทุนรวม' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 md:flex-none px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:max-w-sm group">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="ค้นหาในรายการจำลอง..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(asset => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-900 rounded-[2.5rem] p-24 text-center border border-dashed border-slate-800">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">ไม่พบข้อมูลในรายการจำลอง</p>
              <button 
                onClick={() => setViewMode('global')}
                className="mt-4 text-indigo-400 font-bold hover:underline"
              >
                ลองใช้ Global AI Search เพื่อหาข้อมูลทั่วโลก
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Markets;
