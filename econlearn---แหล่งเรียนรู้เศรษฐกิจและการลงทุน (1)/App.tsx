
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Markets from './pages/Markets';
import Crypto from './pages/Crypto';
import Forex from './pages/Forex';
import Education from './pages/Education';
import Favorites from './pages/Favorites';
import About from './pages/About';
import { FavoriteProvider } from './context/FavoriteContext';

const App: React.FC = () => {
  return (
    <FavoriteProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-500">
          <Navbar />
          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/education" element={<Education />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          
          <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-white text-2xl font-black mb-6 flex items-center gap-2">
                  <div className="bg-indigo-600 p-1 rounded shadow-lg">E</div> Econlearn
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">
                  Financial knowledge hub for students. Built for education to empower the next generation of investors.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">สำรวจตลาด</h4>
                <ul className="space-y-3 text-sm text-slate-500 font-bold">
                  <li><a href="#/markets" className="hover:text-indigo-400 transition-colors">SET Thailand</a></li>
                  <li><a href="#/markets" className="hover:text-indigo-400 transition-colors">Global Equities</a></li>
                  <li><a href="#/crypto" className="hover:text-indigo-400 transition-colors">Crypto Tickers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">จัดทำโดย</h4>
                <p className="text-sm text-slate-400 font-medium leading-loose">
                  โรงเรียนมัธยมตากสินระยอง<br />
                  RAYONG, THAILAND<br />
                  <span className="text-indigo-400 text-xs font-bold">Social Studies Project</span>
                </p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center">
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                © 2024 Econlearn Educational Project • All Rights Reserved
              </p>
              <p className="text-[9px] text-slate-700 mt-2">Simulation data only. Not for actual trading advice.</p>
            </div>
          </footer>
        </div>
      </Router>
    </FavoriteProvider>
  );
};

export default App;
