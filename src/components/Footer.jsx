import React from "react";
import {
  Play,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-950 text-gray-500 py-12 border-t border-gray-900">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
          <Play className="text-white" size={16} />
        </div>
        <span className="text-xl font-bold text-white">
          Stream<span className="text-emerald-500">Box</span>
        </span>
      </div>

      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-emerald-500">DMCA</a>
        <a href="#" className="hover:text-emerald-500">Terms</a>
        <a href="#" className="hover:text-emerald-500">Privacy</a>
        <a href="#" className="hover:text-emerald-500">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white"><Facebook size={18} /></a>
          <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-sky-500 hover:text-white"><Twitter size={18} /></a>
          <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-pink-600 hover:text-white"><Instagram size={18} /></a>
          <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-red-600 hover:text-white"><Youtube size={18} /></a>
        </div>
      </div>

      <div className="text-xs">© 2024 StreamBox. All rights reserved.</div>

    </div>
  </footer>
);

export default Footer;