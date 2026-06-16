import { useState, useEffect, useRef } from "react";
import { popularTopics } from "../data/channels";

const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Keyboard shortcut listener ('/' to focus search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const handleTagClick = (topic) => {
    setQuery(topic);
    onSearch(topic);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
      {/* Decorative badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse-slow">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        Curated for College Students
      </div>
      
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-indigo-300">
        Find the Best YouTube
        <br />
        Channels for Any Subject
      </h1>
      
      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
        Stop wasting hours searching. Get a handpicked shortlist of top-tier YouTube educators ranked by quality and style.
      </p>

      {/* Search Bar Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 max-w-lg mx-auto mb-8 relative group"
      >
        <div className="flex-1 relative flex items-center">
          <input
            ref={inputRef}
            id="hero-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a subject, e.g. Machine Learning"
            className="w-full h-13 pl-11 pr-16 text-sm bg-slate-900/60 border border-slate-800 rounded-xl outline-none focus:border-indigo-500 focus:bg-slate-900/90 text-white placeholder-slate-500 transition-all shadow-inner focus:ring-2 focus:ring-indigo-500/10"
          />
          
          {/* Search Icon */}
          <div className="absolute left-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>

          {/* Hotkey indicator */}
          <div className="absolute right-4 text-[10px] bg-slate-950 border border-slate-800 text-slate-500 px-2 py-0.5 rounded-md pointer-events-none font-semibold">
            Press /
          </div>
        </div>

        <button
          type="submit"
          className="h-13 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-500/20 active:scale-98 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
        >
          Search
        </button>
      </form>

      {/* Popular Topics Cloud */}
      <div className="flex gap-2 justify-center flex-wrap max-w-2xl mx-auto">
        <span className="text-xs text-slate-500 self-center mr-2 font-medium">Popular:</span>
        {popularTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTagClick(topic)}
            className="text-xs text-slate-400 bg-slate-900/40 border border-slate-800/80 rounded-full px-3.5 py-1.5 hover:border-slate-700 hover:bg-slate-900 hover:text-white transition-all cursor-pointer"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
