import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="bg-black text-white pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                Contactez-nous
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une question ? Besoin d'informations ? N'hésitez pas à nous contacter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-green-500/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="text-green-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/22967829534"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition-colors text-lg"
                >
                  <Phone size={20} />
                  <span>+229 67 82 95 34</span>
                </a>
                <a
                  href="https://wa.me/22996536789"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition-colors text-lg"
                >
                  <Phone size={20} />
                  <span>+229 96 53 67 89</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-blue-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Téléphone</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+22901965367869"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors text-lg"
                >
                  <Phone size={20} />
                  <span>+229 01 96 53 67 89</span>
                </a>
                <a
                  href="tel:+22901678295341"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors text-lg"
                >
                  <Phone size={20} />
                  <span>+229 01 67 82 95 34</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-pink-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Réseaux Sociaux</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 text-lg">
                  <Facebook size={20} className="text-blue-500" />
                  <span>@white_party</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-lg">
                  <Instagram size={20} className="text-pink-500" />
                  <span>@white_party</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-yellow-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Localisation</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">Paouignan, Bénin</p>
              <p className="text-gray-400">
                Un village chaleureux où culture et convivialité se rencontrent
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
                <textarea
                  rows={5}
                  placeholder="Votre message"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-4 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Suivez-nous sur les réseaux sociaux</h2>
            <p className="text-gray-400 mb-8">Restez informés de toutes nos actualités</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook size={28} className="text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={28} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
