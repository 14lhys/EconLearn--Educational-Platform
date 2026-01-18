
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Info, Coins, Globe, Newspaper, ChevronRight, DollarSign, TrendingUp } from 'lucide-react';
import GeminiAnalyst from '../components/GeminiAnalyst';

const Home: React.FC = () => {
  const [showGoldDetail, setShowGoldDetail] = useState(false);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] -mr-40 -mt-40 group-hover:bg-indigo-600/20 transition-all duration-1000"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Educational Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            The Future of <br/>
            <span className="text-indigo-500">Financial</span> Literacy
          </h1>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed max-w-xl font-medium">
            เรียนรู้ระบบเศรษฐกิจและกลไกการลงทุนสากลแบบเข้าใจง่าย 
            ผ่านข้อมูลจำลองแบบเรียลไทม์เพื่อนักเรียนและนักลงทุนรุ่นใหม่
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/education" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-3">
              เริ่มเรียนรู้เดี๋ยวนี้ <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          {/* Market Summary */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-xl">
                  <Landmark className="text-indigo-400" size={20} />
                </div>
                ภาพรวมเศรษฐกิจโลก
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-lg">
                <Globe size={28} className="text-indigo-500 mb-4" />
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">GDP Growth</h3>
                <p className="text-emerald-500 font-mono font-bold text-3xl">+2.5%</p>
                <div className="mt-4 pt-4 border-t border-slate-800 text-[10px] text-slate-600 font-bold uppercase">Forecast 2024</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-lg">
                <Info size={28} className="text-rose-500 mb-4" />
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">Inflation Rate</h3>
                <p className="text-white font-mono font-bold text-3xl">1.2%</p>
                <div className="mt-4 pt-4 border-t border-slate-800 text-[10px] text-slate-600 font-bold uppercase">Target Zone</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-lg">
                <DollarSign size={28} className="text-amber-500 mb-4" />
                <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">Interest Rate</h3>
                <p className="text-indigo-500 font-mono font-bold text-3xl">2.50%</p>
                <div className="mt-4 pt-4 border-t border-slate-800 text-[10px] text-slate-600 font-bold uppercase">Central Bank</div>
              </div>
            </div>
          </section>

          {/* Gold Section */}
          <section className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="bg-amber-500/10 p-4 rounded-2xl text-amber-500 border border-amber-500/20">
                    <Coins size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">ตลาดทองคำสากล</h2>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Safe Haven Asset Class</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowGoldDetail(!showGoldDetail)}
                  className="bg-slate-800 text-slate-300 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all border border-slate-700"
                >
                  {showGoldDetail ? 'HIDE DATA' : 'EXPLORE DETAILS'}
                </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-slate-950/50 border border-slate-800 rounded-3xl p-8 text-center">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Live Gold Quote (THB)</p>
                   <div className="text-4xl font-black text-white mb-4 font-mono tracking-tighter">40,250 / 40,350</div>
                   <div className="inline-flex items-center gap-2 text-emerald-500 font-bold text-xs bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                      <TrendingUp size={16} /> +150 (+0.37%)
                   </div>
                </div>
                <div className="flex items-center px-6">
                   <p className="text-base text-slate-400 font-medium italic leading-relaxed">
                     "ทองคำถูกมองว่าเป็นเงินที่แท้จริงในยามวิกฤต ช่วยรักษาอำนาจซื้อของนักลงทุนจากการลดมูลค่าของเงินเฟ้อ"
                   </p>
                </div>
             </div>

             {showGoldDetail && (
               <div className="mt-10 pt-10 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in relative z-10">
                  <div className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
                    <h4 className="font-bold text-amber-500 mb-2 uppercase tracking-widest text-xs">Market Sentiment</h4>
                    <p className="text-sm text-slate-400 font-medium">สภาวะสงครามและการชะลอการลดดอกเบี้ยของธนาคารกลางสหรัฐฯ เป็นแรงผลักดันหลัก</p>
                  </div>
                  <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                    <h4 className="font-bold text-indigo-400 mb-2 uppercase tracking-widest text-xs">Investor Note</h4>
                    <p className="text-sm text-slate-400 font-medium">ทองคำแท่ง (96.5%) คือมาตรฐานหลักในไทย แต่ Gold Spot อ้างอิงราคาตลาดโลก</p>
                  </div>
               </div>
             )}
          </section>
        </div>

        <div className="space-y-10">
          <GeminiAnalyst />
          
          <section className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-slate-800 rounded-lg">
                <Newspaper size={18} className="text-indigo-400" />
              </div>
              Latest Headlines
            </h2>
            <div className="space-y-6">
              {[
                { title: "NVIDIA ทุบสถิติมูลค่าตลาดใหม่", cat: "Global Stock", time: "10m ago" },
                { title: "SET Index ปิดลบเล็กน้อยรับวันหยุด", cat: "Thai Stock", time: "2h ago" },
                { title: "Bitcoin Halving ส่งผลราคาผันผวน", cat: "Crypto", time: "4h ago" }
              ].map((n, i) => (
                <div key={i} className="group cursor-pointer border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{n.cat}</span>
                    <span className="text-[10px] font-bold text-slate-600">{n.time}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">{n.title}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
