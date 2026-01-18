import { useState } from 'react';
import { Ticket, Users, Music, Heart, Sparkles, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Countdown } from '../components/Countdown';
import { ParticipationModal } from '../components/ParticipationModal';
import { Link } from '../components/Router';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Style commun pour les cartes "Aura"
  const auraCardStyle = "relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20";
  const glowStyle = "absolute -inset-0.5 bg-gradient-to-r from-[#c65a21] to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500";

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      
      {/* SECTION HERO – STYLE IMDF E-LEARNING */}
<section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden pt-24">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

      {/* GAUCHE – BLOC CONTENU */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Bienvenue sur <br />
            <span className="text-[#c65a21]">WHITE PARTY</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Le chill qui rassemble la jeunesse à{" "}
            <span className="font-semibold text-black italic border-b-2 border-[#c65a21]">
              Paouignan
            </span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/billetterie"
              className="inline-flex items-center justify-center gap-3 bg-[#c65a21] text-white font-bold px-8 py-4 rounded-xl transition hover:shadow-lg hover:-translate-y-0.5"
            >
              <Ticket size={20} />
              Réserver un billet
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 border-2 border-[#c65a21] text-[#c65a21] font-bold px-8 py-4 rounded-xl hover:bg-[#c65a21]/10 transition"
            >
              <Users size={20} />
              Participer
            </button>
          </div>
        </div>
      </div>

      {/* DROITE – IMAGE */}
      <div className="lg:col-span-5 relative flex justify-center">
        <div className="relative">
          {/* halo */}
          <div className="absolute inset-0 bg-[#c65a21]/20 rounded-full blur-[90px] -z-10"></div>

          <img
            src="https://i.ibb.co/pvkB0hTJ/a5ddc74e-1b4a-4027-8e7d-ebbf4813c080.jpg"
            alt="White Party"
            className="w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* --- SECTION ABOUT (AURA CARD) --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className={auraCardStyle}>
            <div className={glowStyle}></div>
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">L'Esprit <br/><span className="text-[#c65a21]">White Party</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Plus qu'une simple fête, c'est une célébration de la convivialité. Un moment suspendu à Paouignan pour connecter, partager et vibrer au rythme des meilleures ondes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Chill", color: "text-pink-500" },
                  { icon: Music, label: "Vibe", color: "text-orange-500" },
                  { icon: Users, label: "Union", color: "text-blue-500" },
                  { icon: Sparkles, label: "Éclat", color: "text-yellow-500" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center transition-transform hover:scale-105">
                    <item.icon className={`mx-auto mb-2 ${item.color}`} size={24} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION PAOUIGNAN --- */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 text-[#c65a21] mb-2">
                <MapPin size={24} />
                <span className="uppercase tracking-widest text-sm font-bold">Localisation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold italic">Découvrir Paouignan</h2>
            </div>
            <p className="text-gray-400 max-w-md">Un village chaleureux où la tradition rencontre l'énergie de la jeunesse.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Accueil', 'Culture', 'Convivialité', 'Jeunesse'].map((tag, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[20px] bg-white/5 border border-white/10 p-8 text-center hover:border-[#c65a21]/50 transition-all">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c65a21] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <span className="text-xl font-bold group-hover:text-[#c65a21] transition-colors">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Countdown />

      {/* --- PROGRAMME --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 uppercase tracking-tighter">
            Le <span className="text-[#c65a21]">Programme</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { time: "14:00", title: "Accueil Festif", desc: "Ouverture des portes et cocktail de bienvenue.", icon: Calendar },
              { time: "16:00", title: "Fun & Games", desc: "Animations ludiques et challenges entre amis.", icon: Sparkles },
              { time: "19:00", title: "DJ Sets", desc: "Le meilleur de la musique locale et internationale.", icon: Music },
              { time: "22:00", title: "Night Vibe", desc: "Immersion totale dans l'univers White Party.", icon: Heart },
              { time: "00:00", title: "Clôture", desc: "Fin de l'événement avec un final mémorable.", icon: Clock },
            ].map((step, i) => (
              <div key={i} className={auraCardStyle}>
                <div className={glowStyle}></div>
                <div className="relative flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#c65a21]/20 rounded-2xl text-[#c65a21]">
                      <step.icon size={28} />
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-[#c65a21]/40 transition-colors">{step.time}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{step.desc}</p>
                  <div className="mt-auto flex items-center text-xs font-bold text-[#c65a21] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    Détails <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ParticipationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};