
const avatarColors = [
  { from: "from-indigo-600", to: "to-violet-500" },
  { from: "from-emerald-600", to: "to-teal-500" },
  { from: "from-amber-500", to: "to-orange-600" },
  { from: "from-rose-600", to: "to-pink-500" },
  { from: "from-sky-600", to: "to-blue-500" },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ChannelRow = ({ channel, index, isFavorite, onToggleFavorite }) => {
  const { name, handle, subscribers, videos, description, url, topPick, emoji, tags } = channel;
  const gradient = avatarColors[index % avatarColors.length];

  return (
    <div
      className={`glass-panel glass-panel-hover rounded-2xl p-5 md:p-6 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-5 border ${
        topPick 
          ? "border-indigo-500/30 bg-indigo-950/5/10 shadow-lg shadow-indigo-950/20" 
          : "border-slate-800/80"
      }`}
    >
      {/* Top Pick Glow Overlay Line */}
      {topPick && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80"></div>
      )}

      {/* Left side: Avatar + Initials */}
      <div className="flex items-center justify-between md:justify-start gap-4">
        <div className="relative flex-shrink-0">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${gradient.from} ${gradient.to} flex items-center justify-center text-white text-base font-bold shadow-lg shadow-black/20 relative`}
          >
            {getInitials(name)}
            {emoji && (
              <span className="absolute -bottom-1 -right-1 text-sm bg-slate-900 border border-slate-800 w-5 h-5 rounded-md flex items-center justify-center">
                {emoji}
              </span>
            )}
          </div>
        </div>

        {/* Favorite Star (Mobile Only) */}
        <button
          onClick={() => onToggleFavorite(channel)}
          className="md:hidden p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
          aria-label="Bookmark channel"
        >
          <svg
            className={`w-5 h-5 ${isFavorite ? "fill-amber-500 text-amber-500" : "text-slate-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>
      </div>

      {/* Middle: Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center flex-wrap gap-2.5 mb-1.5">
          <h3 className="text-base font-bold text-white tracking-tight truncate">
            {name}
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {handle}
          </span>
          {topPick && (
            <span className="text-[10px] font-bold tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 px-2 py-0.5 rounded-md uppercase flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-indigo-400 animate-ping"></span>
              Top Pick
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {subscribers} Subscribers
          </span>
          {videos && (
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {videos} Videos
            </span>
          )}
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold text-violet-300 bg-violet-950/40 border border-violet-900/35 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right side: Bookmark Star (Desktop) + Action Buttons */}
      <div className="flex items-center justify-end gap-3 border-t border-slate-900 pt-4 md:border-t-0 md:pt-0">
        {/* Favorite Star (Desktop) */}
        <button
          onClick={() => onToggleFavorite(channel)}
          className="hidden md:flex p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all cursor-pointer"
          aria-label="Bookmark channel"
        >
          <svg
            className={`w-5 h-5 ${isFavorite ? "fill-amber-500 text-amber-500" : "text-slate-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>

        {/* Visit link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow md:flex-grow-0 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-700 text-slate-200 hover:text-white text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-2"
        >
          <span>Visit Channel</span>
          <svg
            className="w-3 h-3 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ChannelRow;
