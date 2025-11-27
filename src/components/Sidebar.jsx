import React, { useState } from "react";
import { Play, X, ChevronDown, Filter, Globe, Home, TrendingUp, Film, Tv, Award, Download } from "lucide-react";

const SidebarItem = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-5 py-3 text-gray-300 hover:bg-gray-800 hover:text-emerald-500 border-r-4 border-transparent hover:border-emerald-500 transition-all"
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </button>
);

const Sidebar = ({ isOpen, onClose, onNavigate }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  const categories = ["Action", "Sci-Fi", "Drama", "Thriller", "Comedy", "Adventure", "Crime", "Romance"];
  const regions = [
    { id: 'bd', label: 'Bangla Movies' },
    { id: 'bolly', label: 'Bollywood' },
    { id: 'holly', label: 'Hollywood' },
    { id: 'south', label: 'South Indian' },
    { id: 'in_wb', label: 'Kolkata Bangla' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 left-0 w-72 h-full bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 shadow-2xl overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 flex justify-between items-center border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Play className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-white">Stream<span className="text-emerald-500">Box</span></span>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="py-4">
          <div className="px-4 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Menu</div>
          <nav className="space-y-1 px-2">
            <SidebarItem icon={Home} label="Home" onClick={() => { onNavigate('home'); onClose(); }} />
            <SidebarItem icon={TrendingUp} label="Trending" onClick={() => { onNavigate('view_all_trending'); onClose(); }} />
            <SidebarItem icon={Film} label="Movies" onClick={() => { onNavigate('movies'); onClose(); }} />
            <SidebarItem icon={Tv} label="TV Series" onClick={() => { onNavigate('series'); onClose(); }} />
            <SidebarItem icon={Award} label="Top 250" onClick={() => { onNavigate('top250'); onClose(); }} />
          </nav>

          <div className="mt-6 px-4 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Discover</div>

          {/* Categories */}
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="w-full flex items-center justify-between px-5 py-3 text-gray-300 hover:bg-gray-800 hover:text-emerald-500 transition-colors"
          >
            <span className="flex items-center gap-3"><Filter size={18} /> Genres</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${categoriesOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="bg-gray-900/50 py-2 px-4 space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { onNavigate('search_results', cat); onClose(); }}
                  className="w-full text-left px-8 py-2 text-sm text-gray-400 hover:text-emerald-400 border-l-2 border-transparent hover:border-emerald-500 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Regions */}
          <button
            onClick={() => setRegionsOpen(!regionsOpen)}
            className="w-full flex items-center justify-between px-5 py-3 text-gray-300 hover:bg-gray-800 hover:text-emerald-500 transition-colors"
          >
            <span className="flex items-center gap-3"><Globe size={18} /> Region</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${regionsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${regionsOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="bg-gray-900/50 py-2 px-4 space-y-1">
              {regions.map(region => (
                <button
                  key={region.id}
                  onClick={() => { onNavigate('search_results', region.label); onClose(); }}
                  className="w-full text-left px-8 py-2 text-sm text-gray-400 hover:text-emerald-400 border-l-2 border-transparent hover:border-emerald-500 transition-colors"
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 mt-4 border-t border-gray-800">
          <button className="w-full bg-emerald-600/10 text-emerald-500 border border-emerald-600/50 py-3 rounded-lg font-bold hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2">
            <Download size={18} /> Premium Access
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;