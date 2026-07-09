const Navbar = ({
  activeTab,
  setActiveTab,
  favoriteCount,
  onHomeClick,
  selectedSemester,
  setSelectedSemester,
}) => {
  const navItems = [
    { id: "home", label: "Home", icon: null },
    { id: "notes", label: "Notes", icon: null },
    {
      id: "favorites",
      label: "Favorites",
      badge: favoriteCount > 0 ? favoriteCount : null,
    },
    { id: "ai-assistant", label: "AI Guide", pulse: true },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-800/60"
      style={{
        background: "rgba(7,10,19,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 sm:px-6 py-3 gap-3">
        {/* Logo */}
        <button
          onClick={() => {
            setActiveTab("home");
            if (onHomeClick) onHomeClick();
          }}
          className="flex items-center gap-2.5 group cursor-pointer text-left flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <div className="leading-none hidden sm:block">
            <span className="text-sm font-bold text-white tracking-tight block">
              StudentTube
            </span>
            <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">
              Finder
            </span>
          </div>
        </button>

        <div className="flex items-center gap-0.5 sm:gap-1 text-sm flex-shrink-0 bg-slate-900/50 border border-slate-800/80 rounded-xl p-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === "home" && onHomeClick) onHomeClick();
              }}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer font-medium flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap ${
                activeTab === item.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {item.label}
              {item.badge != null && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center ${activeTab === item.id ? "bg-white/20 text-white" : "bg-indigo-600/80 text-white"}`}
                >
                  {item.badge}
                </span>
              )}
              {item.pulse && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400"></span>
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex-shrink-0">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="text-xs sm:text-sm bg-slate-900/60 border border-slate-800 rounded-lg px-2.5 sm:px-3 py-1.5 text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 cursor-pointer font-medium transition-all"
          >
            <option value="">All Semesters</option>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((sem) => (
              <option key={sem} value={String(sem)}>
                Sem {sem}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
