
const Navbar = ({ activeTab, setActiveTab, favoriteCount, onHomeClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/75 border-b border-slate-900/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-4xl mx-auto px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => {
            setActiveTab("home");
            if (onHomeClick) onHomeClick();
          }}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="text-sm font-bold text-white tracking-tight block">
              StudentTube
            </span>
            <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">
              Finder
            </span>
          </div>
        </button>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-4 text-sm">
          <button
            onClick={() => {
              setActiveTab("home");
              if (onHomeClick) onHomeClick();
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
              activeTab === "home"
                ? "bg-slate-900 text-white border border-slate-800"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => setActiveTab("favorites")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
              activeTab === "favorites"
                ? "bg-slate-900 text-white border border-slate-800"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Favorites
            {favoriteCount > 0 && (
              <span className="bg-indigo-600/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {favoriteCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("ai-assistant")}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
              activeTab === "ai-assistant"
                ? "bg-slate-900 text-white border border-slate-800"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            AI Guide
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
          </button>
        </div>

        {/* CTA (Login mockup) */}
        <div className="hidden sm:block">
          <button 
            onClick={() => alert("Auth is not configured in this demo, but the styling looks amazing!")}
            className="text-xs border border-slate-800 bg-slate-900/40 rounded-xl px-4 py-2 hover:bg-slate-950 font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
