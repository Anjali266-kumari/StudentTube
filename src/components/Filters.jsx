
const creatorTiers = [
  { label: "All Creators", value: "all" },
  { label: "Mega Channels (>1.5M)", value: "mega" },
  { label: "Mid-Tier (500K - 1.5M)", value: "mid" },
  { label: "Rising Stars (<500K)", value: "rising" },
];

const availableTags = [
  "Visualized",
  "From Scratch",
  "Beginner-friendly",
  "Deep Learning",
  "LeetCode",
  "MIT",
  "CSS",
  "TypeScript",
  "Rigorous",
  "Mechanisms"
];

const Filters = ({ activeTier, setActiveTier, selectedTags, setSelectedTags, sortBy, setSortBy }) => {
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="glass-panel border border-slate-800/60 rounded-2xl p-5 mb-8 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Tier selector */}
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
            Creator tier
          </span>
          <div className="flex flex-wrap gap-2">
            {creatorTiers.map((tier) => (
              <button
                key={tier.value}
                onClick={() => setActiveTier(tier.value)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer border ${
                  activeTier === tier.value
                    ? "bg-indigo-600 border-indigo-500 text-white font-medium shadow-md shadow-indigo-600/10"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sorting controls */}
        <div className="min-w-[160px]">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
            Sort results
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full text-xs bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="default">Default Curated</option>
            <option value="subs-desc">Subscribers: High to Low</option>
            <option value="subs-asc">Subscribers: Low to High</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="border-t border-slate-800/40 pt-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
          Filter by tag
        </span>
        <div className="flex flex-wrap gap-1.5">
          {availableTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-[11px] px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  isSelected
                    ? "bg-violet-950 border border-violet-500/40 text-violet-200 font-medium"
                    : "bg-slate-900/40 border border-slate-800/40 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                }`}
              >
                {isSelected && (
                  <span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse"></span>
                )}
                {tag}
              </button>
            );
          })}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium underline px-2 cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
