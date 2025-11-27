import React, { useEffect, useState } from "react";
import { MOCK_DATA } from "./data";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MovieCard from "./components/MovieCard";
import HeroCarousel from "./components/HeroCarousel";
import TrailerModal from "./components/TrailerModal";
import ViewAllPage from "./pages/ViewAllPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Footer from "./components/Footer"; // if you already have Footer in main repo; if not create simple footer

// Simple Footer fallback (in case you didn't create separate file)
const SimpleFooter = () => (
  <footer className="bg-gray-950 text-gray-500 py-12 border-t border-gray-900">
    <div className="container mx-auto px-4 text-center text-sm">© 2024 StreamBox. All rights reserved.</div>
  </footer>
);

const App = () => {
  const [view, setView] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // initial loading skeleton
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  // Helpers
  const getLatestContent = () => [...MOCK_DATA].sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0,10);
  const getTrending = () => MOCK_DATA.filter(i => i.trending).slice(0,8);
  const getMovies = () => MOCK_DATA.filter(i => i.type === 'movie').slice(0,8);
  const getSeries = () => MOCK_DATA.filter(i => i.type === 'series').slice(0,8);
  const getTopRated = () => MOCK_DATA.filter(i => i.imdbRank).sort((a,b) => a.imdbRank - b.imdbRank).slice(0,4);

  // handlers
  const handleMovieClick = (movie) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedMovie(movie);
      setView('details');
      setLoading(false);
    }, 300);
  };

  const handleNavigate = (page, query = "") => {
    setSidebarOpen(false);
    setLoading(true);

    if (page === 'search_results' && query) {
      setSearchQuery(query);
    } else {
      setSearchQuery("");
      setSelectedMovie(null);
    }

    setTimeout(() => {
      setView(page);
      setLoading(false);
    }, 300);
  };

  const handleSearch = (query) => {
    if (!query || !query.trim()) return;
    setSearchQuery(query);
    setLoading(true);
    setTimeout(() => {
      setView('search_results');
      setLoading(false);
    }, 300);
  };

  return (
    <div className="bg-gray-950 min-h-screen font-sans text-gray-100 flex flex-col selection:bg-emerald-500/30">
      {loading && <LoadingSpinner />}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={handleNavigate} />
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} onSearch={handleSearch} />

      <main className="flex-grow pt-20">
        {view === 'home' && (
          <>
            <HeroCarousel items={getLatestContent()} onMovieClick={handleMovieClick} />
            <div className="container mx-auto px-4 -mt-10 relative z-10">
              <div className="bg-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl mb-12">
                <div className="flex justify-between items-end mb-6 px-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 text-emerald-500">Trending</div>
                    <div><h2 className="text-xl md:text-2xl font-bold text-white">Trending Now</h2></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
                  {getTrending().map(item => <MovieCard key={item.id} movie={item} onClick={handleMovieClick} />)}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex justify-between items-end mb-6 px-1">
                  <h2 className="text-xl md:text-2xl font-bold text-white">Latest Movies</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {getMovies().map(item => <MovieCard key={item.id} movie={item} onClick={handleMovieClick} />)}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex justify-between items-end mb-6 px-1">
                  <h2 className="text-xl md:text-2xl font-bold text-white">TV & Web Series</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {getSeries().map(item => <MovieCard key={item.id} movie={item} onClick={handleMovieClick} />)}
                </div>
              </div>
            </div>
          </>
        )}

        {view === 'details' && selectedMovie && (
          <MovieDetailPage movie={selectedMovie} onBack={() => handleNavigate('home')} onMovieClick={handleMovieClick} data={MOCK_DATA} />
        )}

        {['movies','series','top250','view_all_trending','search_results'].includes(view) && (
          <ViewAllPage category={view} onMovieClick={handleMovieClick} onBack={() => handleNavigate('home')} searchQuery={searchQuery} data={MOCK_DATA} />
        )}

      </main>

      {/* Footer */}
      {typeof Footer !== 'undefined' ? <Footer /> : <SimpleFooter />}
    </div>
  );
};

export default App;