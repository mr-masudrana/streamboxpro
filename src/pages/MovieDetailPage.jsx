import React, { useEffect, useState } from "react";
import TrailerModal from "../components/TrailerModal";
import MovieCard from "../components/MovieCard";
import { Star, Calendar, Clock, ChevronLeft, Download, Youtube, Award } from "lucide-react";

const MovieDetailPage = ({ movie, onBack, onMovieClick, data }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const relatedMovies = (data || []).filter(m => m.type === movie.type && m.id !== movie.id).slice(0, 4);

  useEffect(() => { window.scrollTo(0, 0); }, [movie]);

  return (
    <div className="animate-fadeIn pt-20 pb-20">
      {showTrailer && <TrailerModal videoId={movie.trailerId} onClose={() => setShowTrailer(false)} />}

      <div className="container mx-auto px-4 py-4 text-sm text-gray-400">
        <button onClick={onBack} className="hover:text-emerald-500 flex items-center gap-1 text-gray-500 text-sm"><ChevronLeft size={14}/> Back</button>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gray-900 rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl" style={{backgroundImage: `url(${movie.cover})`}} />
          <div className="relative z-10 flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-80 flex-shrink-0">
              <img src={movie.poster} alt={movie.title} className="w-full rounded-xl shadow-2xl border border-gray-700" />
            </div>

            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 text-xs uppercase font-bold rounded bg-emerald-600 text-white">{movie.origin}</span>
                {movie.imdbRank && <span className="text-yellow-500 font-bold text-sm flex items-center gap-1"><Award size={14}/> Top Ranked #{movie.imdbRank}</span>}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.title} <span className="text-gray-600 font-light text-2xl">({movie.year})</span></h1>

              <div className="flex flex-wrap gap-3 mb-6">
                {movie.genre && movie.genre.map(g => <span key={g} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-emerald-400 border border-gray-700">{g}</span>)}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-950/50 p-4 rounded-lg border border-gray-800">
                  <span className="text-gray-500 text-xs block mb-1">IMDB Rating</span>
                  <div className="flex items-center gap-2 text-xl font-bold text-white"><Star size={20} /> {movie.rating}</div>
                </div>

                <div className="bg-gray-950/50 p-4 rounded-lg border border-gray-800">
                  <span className="text-gray-500 text-xs block mb-1">Duration</span>
                  <div className="text-xl font-bold text-white">{movie.duration}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all"><PlayIcon /> Watch Now</button>

                {movie.trailerId && (
                  <button onClick={() => setShowTrailer(true)} className="flex-1 md:flex-none bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all border border-red-500">
                    <Youtube size={20} /> Watch Trailer
                  </button>
                )}
              </div>

              <h3 className="text-lg font-bold mb-3 text-white">Plot Summary</h3>
              <p className="text-gray-400 leading-relaxed text-base mb-8">{movie.description}</p>

              <h3 className="text-lg font-bold mb-4 text-white">Download Links</h3>
              <div className="flex flex-col gap-3">
                {['480p (Low)', '720p (HD)', '1080p (Full HD)', '4K (Ultra HD)'].map((label, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between bg-gray-800 hover:bg-emerald-600/20 border border-gray-700 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 px-6 py-4 rounded-lg transition-all group">
                    <span className="font-medium flex items-center gap-3"><Download size={18} /> Server {idx + 1} - {label}</span>
                    <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded border border-emerald-900/50 group-hover:bg-emerald-500 group-hover:text-white transition-all">Fast</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">More {movie.type === 'movie' ? 'Movies' : 'Series'} Like This</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {relatedMovies.map(m => <MovieCard key={m.id} movie={m} onClick={onMovieClick} />)}
        </div>
      </div>
    </div>
  );
};

// small placeholder to avoid missing PlayIcon reference
const PlayIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3v18l15-9L5 3z" /></svg>);

export default MovieDetailPage;