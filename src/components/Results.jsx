import { useState, useMemo } from "react";
import ChannelRow from "./channelRow";
import Filters from "./Filters";

// Helper to parse subscriber string to number (e.g. "5.8M" -> 5800000)
const parseSubs = (str) => {
  if (!str) return 0;
  const num = parseFloat(str.replace(/[^0-9.]/g, ""));
  if (str.toLowerCase().includes("m")) return num * 1000000;
  if (str.toLowerCase().includes("k")) return num * 1000;
  return num;
};

const Results = ({ query, channels, favorites, onToggleFavorite, onClearSearch, isFavoritesTab = false }) => {
  const [activeTier, setActiveTier] = useState("all");
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  // Filter and sort channel list
  const processedChannels = useMemo(() => {
    if (!channels) return [];

    let result = [...channels];

    // 1. Filter by Creator Tier
    if (activeTier !== "all") {
      result = result.filter((ch) => {
        const subs = parseSubs(ch.subscribers);
        if (activeTier === "mega") return subs >= 1500000;
        if (activeTier === "mid") return subs >= 500000 && subs < 1500000;
        if (activeTier === "rising") return subs < 500000;
        return true;
      });
    }

    // 2. Filter by Tags (Matches ALL selected tags)
    if (selectedTags.length > 0) {
      result = result.filter((ch) => {
        if (!ch.tags) return false;
        const chTagsLower = ch.tags.map((t) => t.toLowerCase());
        return selectedTags.every((t) => chTagsLower.includes(t.toLowerCase()));
      });
    }

    // 3. Sort Results
    if (sortBy === "subs-desc") {
      result.sort((a, b) => parseSubs(b.subscribers) - parseSubs(a.subscribers));
    } else if (sortBy === "subs-asc") {
      result.sort((a, b) => parseSubs(a.subscribers) - parseSubs(b.subscribers));
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Default: Top Pick first, then original database indexing
      result.sort((a, b) => {
        if (a.topPick && !b.topPick) return -1;
        if (!a.topPick && b.topPick) return 1;
        return 0;
      });
    }

    return result;
  }, [channels, activeTier, selectedTags, sortBy]);

  if (!query) return null;

  const handleResetFilters = () => {
    setActiveTier("all");
    setSelectedTags([]);
    setSortBy("default");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
      {/* Search Result Headers / Actions */}
      {!isFavoritesTab && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Top Picks for "{query}"
              <span className="text-xs font-semibold text-slate-500 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                {processedChannels.length} results
              </span>
            </h2>
            <p className="text-slate-500 text-xs mt-0.5">
              Showing curated shortlist of educators.
            </p>
          </div>
          
          <button
            onClick={onClearSearch}
            className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-center"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to subjects
          </button>
        </div>
      )}

      {/* Render Filters Bar only if we have channels to display */}
      {channels && channels.length > 0 && (
        <Filters
          activeTier={activeTier}
          setActiveTier={setActiveTier}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      )}

      {/* Channels List */}
      {processedChannels.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {processedChannels.map((channel, i) => {
            const isFav = favorites.some((fav) => fav.id === channel.id);
            return (
              <ChannelRow
                key={channel.id}
                channel={channel}
                index={i}
                isFavorite={isFav}
                onToggleFavorite={onToggleFavorite}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 glass-panel border border-slate-800/80 rounded-2xl">
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center mx-auto mb-4 text-slate-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {isFavoritesTab ? (
            <>
              <h3 className="text-sm font-bold text-white mb-1">
                No saved educators yet
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the star star icon on channel cards during your searches to build your shortlist here.
              </p>
            </>
          ) : channels && channels.length > 0 ? (
            <>
              <h3 className="text-sm font-bold text-white mb-1">
                No matches for active filters
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                Try loosening your tag selections or creator tier criteria.
              </p>
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 rounded-lg cursor-pointer"
              >
                Clear all filters
              </button>
            </>
          ) : (
            <>
              <h3 className="text-sm font-bold text-white mb-1">
                No channels found for "{query}"
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try checking subjects like Machine Learning, React, Data Structures, Web Development, Physics, or Chemistry.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
