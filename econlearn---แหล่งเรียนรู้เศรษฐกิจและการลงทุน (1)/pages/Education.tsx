
import React from 'react';
import { BookOpen, UserCheck, Target, BarChart3, TrendingUp, HandCoins, Info, ArrowRight } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="space-y-20 pb-20 transition-colors duration-500">
      <section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            Learning Terminal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Knowledge Center
          </h1>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            ปูพื้นฐานการเงินให้แข็งแกร่ง เพื่อการเติบโตของพอร์ตการลงทุนที่มั่นคงในอนาคต 
            เรียนรู้ผ่านหลักการที่เป็นสากลและเข้าใจง่าย
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Basic Econ */}
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-600/10 transition-all"></div>
            
            <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
              <div className="p-2.5 bg-indigo-600/20 rounded-xl">
                <BookOpen className="text-indigo-400" size={24} />
              </div>
              เศรษฐศาสตร์เบื้องต้น
            </h2>
            
            <div className="space-y-8 relative z-10">
              <div className="border-l-2 border-indigo-500/30 pl-6 group/item hover:border-indigo-500 transition-colors">
                <h3 className="font-bold text-xl text-white mb-2">1. Demand & Supply</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  กฎพื้นฐานของตลาด เมื่อคนอยากซื้อเยอะแต่ของมีน้อย (อุปทานต่ำ) ราคาจะพุ่งขึ้น 
                  เมื่อของเยอะแต่คนไม่อยากได้ ราคาจะลดลง
                </p>
              </div>
              <div className="border-l-2 border-indigo-500/30 pl-6 group/item hover:border-indigo-500 transition-colors">
                <h3 className="font-bold text-xl text-white mb-2">2. กลไกราคา (Price Mechanism)</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  การทำงานร่วมกันของตลาดเพื่อหา "ราคาดุลยภาพ" หรือราคาที่ทั้งคนซื้อและคนขายพอใจที่สุด 
                  เป็นหัวใจของระบบทุนนิยม
                </p>
              </div>
              <div className="border-l-2 border-indigo-500/30 pl-6 group/item hover:border-indigo-500 transition-colors">
                <h3 className="font-bold text-xl text-white mb-2">3. นโยบายการเงินและการคลัง</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  วิธีที่รัฐบาลและธนาคารกลาง (Central Bank) ควบคุมทิศทางเศรษฐกิจ 
                  ผ่านการเก็บภาษี การใช้จ่ายภาครัฐ และการปรับอัตราดอกเบี้ย
                </p>
              </div>
            </div>
          </div>

          {/* How to profit */}
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-600/10 transition-all"></div>
            
            <h2 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
              <div className="p-2.5 bg-emerald-600/20 rounded-xl">
                <HandCoins className="text-emerald-400" size={24} />
              </div>
              วิธีสร้างกำไรจากการลงทุน
            </h2>
            
            <div className="space-y-10 relative z-10">
              <div className="flex gap-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 flex-shrink-0 font-black text-xl">1</div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">Capital Gain</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    กำไรจากส่วนต่างราคา ซื้อของราคาถูกไปขายในราคาที่แพงกว่า 
                    เป็นวิธีหลักของนักลงทุนส่วนใหญ่ในตลาด
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 flex-shrink-0 font-black text-xl">2</div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">Dividends (Passive Income)</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    ส่วนแบ่งผลกำไรที่บริษัทหรือกองทุนมอบให้ตามสัดส่วนการถือหุ้น 
                    เหมือนเราเป็นหุ้นส่วนและได้รับค่าตอบแทนสม่ำเสมอ
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 flex-shrink-0 font-black text-xl">3</div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">Asset Backed Lending</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    การนำสินทรัพย์ที่มีมูลค่าไปค้ำประกันเพื่อกู้ยืมเงินออกมาลงทุนต่อ 
                    ช่วยเพิ่มสภาพคล่องโดยไม่ต้องขายสินทรัพย์ทิ้ง
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-black uppercase tracking-widest text-[10px] mb-4">
            Investor Profiles
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white flex items-center justify-center gap-4">
            <UserCheck className="text-indigo-500" size={40} /> 
            3 รูปแบบนักลงทุน
          </h2>
          <p className="text-slate-500 font-bold mt-4 uppercase tracking-widest text-xs">คุณเหมาะกับการเป็นนักลงทุนสายไหน?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trader */}
          <div className="bg-slate-900 border-t-4 border-rose-600 rounded-[2rem] p-8 shadow-2xl hover:bg-slate-800/80 transition-all duration-300 group">
            <div className="p-4 bg-rose-600/10 rounded-2xl w-fit mb-8 group-hover:bg-rose-600/20 transition-all">
              <TrendingUp size={32} className="text-rose-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 italic">1. Trader</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
              นักเก็งกำไรระยะสั้น เน้นความเร็วและเทคนิคคอล ใช้ได้กับทุกตลาดที่ผันผวน 
              กำไรมาจากการแกว่งตัวของราคา
            </p>
            <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-black text-xs text-rose-500 mb-3 uppercase tracking-widest">Focus: Forex & Day Trade</h4>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                ใช้กราฟ สถิติ และจิตวิทยาการลงทุนเป็นหลัก เน้นการตัดสินใจที่เฉียบคมและวินัยในการตัดขาดทุน (Cut Loss)
              </p>
            </div>
          </div>

          {/* VI */}
          <div className="bg-slate-900 border-t-4 border-indigo-600 rounded-[2rem] p-8 shadow-2xl hover:bg-slate-800/80 transition-all duration-300 group">
            <div className="p-4 bg-indigo-600/10 rounded-2xl w-fit mb-8 group-hover:bg-indigo-600/20 transition-all">
              <Target size={32} className="text-indigo-400" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 italic">2. Value Investor</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
              สายคุณค่า ลงทุนระยะยาวเหมือนเป็นเจ้าของกิจการตัวจริง 
              มองหา "ของดีราคาถูก" ที่ตลาดมองข้าม
            </p>
            <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-black text-xs text-indigo-400 mb-3 uppercase tracking-widest">Target: Market Winner</h4>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                วิเคราะห์งบการเงิน พื้นฐานธุรกิจ และความได้เปรียบทางการแข่งขัน 
                เป้าหมายคือผลตอบแทนชนะดัชนีตลาดระยะยาว
              </p>
            </div>
          </div>

          {/* DCA */}
          <div className="bg-slate-900 border-t-4 border-emerald-600 rounded-[2rem] p-8 shadow-2xl hover:bg-slate-800/80 transition-all duration-300 group">
            <div className="p-4 bg-emerald-600/10 rounded-2xl w-fit mb-8 group-hover:bg-emerald-600/20 transition-all">
              <BarChart3 size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 italic">3. Passive / DCA</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
              ลงทุนสม่ำเสมอตามค่าเฉลี่ยตลาด ไม่สนความผันผวน 
              ใช้พลังของ "ดอกเบี้ยทบต้น" เป็นตัวขับเคลื่อนพอร์ต
            </p>
            <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-black text-xs text-emerald-400 mb-3 uppercase tracking-widest">Strategy: Regular Savings</h4>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                นิยมลงทุนในกองทุนดัชนี (Index Funds) สะสมไปเรื่อยๆ จนเกิดความมั่งคั่ง 
                เหมาะสำหรับผู้ที่ต้องการออมเงินระยะยาว
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">พร้อมสำรวจตลาดจริงหรือยัง?</h2>
          <p className="text-slate-400 mb-8 font-medium max-w-lg mx-auto">
            ใช้ความรู้ที่คุณได้เรียนมา ไปลองติดตามราคาหุ้นและคริปโตแบบเรียลไทม์ในเทอร์มินัลของเรา
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/markets" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2">
              ไปที่ตลาดหุ้น <ArrowRight size={20} />
            </a>
            <a href="#/crypto" className="bg-slate-800 text-slate-300 border border-slate-700 px-10 py-4 rounded-2xl font-black hover:bg-slate-700 transition-all flex items-center gap-2">
              ตลาดคริปโต
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
