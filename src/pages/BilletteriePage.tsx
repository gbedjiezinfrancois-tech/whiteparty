import { Ticket, CheckCircle, Star, Info, Phone } from 'lucide-react';
import { useState } from 'react';
import { ParticipationModal } from '../components/ParticipationModal';

export const BilletteriePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tickets = [
    {
      type: 'Pass Standard',
      price: '5 000',
      features: [
        "Accès à l'événement",
        'Accès aux animations',
        'Accès à l’espace restauration',
        'Souvenir offert',
      ],
      popular: false,
    },
    {
      type: 'Pass VIP – Cotonou → Paouignan',
      price: '12 000',
      features: [
        'Tous les privilèges du Pass Standard',
        'Transport aller – retour (Cotonou ↔ Paouignan)',
        'Accès zone VIP',
        'Consommations offertes',
        'Avantages & cadeaux exclusifs',
      ],
      popular: true,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28">

      {/* ================= HEADER ================= */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#c65a21]/10 flex items-center justify-center">
              <Ticket className="text-[#c65a21]" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Réserve ta <span className="text-[#c65a21]">place</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Rejoins la jeunesse de Paouignan pour une expérience unique le{' '}
            <span className="font-semibold text-black italic">
              02 Août 2026
            </span>.
          </p>
        </div>
      </section>

      {/* ================= TICKETS ================= */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-10 shadow-xl ${
                ticket.popular ? 'ring-2 ring-[#c65a21]' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c65a21] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest flex items-center gap-2">
                  <Star size={14} fill="currentColor" />
                  VIP
                </div>
              )}

              {/* IMAGE TICKET */}
              <div className="mb-8">
                <img
                  src="/ticket-online.png"
                  alt="Ticket White Party"
                  className="w-full max-w-xs mx-auto drop-shadow-xl"
                />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-lg uppercase tracking-widest text-gray-500 font-bold mb-2">
                  {ticket.type}
                </h3>
                <div className="flex justify-center items-end gap-2">
                  <span className="text-5xl font-extrabold text-black">
                    {ticket.price}
                  </span>
                  <span className="text-sm font-bold text-[#c65a21]">
                    FCFA
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-[#c65a21]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition ${
                  ticket.popular
                    ? 'bg-[#c65a21] text-white hover:opacity-90'
                    : 'border-2 border-[#c65a21] text-[#c65a21] hover:bg-[#c65a21]/10'
                }`}
              >
                Réserver mon pass
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INFOS ================= */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#c65a21]/20 flex items-center justify-center">
              <Info className="text-[#c65a21]" />
            </div>
            <h3 className="text-2xl font-bold">Informations importantes</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm">
            <div className="space-y-4">
              <p>• Les billets sont nominatifs et non remboursables.</p>
              <p>• Une pièce d’identité sera exigée à l’entrée.</p>
            </div>

            <div className="space-y-4">
              <p>• Le Pass VIP inclut le transport depuis Cotonou.</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Phone size={18} className="text-[#c65a21]" />
                <span className="text-white font-bold">
                  +229 67 82 95 34
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParticipationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
