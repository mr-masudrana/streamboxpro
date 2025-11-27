import React from "react";
import { Star, Download } from "lucide-react";
import { TAG_CONFIG } from "../data";

const LanguageBadge = ({ origin }) => {
  const config = TAG_CONFIG[origin] || TAG_CONFIG["holly"];
  return (
    <span className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded ${config.color}`}>
      {config.label}
    </span>
  );
};

const MovieCard = ({ movie, onClick, rank }) => {
  return (
    <div
      onClick={() => onClick(movie)}
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500 cursor-pointer transition-all"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all"
        />

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <LanguageBadge origin={movie.origin} />

          {rank && (
            <span className="bg-yellow-500 text-black font-bold px-2 py-0.5 text-[10px] rounded">
              #{rank}
            </span>
          )}
        </div>

        <div className="absolute top-2 right-2 bg-gray-900/80 text-white text-[10px] px-2 py-1 rounded">
          {movie.quality}
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center">
          <div className="bg-emerald-600 text-white p-3 rounded-full">
            <Download size={20} />
          </div>
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-gray-200 font-bold text-sm truncate">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{movie.year}</span>
          <span className="flex items-center gap-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;