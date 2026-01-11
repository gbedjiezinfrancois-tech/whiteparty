import { Facebook, Instagram, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from './Router';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Effet de lueur en arrière-plan */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c65a21]/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* --- COLONNE 1 : BRAND --- */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-6 italic">
              WHITE <span className="text-[#c65a21]">PARTY</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              L'événement incontournable qui rassemble la jeunesse de Paouignan autour d'une expérience unique et d'un "chill" d'exception.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c65a21] hover:border-[#c65a21] transition-all duration-300 group">
                <Instagram size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c65a21] hover:border-[#c65a21] transition-all duration-300 group">
                <Facebook size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* --- COLONNE 2 : NAVIGATION --- */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Prestations', 'Billetterie', 'Galerie', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-0 h-[1px] bg-[#c65a21] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLONNE 3 : CONTACTS --- */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Infos Pratiques</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#c65a21]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">Appelez-nous</p>
                  <p className="text-gray-300 text-sm font-medium">+229 67 82 95 34</p>
                  <p className="text-gray-300 text-sm font-medium">+229 96 53 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#c65a21]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">Localisation</p>
                  <p className="text-gray-300 text-sm font-medium">Paouignan, Bénin</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLONNE 4 : NEWSLETTER/CTA --- */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Ready ?</h4>
            <p className="text-gray-400 text-sm mb-6 font-light">
              Ne manque aucune mise à jour de l'édition 2026.
            </p>
            <Link 
              to="/billetterie" 
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#c65a21] hover:text-white transition-all shadow-xl"
            >
              Réserver ma place
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-[11px] uppercase tracking-widest">
            © {currentYear} White Party Paouignan. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gray-500">
            Designed by 
            <span className="text-white font-black hover:text-[#c65a21] transition-colors cursor-pointer">
              TCB
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};