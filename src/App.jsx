import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Results from "./components/Results";
import AIAssistant from "./components/AIAssistant";
import NotesPage from "./components/NotesPage";
import { getChannels } from "./api";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [channels, setChannels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState("");

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("studenttube_favorites");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
    return [];
  });

  const handleSearch = async (subject) => {
    setActiveTab("home");
    setQuery(subject);
    setLoading(true);
    setError(null);

    try {
      const res = await getChannels(subject, selectedSemester);
      setChannels(res.data); // backend returns an array of channel documents
    } catch (err) {
      console.error("Failed to fetch channels:", err);
      setError(
        "Could not load channels. Please check if the server is running.",
      );
      setChannels([]);
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const toggleFavorite = (channel) => {
    const isFav = favorites.some((fav) => fav._id === channel._id);
    let updated;
    if (isFav) {
      updated = favorites.filter((fav) => fav._id !== channel._id);
    } else {
      updated = [...favorites, channel];
    }
    setFavorites(updated);
    localStorage.setItem("studenttube_favorites", JSON.stringify(updated));
  };

  const handleClearSearch = () => {
    setQuery("");
    setChannels(null);
    setError(null);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [selectedSemester]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden flex flex-col">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] animate-glow-slow pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[140px] animate-glow-medium pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoriteCount={favorites.length}
        onHomeClick={handleClearSearch}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
      />

      <main className="flex-grow relative z-10 pt-6">
        {activeTab === "home" && (
          <>
            <Hero onSearch={handleSearch} />

            <div id="results">
              {loading && (
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                  <div className="inline-flex flex-col items-center gap-4">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 animate-spin"></div>
                      <div
                        className="absolute inset-2 rounded-full border border-transparent border-t-violet-400 animate-spin"
                        style={{
                          animationDuration: "0.6s",
                          animationDirection: "reverse",
                        }}
                      ></div>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">
                      Finding top educators
                      <span className="animate-pulse">...</span>
                    </p>
                  </div>
                </div>
              )}

              {!loading && error && (
                <div className="max-w-4xl mx-auto px-6 py-10">
                  <div className="glass-panel border border-red-500/20 rounded-2xl p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-red-950/40 border border-red-500/20 flex items-center justify-center mx-auto mb-4 text-xl">
                      ⚠️
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      Connection Error
                    </h3>
                    <p className="text-xs text-red-400/80 max-w-sm mx-auto">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {!loading && !error && (
                <Results
                  key={query}
                  query={query}
                  channels={channels}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onClearSearch={handleClearSearch}
                />
              )}
            </div>
          </>
        )}

        {activeTab === "notes" && (
          <div className="py-6">
            <NotesPage />
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="max-w-5xl mx-auto px-6 py-10">
            <header className="mb-8 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="text-amber-400">★</span>
                Your Collection
              </div>
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-200 mb-2">
                Saved Educators
              </h2>
              <p className="text-slate-400 text-sm">
                Your bookmarked shortlist of top-tier YouTube tutors.
              </p>
            </header>
            <Results
              key="favorites"
              query="Saved Favorites"
              channels={favorites.length > 0 ? favorites : []}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              isFavoritesTab={true}
            />
          </div>
        )}

        {activeTab === "ai-assistant" && (
          <div className="py-6">
            <div className="max-w-3xl mx-auto px-6 text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                AI Powered
              </div>
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-300 mb-2">
                StudentGuide AI Advisor
              </h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                Ask questions or request structured study paths compiled from
                our curated educator dataset.
              </p>
            </div>
            <AIAssistant />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
