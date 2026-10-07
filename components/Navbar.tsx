import React, { useState, useEffect } from 'react';
import { Bell, Search, Menu, X, LogOut } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Início", "Trilhas", "Materiais", "Minha Lista"];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0D0E12]/95 backdrop-blur-md shadow-2xl border-b border-[#282A36]/60 py-2.5' : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <div className="cursor-pointer hover:opacity-90 transition-opacity hover:scale-[1.02] transform duration-300">
              <Logo className="h-8 md:h-9" variant="dark" />
            </div>
            <div className="hidden md:flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="group relative text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5A623] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-6">
            <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-[#F5A623] transition-all hover:scale-110" />
            <div className="relative group">
              <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-[#F5A623] transition-all hover:scale-110 group-hover:animate-swing" />
              <span className="absolute -top-1 -right-1 bg-[#F5A623] text-black font-extrabold text-[10px] w-4 h-4 flex items-center justify-center rounded-full shadow-sm">2</span>
            </div>
            <div className="group relative flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F5A623] to-[#D98208] flex items-center justify-center text-neutral-950 font-extrabold text-xs shadow-md shadow-amber-500/20 transform transition-transform group-hover:scale-105 border border-amber-300/40">
                EC
              </div>
              {/* Dropdown with animation */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#16171E] rounded-md shadow-2xl py-2 hidden group-hover:block border border-[#282A36] animate-fade-in origin-top-right">
                 <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#20222B] hover:text-[#F5A623] w-full text-left transition-colors">
                   <LogOut size={14} /> Sair
                 </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white transition-transform active:scale-90">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121318] border-t border-[#282A36] animate-slide-up">
          <div className="px-3 pt-3 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-[#F5A623] hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link}
              </a>
            ))}
            <button onClick={onLogout} className="text-amber-400 hover:text-amber-300 hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
              Sair
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};