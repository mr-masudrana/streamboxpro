import React from "react";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-gray-950 z-[60] flex flex-col items-center justify-center">
    <div className="relative w-20 h-20 mb-4">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-emerald-500/30 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>
    <div className="text-emerald-500 font-mono animate-pulse">LOADING...</div>
  </div>
);

export default LoadingSpinner;