
import React from 'react';
import { Heart, Trash2, Search, ArrowRight } from 'lucide-react';
import { useFavorites } from '../context/FavoriteContext';
import AssetCard from '../components/AssetCard';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { favoriteObjects } = useFavorites();
  
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">My Watchlist</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">รายการสินทรัพย์ที่คุณติดตามเป็นพิเศษ</p>
        </div>
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 px-6 py-2.5 rounded-2xl font-black flex items-center gap-2 shadow-lg shadow-rose-500/5">
          <Heart fill="currentColor" size={20} />
          {favoriteObjects.length} ASSETS
        </div>
      </div>

      {favoriteObjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {favoriteObjects.map(asset => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 rounded-[2.5rem] p-16 md:p-24 text-center border border-slate-800 flex flex-col items-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-all duration-700"></div>
          
          <div className="bg-slate-950 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 text-slate-700 border border-slate-800 shadow-inner relative z-10">
            <Heart size={48} className="animate-pulse" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4">ยังไม่มีรายการโปรด</h2>
            <p className="text-slate-400 mb-10 max-w-sm mx-auto font-medium leading-relaxed">
              เริ่มต้นสร้าง Watchlist ของคุณเองโดยกดปุ่ม <span className="text-rose-500 font-bold">❤️</span> บนหุ้น กองทุน หรือเหรียญคริปโตที่คุณต้องการติดตาม
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/markets" className="bg-indigo-600 text-white px-8 py-3.5 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2">
                สำรวจตลาดหุ้น <ArrowRight size={18} />
              </Link>
              <Link to="/crypto" className="bg-slate-800 text-slate-300 border border-slate-700 px-8 py-3.5 rounded-2xl font-black hover:bg-slate-700 transition-all">
                ไปที่คริปโต
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
