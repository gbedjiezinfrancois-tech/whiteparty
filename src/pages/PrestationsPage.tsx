import {
  Volume2,
  Sparkles,
  Shield,
  Package,
  Utensils,
  Handshake,
  Users,
  Award
} from 'lucide-react';

export const PrestationsPage = () => {
  const prestations = [
    {
      icon: Volume2,
      title: 'Sonorisation',
      description:
        'Système audio professionnel de haute qualité pour une expérience sonore immersive et cristalline.',
    },
    {
      icon: Sparkles,
      title: 'Animation',
      description:
        "Équipe d'animateurs et de DJs talentueux pour maintenir une énergie haute intensité.",
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description:
        'Dispositif de sécurité discret et efficace pour garantir la sérénité de tous nos invités.',
    },
    {
      icon: Package,
      title: 'Logistique',
      description:
        "Organisation millimétrée, de l'installation technique à la gestion des flux de l'événement.",
    },
    {
      icon: Utensils,
      title: 'Restauration',
      description:
        'Espace food & drinks premium avec des saveurs locales et rafraîchissements variés.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28">

      {/* ================= HEADER ================= */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Prestations & <span className="text-[#c65a21]">Services</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nous déployons une expertise complète pour faire de la{' '}
            <span className="font-semibold text-black">White Party</span> un
            moment d’exception.
          </p>
        </div>
      </section>

      {/* ================= PRESTATIONS ================= */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {prestations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#c65a21]/10 flex items-center justify-center">
                <item.icon size={30} className="text-[#c65a21]" />
              </div>

              <h3 className="text-xl font-bold text-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARTENAIRES ================= */}
      <section className="bg-white/5 py-24 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Partenaires &{' '}
                <span className="text-[#c65a21]">Sponsors</span>
              </h2>
              <p className="text-gray-400 mt-2">
                Ils soutiennent la vision et l’énergie de la jeunesse.
              </p>
            </div>

            <button className="flex items-center gap-3 bg-[#c65a21] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition">
              <Handshake size={20} />
              Devenir partenaire
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-32 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center hover:border-[#c65a21]/40 transition"
              >
                <Handshake size={30} className="text-white/30" />
                <span className="text-xs uppercase mt-3 text-white/30">
                  Partner {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONFIANCE ================= */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
          Pourquoi nous{' '}
          <span className="text-[#c65a21]">faire confiance ?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center">
          {[
            {
              icon: Users,
              title: 'Professionnalisme',
              desc:
                "Une rigueur absolue dans l'exécution technique et humaine de l'événement.",
            },
            {
              icon: Sparkles,
              title: 'Esprit Jeunesse',
              desc:
                'Une équipe connectée aux tendances et aux codes de sa génération.',
            },
            {
              icon: Award,
              title: 'Engagement',
              desc:
                'Créer des souvenirs forts et durables pour chaque participant.',
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#c65a21]/10 flex items-center justify-center">
                <item.icon size={38} className="text-[#c65a21]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
