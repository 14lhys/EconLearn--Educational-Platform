
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, PieChart, TrendingUp, BookOpen, User, DollarSign, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'หน้าแรก', path: '/', icon: <Home size={18}/> },
    { name: 'ตลาดหุ้น', path: '/markets', icon: <PieChart size={18}/> },
    { name: 'คริปโต', path: '/crypto', icon: <TrendingUp size={18}/> },
    { name: 'ค่าเงิน', path: '/forex', icon: <DollarSign size={18}/> },
    { name: 'เรียนรู้', path: '/education', icon: <BookOpen size={18}/> },
    { name: 'รายการโปรด', path: '/favorites', icon: <Heart size={18}/> },
    { name: 'เกี่ยวกับเรา', path: '/about', icon: <User size={18}/> },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-500/20">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Econlearn
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-slate-800 border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold ${
                  location.pathname === link.path
                    ? 'text-white bg-slate-800'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
