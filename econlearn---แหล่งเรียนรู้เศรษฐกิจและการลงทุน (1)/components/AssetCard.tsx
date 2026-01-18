
import React, { useEffect, useState } from 'react';
import { Heart, TrendingUp, TrendingDown, Minus, Globe } from 'lucide-react';
import { Asset, AssetType } from '../types';
import { useFavorites } from '../context/FavoriteContext';

interface AssetCardProps {
  asset: Asset;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [flash, setFlash] = useState<string | null>(null);
  const fav = isFavorite(asset.id);

  useEffect(() => {
    if (asset.price) {
      setFlash(asset.trend === 'up' ? 'ring-2 ring-emerald-500/50 bg-emerald-500/5' : 'ring-2 ring-rose-500/50 bg-rose-500/5');
      const timer = setTimeout(() => setFlash(null), 400);
      return () => clearTimeout(timer);
    }
  }, [asset.price]);

  const getTrendIcon = () => {
    switch (asset.trend) {
      case 'up': return <TrendingUp size={14} className="text-emerald-500" />;
      case 'down': return <TrendingDown size={14} className="text-rose-500" />;
      default: return <Minus size={14} className="text-slate-500" />;
    }
  };

  const isCrypto = asset.type === AssetType.CRYPTO;

  return (
    <div className={`rounded-2xl border border-slate-800 p-5 transition-all duration-300 ${flash || 'bg-slate-900/50 hover:bg-slate-900'} hover:border-slate-700 shadow-xl group relative overflow-hidden`}>
      {asset.isGlobal && (
        <div className="absolute top-0 right-12 bg-indigo-600/20 px-2 py-0.5 rounded-b-lg border-x border-b border-indigo-500/30 flex items-center gap-1">
          <Globe size={8} className="text-indigo-400" />
          <span className="text-[7px] font-black text-indigo-400 uppercase tracking-tighter">Global AI Feed</span>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {isCrypto && asset.logoUrl ? (
            <img src={asset.logoUrl} alt={asset.symbol} className="w-10 h-10 rounded-full bg-slate-800 p-1.5" />
          ) : (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-lg ${
              asset.type === AssetType.STOCK ? 'bg-indigo-600' : asset.type === AssetType.CRYPTO ? 'bg-amber-600' : 'bg-purple-600'
            }`}>
              {asset.symbol ? asset.symbol[0] : '?'}
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white tracking-tight uppercase">{asset.symbol}</h3>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-bold border border-slate-700">
                {asset.type}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 truncate max-w-[130px] font-medium">{asset.name}</p>
          </div>
        </div>
        <button 
          onClick={() => toggleFavorite(asset)}
          className={`p-2 rounded-xl transition-all ${fav ? 'bg-rose-500/20 text-rose-500' : 'bg-slate-800 text-slate-600 hover:text-rose-400'}`}
        >
          <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Market Price</p>
          <p className="text-2xl font-bold text-white font-mono leading-none">
            {typeof asset.price === 'number' ? asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'N/A'}
          </p>
        </div>
        <div className="text-right">
          <div className={`flex items-center gap-1 font-bold text-sm px-2 py-1 rounded-lg ${
            asset.change > 0 ? 'text-emerald-500 bg-emerald-500/10' : asset.change < 0 ? 'text-rose-500 bg-rose-500/10' : 'text-slate-500 bg-slate-800'
          }`}>
            {getTrendIcon()}
            {asset.change > 0 ? '+' : ''}{asset.change}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
