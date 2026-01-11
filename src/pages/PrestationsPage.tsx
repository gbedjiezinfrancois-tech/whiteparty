import { Volume2, Sparkles, Shield, Package, Utensils, Handshake, Users, Award, ChevronRight } from 'lucide-react';

export const PrestationsPage = () => {
  const prestations = [
    {
      icon: Volume2,
      title: 'Sonorisation',
      description: 'Système audio professionnel de haute qualité pour une expérience sonore immersive et cristalline.',
      color: 'from-orange-500 to-[#c65a21]',
    },
    {
      icon: Sparkles,
      title: 'Animation',
      description: 'Équipe d\'animateurs et de DJs talentueux pour maintenir une énergie haute intensité.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Dispositif de sécurité discret et efficace pour garantir la sérénité de tous nos invités.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Package,
      title: 'Logistique',
      description: 'Organisation millimétrée, de l\'installation technique à la gestion des flux de l\'événement.',
      color: 'from-emerald-400 to-teal-600',
    },
    {
      icon: Utensils,
      title: 'Restauration',
      description: 'Espace food & drinks premium avec des saveurs locales et rafraîchissements variés.',
      color: 'from-rose-500 to-red-600',
    },
  ];

  // Style partagé pour l'effet Aura
  const auraCardStyle = "relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[#c65a21]/50 shadow-2xl overflow-hidden";
  const glowStyle = "absolute -inset-1 bg-gradient-to-r from-[#c65a21] to-orange-400 rounded-[30px] blur opacity-0 group-hover:opacity-20 transition duration-500";

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28">
      
      {/* --- HEADER DE LA PAGE --- */}
      <section className="container mx-auto px-6 mb-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#c65a21]/20 blur-[100px] -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          PRESTATIONS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c65a21] to-orange-400">& SERVICES</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Nous déployons une expertise complète pour faire de la <span className="text-white font-medium">White Party</span> un moment d'exception.
        </p>
      </section>

      {/* --- GRILLE DES PRESTATIONS --- */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {prestations.map((item, index) => (
            <div key={index} className={auraCardStyle}>
              <div className={glowStyle}></div>
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="h-1 w-12 bg-white/10 group-hover:w-full group-hover:bg-[#c65a21]/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PARTENAIRES (STYLE ÉPURÉ) --- */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">Partenaires <span className="text-[#c65a21]">& Sponsors</span></h2>
              <p className="text-gray-400">Ils soutiennent la vision et l'énergie de la jeunesse.</p>
            </div>
            <button className="group relative flex items-center gap-2 bg-white text-[#0a0a0a] px-8 py-4 rounded-[15px] font-bold uppercase text-sm tracking-widest hover:bg-[#c65a21] hover:text-white transition-all">
              <Handshake size={20} />
              Devenir partenaire
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center group hover:border-[#c65a21]/40 transition-all grayscale hover:grayscale-0">
                <Handshake size={32} className="text-white/20 group-hover:text-[#c65a21] transition-colors" />
                <span className="text-[10px] uppercase mt-2 text-white/10 tracking-widest font-bold">Partner_{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ORGANISATION (SECTION AURA) --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter italic">Pourquoi nous <span className="text-[#c65a21]">faire confiance ?</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { 
              icon: Users, 
              title: "Professionnalisme", 
              desc: "Une rigueur absolue dans l'exécution technique et humaine de l'événement.",
              color: "text-blue-400"
            },
            { 
              icon: Sparkles, 
              title: "Esprit Jeunesse", 
              desc: "Une équipe qui vibre avec les tendances et comprend les codes de sa génération.",
              color: "text-orange-400"
            },
            { 
              icon: Award, 
              title: "Engagement", 
              desc: "Notre priorité est la création de souvenirs impérissables pour chaque participant.",
              color: "text-emerald-400"
            }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#c65a21]/50 group-hover:bg-[#c65a21]/10 transition-all duration-500 shadow-xl">
                <feature.icon className={`${feature.color}`} size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};