import { useState, useEffect, useRef } from "react";
import { popularTopics } from "../data/channels";

const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
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

  const featureItems = [
    { icon: "🎯", text: "Ranked by quality" },
    { icon: "⚡", text: "Instant results" },
    { icon: "📌", text: "Save favorites" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center relative z-10">
      {/* Decorative badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-7">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
        Curated for College Students
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-5 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-indigo-300">
        Find the Best YouTube
        <br />
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Channels
        </span>{" "}
        for Any Subject
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto mb-5 leading-relaxed">
        Stop wasting hours searching. Get a handpicked shortlist of top-tier
        YouTube educators ranked by quality and style.
      </p>

      {/* Feature pills */}
      <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
        {featureItems.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-900/40 border border-slate-800/60 rounded-full px-3 py-1"
          >
            <span>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      {/* Search Bar Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2.5 max-w-xl mx-auto mb-8 relative"
      >
        {/* Glow behind the input when focused */}
        <div
          className={`absolute inset-0 rounded-xl blur-xl transition-opacity duration-500 pointer-events-none ${
            focused ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "rgba(99,102,241,0.12)" }}
        ></div>

        <div className="flex-1 relative flex items-center">
          <input
            ref={inputRef}
            id="hero-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search a subject, e.g. Machine Learning"
            className="w-full h-13 pl-11 pr-16 text-sm bg-slate-900/80 border border-slate-800 rounded-xl outline-none focus:border-indigo-500/70 text-white placeholder-slate-500 transition-all shadow-inner focus:ring-2 focus:ring-indigo-500/15 relative z-10"
          />

          {/* Search Icon */}
          <div className={`absolute left-4 z-10 transition-colors duration-200 ${focused ? "text-indigo-400" : "text-slate-500"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          {/* Hotkey indicator */}
          <div className="absolute right-3 z-10 text-[10px] bg-slate-950 border border-slate-800 text-slate-500 px-2 py-0.5 rounded-md pointer-events-none font-semibold">
            /
          </div>
        </div>

        <button
          type="submit"
          className="h-13 px-6 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 relative z-10"
        >
          Search
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>

      {/* Popular Topics Cloud */}
      <div className="flex gap-2 justify-center flex-wrap max-w-2xl mx-auto">
        <span className="text-xs text-slate-500 self-center mr-1 font-medium">
          Try:
        </span>
        {popularTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTagClick(topic)}
            className="text-xs text-slate-400 bg-slate-900/50 border border-slate-800/80 rounded-full px-3.5 py-1.5 hover:border-indigo-500/40 hover:bg-indigo-950/30 hover:text-indigo-300 transition-all duration-200 cursor-pointer"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
