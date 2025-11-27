import React from "react";
import { Globe } from "lucide-react";
import { TAG_CONFIG } from "../data";

/**
 * Usage: <LanguageBadge origin={movie.origin} />
 */
const LanguageBadge = ({ origin }) => {
  const config = TAG_CONFIG[origin] || TAG_CONFIG["holly"];
  return (
    <span className={`px-2 py-0.5 text-[10px] md:text-xs uppercase font-bold rounded flex items-center gap-1 shadow-sm ${config.color}`}>
      <Globe size={10} /> {config.label}
    </span>
  );
};

export default LanguageBadge;