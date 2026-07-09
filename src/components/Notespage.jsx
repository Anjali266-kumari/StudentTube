import React, { useState, useEffect } from "react";

const subjects = [
  { id: "all", label: "All Subjects", emoji: "🗂️" },
  { id: "c programming", label: "C Programming", emoji: "🖥️" },
  { id: "electrical engineering", label: "Electrical Engg.", emoji: "🔌" },
  { id: "engineering biology", label: "Engg. Biology", emoji: "🧬" },
  { id: "engineering physics", label: "Engg. Physics", emoji: "🔭" },
  { id: "engineering mathematics", label: "Engg. Maths", emoji: "➗" },
  { id: "engineering mathematics ii", label: "Engg. Maths II", emoji: "📐" },
  { id: "engineering chemistry", label: "Engg. Chemistry", emoji: "🧪" },
  { id: "engineering mechanics", label: "Engg. Mechanics", emoji: "⚙️" },
  { id: "electronics engineering", label: "Electronics Engg.", emoji: "📡" },
  {
    id: "fundamental of measurement and sensor",
    label: "Meas. & Sensors",
    emoji: "📊",
  },
  { id: "question paper", label: "Question Paper", emoji: "📝" },
];

const API_BASE = "http://localhost:8000";

const NotesPage = () => {
  const [notesData, setNotesData] = useState([]);
  const [activeSubject, setActiveSubject] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/notes`)
      .then((res) => res.json())
      .then((data) => {
        setNotesData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch notes:", err);
        setLoading(false);
      });
  }, []);

  const filtered = notesData.filter((note) => {
    const matchSubject =
      activeSubject === "all" ||
      note.subject.trim().toLowerCase() === activeSubject.trim().toLowerCase();
    const matchSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      (note.description || "").toLowerCase().includes(search.toLowerCase());
    return matchSubject && matchSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">
      <div className="pt-10 pb-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          1st Year Resources
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-indigo-300 mb-3">
          Study Notes
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Handpicked, structured notes for all your first-year subjects — ready
          to download.
        </p>

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="text-center">
            <p className="text-xl font-bold text-white">{notesData.length}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Notes</p>
          </div>
          <div className="w-px h-8 bg-slate-800"></div>
          <div className="text-center">
            <p className="text-xl font-bold text-white">
              {subjects.length - 1}
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Subjects
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-6 justify-center">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSubject(s.id)}
            className={`text-sm px-4 py-2 rounded-full border font-medium transition-all duration-200 cursor-pointer ${
              activeSubject === s.id
                ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20"
                : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <span className="mr-1.5">{s.emoji}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-10 pr-4 text-sm bg-slate-900/60 border border-slate-800 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-white placeholder-slate-500 transition-all"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-slate-500 text-sm">
          Loading notes...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 glass-panel border border-slate-800/80 rounded-2xl">
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-2xl">
            🔍
          </div>
          <h3 className="text-sm font-bold text-white mb-1">
            No results found
          </h3>
          <p className="text-xs text-slate-500">
            Try a different subject or search term.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((note, idx) => (
            <div
              key={note._id}
              className="glass-panel glass-panel-hover flex items-center gap-4 border border-slate-800/80 rounded-xl px-4 py-3.5 group"
              style={{ animationDelay: `${idx * 30}ms` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-lg border bg-indigo-950/40 border-indigo-500/20">
                📄
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate mb-0.5">
                  {note.title}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  {note.description}
                </p>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  {note.pages} pages ·{" "}
                  <span className="text-slate-500">
                    {
                      subjects.find(
                        (s) =>
                          s.id.trim().toLowerCase() ===
                          note.subject.trim().toLowerCase(),
                      )?.label
                    }
                  </span>
                </p>
              </div>

              <a
                href={`${API_BASE}${note.pdfUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex
              items-center gap-1.5 text-xs font-semibold text-slate-300 border
              border-slate-700 rounded-lg px-3 py-2 hover:bg-indigo-600
              hover:border-indigo-500 hover:text-white transition-all
              duration-200 flex-shrink-0 group-hover:border-slate-600"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                Open
              </a>
            </div>
          ))}
        </div>
      )}

      {filtered.length > 0 && (
        <p className="text-xs text-slate-600 mt-5 text-center font-medium">
          Showing <span className="text-slate-400">{filtered.length}</span> note
          {filtered.length !== 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
};

export default NotesPage;
