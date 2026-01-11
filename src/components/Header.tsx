import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from './Router';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/prestations', label: 'Prestations' },
    { to: '/billetterie', label: 'Billetterie' },
    { to: '/galerie', label: 'Galerie' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#c65a21]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.ibb.co/Z6kkjLF3/f1269311-0fc3-4502-ae53-d022c24481a3.jpg" 
                alt="White Party Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wider group"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON DESKTOP */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className="bg-white text-[#c65a21] px-6 py-2.5 rounded-[15px] font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2"
              >
                <Calendar size={18} />
                Nous contacter
              </Link>
            </div>

            {/* MOBILE MENU BUTTON (Légèrement décalé à gauche si besoin) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE NAVIGATION (SIDEBAR) --- */}
      
      {/* 1. Overlay (Fond sombre) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 2. Sidebar Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#c65a21] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header du menu mobile */}
          <div className="flex items-center justify-between mb-8">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-1 hover:bg-white/10 rounded-full"
            >
              <X size={28} />
            </button>
          </div>

          {/* Liens du menu */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/90 hover:text-white py-4 text-lg font-medium border-b border-white/10 flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button en bas du menu */}
          <div className="mt-auto">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full bg-white text-[#c65a21] py-4 rounded-[15px] font-bold uppercase tracking-widest shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={20} />
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};