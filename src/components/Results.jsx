import ChannelRow from "./channelRow";

const Results = ({
  query,
  channels,
  favorites,
  onToggleFavorite,
  onClearSearch,
  isFavoritesTab = false,
}) => {
  if (!query) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
      {!isFavoritesTab && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Top Picks for "{query}"
              <span className="text-xs font-semibold text-slate-500 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                {channels ? channels.length : 0} results
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
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to subjects
          </button>
        </div>
      )}

      {channels && channels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map((channel, i) => {
            const isFav = favorites.some((fav) => fav._id === channel._id);
            return (
              <ChannelRow
                key={channel._id}
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
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-500">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {isFavoritesTab ? (
            <>
              <h3 className="text-sm font-bold text-white mb-1">
                No saved educators yet
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the star icon on channel cards during your searches to
                save them here.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-sm font-bold text-white mb-1">
                No channels found for "{query}"
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching subjects like DBMS, Physics, DSA, Digital
                Electronics, or Engineering Maths.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
