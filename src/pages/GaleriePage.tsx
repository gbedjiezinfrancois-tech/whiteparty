import React, { useState } from 'react';
import { Image as ImageIcon, Video, Eye, Instagram, Facebook, Sparkles, X } from 'lucide-react';

export const GaleriePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { src: 'https://i.ibb.co/TqY6pQY4/WHITE-PARTY-PAOUIGNAN-by-r-nato-7.png' },
    { src: 'https://i.ibb.co/FL37LF3F/WHITE-PARTY-PAOUIGNAN-by-r-nato-6.png' },
    { src: 'https://i.ibb.co/JF3jCvq3/WHITE-PARTY-PAOUIGNAN-by-r-nato-5.png' },
    { src: 'https://i.ibb.co/rGmY3NtY/WHITE-PARTY-PAOUIGNAN-by-r-nato-4.png' },
    { src: 'https://i.ibb.co/Ldnv3bR4/WHITE-PARTY-PAOUIGNAN-by-r-nato-3.png' },
    { src: 'https://i.ibb.co/N20NVwPc/WHITE-PARTY-PAOUIGNAN-by-r-nato-2.png' },
    { src: 'https://i.ibb.co/fVJsY88J/WHITE-PARTY-PAOUIGNAN-by-r-nato-1.png' },
    { src: 'https://i.ibb.co/Z1JzP2Bg/WHITE-PARTY-PAOUIGNAN-by-r-nato.png' },
    { src: 'https://i.ibb.co/SHnvhjg/Green-Modern-Home-Gardening-Service-Instagram-Post.png' },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white pt-28 min-h-screen">
      
      {/* --- HEADER --- */}
      <section className="container mx-auto px-6 mb-16 relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#c65a21]/10 blur-[120px] -z-10"></div>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
          <Sparkles size={16} className="text-[#c65a21]" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold">Instantanés</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          L'ALBUM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c65a21] to-orange-400">SOUVENIR</span>
        </h1>
      </section>

      {/* --- GRILLE DE GALERIE (MASONRY OPTIMISÉ) --- */}
      <section className="container mx-auto px-6 mb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item.src)}
              className="relative group overflow-hidden rounded-[25px] border border-white/10 bg-white/5 break-inside-avoid shadow-2xl transition-all duration-500 hover:border-[#c65a21]/50 cursor-zoom-in"
            >
              {/* Squelette de chargement (Placeholder animé) */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-shimmer" 
                   style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} 
              />
              
              <img
                src={item.src}
                alt={`White Party Event ${index}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                onLoad={(e) => {
                  e.currentTarget.previousSibling.style.display = 'none'; // Cache le squelette
                }}
              />
              
              {/* Overlay interactif */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Eye size={24} className="text-white" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION VIDÉO --- */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 text-center">
            <div className="w-16 h-16 bg-[#c65a21]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="text-[#c65a21]" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase italic tracking-tighter">Vidéos à venir</h3>
            <p className="text-gray-400 font-light italic text-sm">
              L'aftermovie officiel de Paouignan est en cours de traitement.
            </p>
          </div>
        </div>
      </section>

      {/* --- SOCIAL SHARE --- */}
      <section className="py-20 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-8 uppercase italic tracking-tighter">
            Partage ton <span className="text-[#c65a21]">Vibe</span>
          </h2>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-[#c65a21] transition-all group">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
            </button>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-[#c65a21] transition-all group">
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Facebook</span>
            </button>
          </div>
          <p className="mt-8 text-xl font-black text-white/20 tracking-[0.3em] uppercase">#WhitePartyPaouignan</p>
        </div>
      </section>

      {/* --- LIGHTBOX (Agrandissement au clic) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10" 
            alt="Zoom" 
          />
        </div>
      )}

      {/* Styles inline pour l'animation Shimmer */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%);
          background-size: 200% 100%;
        }
      `}} />
    </div>
  );
};