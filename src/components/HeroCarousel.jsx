import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Star, Calendar, Clock } from "lucide-react";
import LanguageBadge from "./LanguageBadge"; // we'll add a tiny helper component file OR you can inline. below I'll provide inline option.

const HeroCarousel = ({ items = [], onMovieClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % items.length), 8000);
    return () => clearInterval(timer);
  }, [items]);

  if (!items || items.length === 0) return null;
  const movie = items[current];

  return (
    <div className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden group bg-gray-950">
      <div className="absolute inset-0">
        {items.map((item, idx) => (
          <div key={item.id} className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} style={{ backgroundImage: `url(${item.cover})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-3xl animate-slideUp">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded shadow-lg">Latest Upload #{current + 1}</span>
              <div className="px-2 py-0.5 text-[10px] md:text-xs uppercase font-bold rounded flex items-center gap-1 shadow-sm bg-emerald-600 text-white">
                {movie.origin}
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">{movie.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-300 mb-6 font-medium">
              <span className="flex items-center gap-1 text-yellow-400"><Star size={14}/> {movie.rating}</span>
              <span className="flex items-center gap-1"><Calendar size={14}/> {movie.year}</span>
              <span className="flex items-center gap-1"><Clock size={14}/> {movie.duration}</span>
              <span className="px-2 py-0.5 border border-gray-600 rounded text-xs text-gray-400">{movie.quality}</span>
              {movie.genre && movie.genre.map((g, i) => <span key={i} className="text-emerald-400">{g}</span>)}
            </div>

            <p className="text-gray-300 mb-8 text-sm md:text-lg line-clamp-3 md:line-clamp-none max-w-xl">{movie.description}</p>

            <div className="flex gap-4">
              <button onClick={() => onMovieClick(movie)} className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 md:px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg">
                <Play size={18} /> Watch Now
              </button>
              <button onClick={() => onMovieClick(movie)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 md:px-8 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/10 transition-all">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 md:right-10 flex gap-2">
        <button onClick={() => setCurrent(prev => (prev - 1 + items.length) % items.length)} className="p-3 rounded-full bg-white/5 hover:bg-emerald-600 text-white border border-white/10 transition-all"><ChevronLeft size={20} /></button>
        <button onClick={() => setCurrent(prev => (prev + 1) % items.length)} className="p-3 rounded-full bg-white/5 hover:bg-emerald-600 text-white border border-white/10 transition-all"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
};

export default HeroCarousel;