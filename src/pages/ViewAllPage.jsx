import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { XCircle } from "lucide-react";

const ViewAllPage = ({ category, onMovieClick, onBack, searchQuery, data }) => {
  let dataList = [], title = "All Content";

  if (category === 'search_results') {
    title = `Search: "${searchQuery}"`;
    const query = (searchQuery || "").toLowerCase();
    dataList = data.filter(item =>
      item.title.toLowerCase().includes(query) ||
      (item.description || "").toLowerCase().includes(query) ||
      (item.genre || []).some(g => g.toLowerCase().includes(query)) ||
      (item.origin || "").toLowerCase().includes(query)
    );
  } else {
    switch(category) {
      case 'movies': dataList = data.filter(i => i.type === 'movie'); title = "All Movies"; break;
      case 'series': dataList = data.filter(i => i.type === 'series'); title = "TV & Web Series"; break;
      case 'top250': dataList = data.filter(i => i.imdbRank).sort((a,b) => (a.imdbRank||999) - (b.imdbRank||999)).slice(0, 250); title = "IMDB Top"; break;
      case 'view_all_trending': dataList = data.filter(i => i.trending); title = "Trending Now"; break;
      default: dataList = data; title = "All Content"; break;
    }
  }

  useEffect(() => { window.scrollTo(0,0); }, [category, searchQuery]);

  return (
    <div className="animate-fadeIn pt-24 container mx-auto px-4 min-h-screen pb-20">
      <button onClick={onBack} className="mb-6 hover:text-emerald-500 flex items-center gap-1 text-gray-500 text-sm">← Back to Home</button>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
      </div>

      {dataList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {dataList.map((movie, idx) => (
            <MovieCard key={`${movie.id}-${idx}`} movie={movie} onClick={onMovieClick} rank={category === 'top250' ? (movie.imdbRank || idx + 1) : null} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <XCircle size={64} className="mb-4 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-300">No results found</h2>
          <p className="mt-2">Try searching for a different title or genre.</p>
        </div>
      )}
    </div>
  );
};

export default ViewAllPage;