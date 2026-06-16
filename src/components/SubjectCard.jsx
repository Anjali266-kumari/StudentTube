const icons = {
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
    />
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
      />
    </>
  ),
  "math-function": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20l8-16M16 4l4 16M9 4h6M7 20h6"
    />
  ),
  "atom-2": (
    <>
      <circle cx="12" cy="12" r="1" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </>
  ),
  world: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z"
      />
    </>
  ),
  flask: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3h6M10 3v6L4.5 18a1.5 1.5 0 001.3 2.2h12.4a1.5 1.5 0 001.3-2.2L14 9V3"
    />
  ),
};

const SubjectCard = ({ name, count, icon, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className="group text-left glass-panel glass-panel-hover rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start"
    >
      <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/25 group-hover:bg-indigo-950/20 transition-all duration-300 mb-4">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {icons[icon]}
        </svg>
      </div>
      <p className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors leading-tight">
        {name}
      </p>
      <p className="text-xs text-slate-500 mt-1 font-medium">{count}</p>
    </button>
  );
};

export default SubjectCard;
