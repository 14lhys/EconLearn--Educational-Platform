
import React, { useState } from 'react';
import { ArrowRightLeft, AlertCircle, Clock, Calendar } from 'lucide-react';

const Forex: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('THB');

  const rates: Record<string, number> = {
    'USD': 36.5,
    'EUR': 39.2,
    'JPY': 0.24,
    'GBP': 46.1,
    'THB': 1
  };

  const convert = () => {
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    return (amount * fromRate / toRate).toLocaleString(undefined, { maximumFractionDigits: 4 });
  };

  const news = [
    { id: '1', time: '19:30', currency: 'USD', impact: 'danger', title: 'Non-Farm Employment Change', desc: 'High Impact: แรงขับเคลื่อนสำคัญของค่าเงิน USD' },
    { id: '2', time: '21:00', currency: 'USD', impact: 'high', title: 'ISM Services PMI', desc: 'Economic Indicator: สะท้อนความแข็งแกร่งภาคบริการ' },
    { id: '3', time: '15:30', currency: 'GBP', impact: 'medium', title: 'Construction PMI', desc: 'Medium Impact: กระตุ้นการแกว่งตัวของค่าเงินปอนด์' },
    { id: '4', time: '13:00', currency: 'EUR', impact: 'low', title: 'German Trade Balance', desc: 'Low Impact: ข้อมูลการค้าเยอรมนี' },
  ];

  const getImpactBadge = (impact: string) => {
    switch(impact) {
      case 'low': return <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">📗 LOW</span>;
      case 'medium': return <span className="text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border border-yellow-500/20">📒 MEDIUM</span>;
      case 'high': return <span className="text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border border-orange-500/20">📙 HIGH</span>;
      case 'danger': return <span className="text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border border-rose-500/20">📕 CRITICAL</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <section>
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-white tracking-tight mb-3">Currency Terminal</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Global Exchange Rates & Economic Calendar</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-10">
            <div className="space-y-6">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Amount Input</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full text-4xl font-black bg-transparent border-b-2 border-slate-800 text-white focus:border-indigo-500 transition-colors focus:outline-none pb-3 font-mono"
              />
              <select 
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 font-bold text-slate-300 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr} - International Code</option>)}
              </select>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const temp = fromCurrency;
                  setFromCurrency(toCurrency);
                  setToCurrency(temp);
                }}
                className="bg-slate-800 text-indigo-400 p-5 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-xl border border-slate-700 active:scale-95"
              >
                <ArrowRightLeft size={28} />
              </button>
            </div>

            <div className="space-y-6">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Result Quote</label>
              <div className="text-4xl font-black text-indigo-400 border-b-2 border-slate-800 pb-3 font-mono truncate">
                {convert()}
              </div>
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 font-bold text-slate-300 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                {Object.keys(rates).map(curr => <option key={curr} value={curr}>{curr} - International Code</option>)}
              </select>
            </div>
          </div>
          <div className="mt-12 text-center text-[10px] font-bold text-slate-600 flex items-center justify-center gap-2 uppercase tracking-widest">
            <AlertCircle size={14} /> 1 {fromCurrency} = {(rates[fromCurrency] / rates[toCurrency]).toFixed(4)} {toCurrency} • Real-time Data Feed Simulation
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2 bg-slate-800 rounded-xl">
            <Calendar className="text-indigo-400" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Financial Calendar</h2>
        </div>
        
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950 border-b border-slate-800">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Time (UTC)</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Currency</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Impact Level</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Event Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-slate-400 font-bold font-mono">
                        <Clock size={14} className="text-indigo-500" /> {item.time}
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap font-black text-white">
                      {item.currency}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      {getImpactBadge(item.impact)}
                    </td>
                    <td className="px-8 py-6">
                      <div className="font-bold text-slate-200 mb-1 leading-snug">{item.title}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{item.desc}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forex;
