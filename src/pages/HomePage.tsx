import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Globe, 
  Sparkles, 
  ChevronRight, 
  Layout, 
  CheckCircle,
  PlayCircle,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ta couleur principale IMDF
  const brandBlue = "#003399";

  // Styles réutilisables du design "White Party" adaptés à IMDF
  const auraCardStyle = "relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20";
  const glowStyle = `absolute -inset-0.5 bg-gradient-to-r from-[#003399] to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#003399] selection:text-white">
      
      {/* NAVIGATION - STYLE GLASSMORPHISM */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#003399] rounded-lg flex items-center justify-center font-bold text-xl">I</div>
            <span className="font-black tracking-tighter text-xl">IMDF <span className="text-[#003399]">E-LEARNING</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Accueil</a>
            <a href="#" className="hover:text-white transition-colors">Cours</a>
            <a href="#" className="hover:text-white transition-colors">Instructeurs</a>
            <a href="#" className="hover:text-white transition-colors">Recrutement</a>
          </div>

          <div className="flex items-center gap-4">
             <button className="hidden sm:block text-sm font-bold hover:text-[#003399] transition-colors">Connexion</button>
             <button className="bg-[#003399] px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95">
               Inscription
             </button>
          </div>
        </div>
      </nav>

      {/* --- SECTION HERO (SANS SCROLL) --- */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        {/* Effets Aura en arrière-plan (Couleur Bleue) */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#003399]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* GAUCHE : TEXTES ET CTA */}
          <div className="flex flex-col justify-center text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full mx-auto lg:mx-0">
              <Sparkles size={16} className="text-[#003399]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Le futur du digital commence ici</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] tracking-tighter">
                BIENVENUE SUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-blue-400 uppercase">
                  IMDF E-LEARNING
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Une plateforme tout-en-un pour les <span className="text-white font-medium">étudiants</span>, 
                <span className="text-white font-medium"> instructeurs</span> et 
                <span className="text-white font-medium"> organisations</span> qui investissent dans le savoir-faire du digital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group relative inline-flex items-center justify-center space-x-2 bg-[#003399] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,51,153,0.3)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Commencer maintenant</span>
                <ChevronRight size={20} className="relative" />
              </button>
              
              <button className="inline-flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all">
                <PlayCircle size={20} />
                <span>Découvrir l'institut</span>
              </button>
            </div>
          </div>

          {/* DROITE : IMAGE SUSPENDUE (Cachée sur mobile très réduit) */}
          <div className="relative hidden sm:flex justify-center items-center">
            {/* Glow derrière l'image */}
            <div className="absolute -inset-10 bg-[#003399]/30 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#003399] to-blue-500 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              {/* REMPLACE CE LIEN PAR TON IMAGE (celle de la femme au pull rose) */}
              <img
                src="https://images.unsplash.com/photo-1523240715639-99a2f0197ee4?auto=format&fit=crop&q=80&w=1000" 
                alt="IMDF Learning"
                className="relative rounded-[40px] shadow-2xl w-full max-w-[500px] object-cover aspect-[4/5] lg:aspect-square transform transition-transform duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#003399] rounded-2xl flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black italic">100%</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">En Ligne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION VALEURS (CARTES AURA) --- */}
      <section className="py-32 relative bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Pourquoi choisir <span className="text-[#003399]">IMDF</span> ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Nous transformons votre potentiel en compétences concrètes grâce à une pédagogie innovante et accessible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Apprentissage Flexible", 
                icon: Globe, 
                desc: "Accédez à vos cours 24h/24 et 7j/7, partout dans le monde, selon votre emploi du temps.",
                color: "text-blue-500"
              },
              { 
                title: "Experts Métiers", 
                icon: GraduationCap, 
                desc: "Formez-vous auprès de professionnels en activité qui partagent leurs expériences réelles.",
                color: "text-indigo-500"
              },
              { 
                title: "Certification", 
                icon: Layout, 
                desc: "Obtenez des certificats reconnus pour booster votre employabilité dans le secteur digital.",
                color: "text-sky-500"
              },
            ].map((item, i) => (
              <div key={i} className={auraCardStyle}>
                <div className={glowStyle}></div>
                <div className="relative flex flex-col h-full">
                  <div className="p-4 bg-[#003399]/20 rounded-2xl text-[#003399] w-fit mb-8 group-hover:scale-110 transition-transform">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{item.desc}</p>
                  <div className="mt-auto flex items-center text-xs font-bold text-[#003399] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all">
                    En savoir plus <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2026 Institut des Métiers du Digital et du Freelancing (IMDF). Tous droits réservés.</p>
      </footer>

      {/* Animation CSS pour le badge flottant */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}