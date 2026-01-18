
import React from 'react';
import { GraduationCap, Users, Award, Globe, Info, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Hero Branding Section - Clean version without image */}
      <section className="bg-[#5851f2] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/20 group">
        {/* Decorative elements for the background (Geometric shapes from screenshot) */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/30 blur-[100px] -ml-40 -mb-40"></div>
        
        {/* Square decorative boxes from screenshot */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-white/5 border border-white/10 rounded-2xl hidden md:block"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-indigo-400/10 border border-white/5 rounded-full hidden md:block"></div>
        <div className="absolute top-1/2 right-8 w-20 h-20 bg-white/5 rounded-3xl -rotate-12 hidden lg:block"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo/Image section removed as per user request */}

          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">
            โรงเรียนมัธยมตากสินระยอง
          </h1>
          
          <p className="text-white/90 mb-12 max-w-2xl font-medium text-lg md:text-xl leading-relaxed mx-auto">
            มุ่งมั่นสร้างสรรค์นวัตกรรมการเรียนรู้ดิจิทัล เพื่อติดอาวุธทางปัญญาและทักษะทางการเงินที่ยั่งยืนให้แก่เยาวชนไทย
          </p>
          
          {/* Bottom Badges - Matching screenshot styling with glassy background */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 text-white font-bold bg-white/10 backdrop-blur-lg px-8 py-3 rounded-2xl border border-white/20 shadow-xl">
              <Award size={22} className="text-yellow-400" />
              <span className="text-sm md:text-base tracking-wide">โครงการพัฒนาสื่อการเรียนรู้</span>
            </div>
            <div className="flex items-center gap-3 text-white font-bold bg-white/10 backdrop-blur-lg px-8 py-3 rounded-2xl border border-white/20 shadow-xl">
              <Globe size={22} className="text-blue-300" />
              <span className="text-sm md:text-base tracking-wide">จังหวัดระยอง, ประเทศไทย</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group/card">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/card:opacity-10 transition-opacity">
            <Users size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
              <div className="p-3 bg-indigo-600/20 rounded-2xl">
                <Users className="text-indigo-400" size={24} />
              </div>
              คณะผู้จัดทำ
            </h2>
            <div className="space-y-5">
              {[
                { name: "นาย กันตพัฒน์ สิทธิเวช", role: "นักเรียนชั้นมัธยมศึกษา" },
                { name: "นาย จิรชาติ สุสา", role: "นักเรียนชั้นมัธยมศึกษา" },
                { name: "นางสาว ร่มฝน ประสิทธิ์สุขสันต์", role: "นักเรียนชั้นมัธยมศึกษา" }
              ].map((person, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group/item">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 font-black text-lg group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                    {person.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{person.name}</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group/card">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/card:opacity-10 transition-opacity">
            <GraduationCap size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
              <div className="p-3 bg-emerald-600/20 rounded-2xl">
                <GraduationCap className="text-emerald-400" size={24} />
              </div>
              ครูที่ปรึกษาโครงงาน
            </h2>
            <div className="space-y-5">
              {[
                { name: "นางสาวหทัยชนก ศรีทอง", role: "ครูประจำวิชา" },
                { name: "นางสาววาสินี ศรีทานนท์", role: "ครูประจำวิชา" }
              ].map((person, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700 group/item">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 font-black text-lg group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all">
                    {person.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{person.name}</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-14 text-center shadow-xl">
        <div className="max-w-3xl mx-auto">
          <Info className="text-indigo-500 mx-auto mb-6" size={40} />
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">About the Project</h2>
          <p className="text-slate-400 font-medium leading-relaxed mb-8">
            โครงงานสังคมศึกษา ศาสนาและวัฒนธรรม นี้ถูกพัฒนาขึ้นเพื่อให้เป็นศูนย์กลางการเรียนรู้ด้านเศรษฐศาสตร์ยุคใหม่ 
            โดยใช้เทคโนโลยีเข้ามาจำลองสถานการณ์ตลาดการเงินจริง เพื่อให้ผู้เรียนเห็นภาพและเข้าใจกลไกการลงทุนที่เป็นสากล 
            เตรียมความพร้อมสู่การเป็นพลเมืองที่มีทักษะทางการเงินที่ชาญฉลาด
          </p>
          <div className="inline-flex items-center gap-2 text-rose-500 font-black text-xs uppercase tracking-[0.2em] bg-rose-500/5 px-4 py-2 rounded-full border border-rose-500/10">
            <Heart size={14} fill="currentColor" /> Created with Heart for Education
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
