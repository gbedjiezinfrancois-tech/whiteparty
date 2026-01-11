import { Ticket, CheckCircle, Star, Sparkles, Info, Phone } from 'lucide-react';
import { useState } from 'react';
import { ParticipationModal } from '../components/ParticipationModal';

export const BilletteriePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tickets = [
    {
      type: 'Pass Standard',
      price: '5 000',
      features: [
        'Accès à l\'événement',
        'Accès aux animations',
        'Accès à l\'espace restauration',
        'Souvenir offert',
      ],
      color: 'from-gray-400 to-gray-600',
      popular: false,
    },
    {
      type: 'Pass VIP',
      price: '10 000',
      features: [
        'Tous les avantages du Standard',
        'Accès zone VIP exclusive',
        'Consommations offertes',
        'Meet & Greet Artistes',
        'Cadeaux exclusifs',
      ],
      color: 'from-[#c65a21] to-orange-400',
      popular: true,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28">
      <section className="container mx-auto px-6 mb-20 relative">
        {/* Effet de lumière en arrière-plan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#c65a21]/20 blur-[120px] -z-10"></div>
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Ticket size={16} className="text-[#c65a21]" />
            <span className="text-xs uppercase tracking-widest font-bold">Places limitées</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            PRENDS TA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c65a21] to-orange-400">PLACE</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Rejoins la jeunesse de Paouignan pour une expérience inédite le <span className="text-white font-medium italic">02 Août 2026</span>.
          </p>
        </div>

        {/* GRILLE DES TICKETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`relative group bg-white/5 backdrop-blur-xl border ${
                ticket.popular ? 'border-[#c65a21] shadow-[#c65a21]/10' : 'border-white/10'
              } rounded-[35px] p-10 transition-all duration-500 hover:-translate-y-2 shadow-2xl`}
            >
              {/* Badge Populaire */}
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c65a21] text-white px-5 py-1.5 rounded-full text-xs font-black tracking-[0.2em] flex items-center gap-2 shadow-xl">
                  <Star size={14} fill="currentColor" />
                  POPULAIRE
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-2">{ticket.type}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-black">{ticket.price}</span>
                  <span className="text-sm font-bold text-[#c65a21] uppercase">FCFA</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`p-1 rounded-full bg-gradient-to-br ${ticket.color} bg-opacity-20`}>
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-5 rounded-[20px] font-black uppercase tracking-widest transition-all duration-300 ${
                  ticket.popular 
                  ? 'bg-[#c65a21] text-white hover:bg-white hover:text-[#c65a21] shadow-lg shadow-[#c65a21]/20' 
                  : 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/10'
                }`}
              >
                Réserver mon pass
              </button>
            </div>
          ))}
        </div>

        {/* INFOS PRATIQUES (CARTE AURA) */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-12 overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur opacity-50"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                  <Info size={28} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Informations de réservation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">01.</span>
                    Les billets sont strictement nominatifs et non remboursables après achat.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">02.</span>
                    Une pièce d'identité originale sera exigée au check-in de l'événement.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">03.</span>
                    Le Pass VIP donne accès au coupe-file à l'entrée et à la zone Lounge.
                  </p>
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    <Phone size={18} className="text-[#c65a21]" />
                    <span className="text-white font-bold">+229 67 82 95 34</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DE PARTICIPATION */}
      <ParticipationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};