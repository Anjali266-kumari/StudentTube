import { useState } from "react";

const avatarColors = [
  { from: "from-indigo-600", to: "to-violet-500", bg: "bg-indigo-600" },
  { from: "from-emerald-600", to: "to-teal-500", bg: "bg-emerald-600" },
  { from: "from-amber-500", to: "to-orange-600", bg: "bg-amber-500" },
  { from: "from-rose-600", to: "to-pink-500", bg: "bg-rose-600" },
  { from: "from-sky-600", to: "to-blue-500", bg: "bg-sky-600" },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ChannelRow = ({ channel, index, isFavorite, onToggleFavorite }) => {
  const {
    name,
    handle,
    subscribers,
    videos,
    description,
    url,
    topPick,
    emoji,
    tags,
  } = channel;
  const gradient = avatarColors[index % avatarColors.length];
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`glass-panel glass-panel-hover rounded-2xl overflow-hidden transition-all duration-300 relative flex flex-col h-full border group ${
        topPick
          ? "border-indigo-500/30 shadow-lg shadow-indigo-950/30"
          : "border-slate-800/70"
      }`}
    >
      {/* Top Pick Glow Line */}
      {topPick && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 z-10"></div>
      )}

      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
        {channel.thumbnail && !imgError ? (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Stylish fallback thumbnail */
          <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradient.from} ${gradient.to} relative`}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <span className="text-4xl mb-2 relative z-10">{emoji || "🎓"}</span>
            <span className="text-white font-bold text-lg relative z-10">{getInitials(name)}</span>
            <div className="absolute bottom-3 right-3">
              <svg className="w-7 h-7 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </div>
        )}

        {/* Top Pick Badge */}
        {topPick && (
          <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider text-indigo-200 bg-slate-950/85 border border-indigo-500/30 px-2 py-0.5 rounded-md uppercase flex items-center gap-1 backdrop-blur-sm z-10">
            <span className="w-1 h-1 rounded-full bg-indigo-400 animate-ping"></span>
            Top Pick
          </span>
        )}

        {/* Favorite Star */}
        <button
          onClick={() => onToggleFavorite(channel)}
          className={`absolute top-3 right-3 p-2 rounded-xl border backdrop-blur-sm transition-all duration-200 cursor-pointer z-10 ${
            isFavorite
              ? "bg-amber-500/20 border-amber-500/40 text-amber-400"
              : "bg-slate-950/70 border-slate-700/60 text-slate-300 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/10"
          }`}
          aria-label="Bookmark channel"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isFavorite ? "scale-110" : "group-hover:scale-105"}`}
            fill={isFavorite ? "currentColor" : "none"}
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

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="min-w-0">
            <h3 className="text-base font-bold text-white tracking-tight truncate">
              {name}
            </h3>
            {handle && (
              <span className="text-xs text-slate-500 font-medium">{handle}</span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-slate-400">{subscribers}</span>
          </span>
          {videos && (
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-slate-400">{videos} videos</span>
            </span>
          )}
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold text-violet-300/80 bg-violet-950/30 border border-violet-800/30 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Visit Channel CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 text-slate-300 hover:text-white text-xs font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 group/link"
        >
          <span>Visit Channel</span>
          <svg
            className="w-3 h-3 text-slate-500 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ChannelRow;
