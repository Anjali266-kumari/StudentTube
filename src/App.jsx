import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SubjectsGrid from "./components/SubjectGrid";
import Results from "./components/Results";
import AIAssistant from "./components/AIAssistant";
import { getChannelsBySubject } from "./data/channels";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [channels, setChannels] = useState(null);
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

  const handleSearch = (subject) => {
    setActiveTab("home");
    setQuery(subject);
    setChannels(getChannelsBySubject(subject));
    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const toggleFavorite = (channel) => {
    const isFav = favorites.some((fav) => fav.id === channel.id);
    let updated;
    if (isFav) {
      updated = favorites.filter((fav) => fav.id !== channel.id);
    } else {
      updated = [...favorites, channel];
    }
    setFavorites(updated);
    localStorage.setItem("studenttube_favorites", JSON.stringify(updated));
  };

  const handleClearSearch = () => {
    setQuery("");
    setChannels(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden flex flex-col">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] animate-glow-slow pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[140px] animate-glow-medium pointer-events-none"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        favoriteCount={favorites.length} 
        onHomeClick={handleClearSearch}
      />

      <main className="flex-grow relative z-10 pt-6">
        {activeTab === "home" && (
          <>
            <Hero onSearch={handleSearch} />
            
            {/* Show subjects grid if no query is made */}
            {!query && (
              <SubjectsGrid onSubjectClick={handleSearch} />
            )}

            {/* Results section */}
            <div id="results">
              <Results 
                key={query}
                query={query} 
                channels={channels} 
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onClearSearch={handleClearSearch}
              />
            </div>
          </>
        )}

        {activeTab === "favorites" && (
          <div className="max-w-3xl mx-auto px-6 py-12">
            <header className="mb-8 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center sm:justify-start gap-2.5">
                <svg className="w-6 h-6 text-amber-500 fill-amber-500" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
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
              <h2 className="text-2xl font-bold text-white mb-2">StudentGuide AI Advisor</h2>
              <p className="text-slate-400 text-sm">
                Ask questions or request structured study paths compiled from our dataset.
              </p>
            </div>
            <AIAssistant />
          </div>
        )}
      </main>

      {/* Modern minimal footer */}
      <footer className="border-t border-slate-900 bg-slate-950/60 backdrop-blur-md py-6 px-6 text-center text-xs text-slate-600 z-10">
        <p>© 2026 StudentTube Finder. Handcrafted for modern learners.</p>
      </footer>
    </div>
  );
}

export default App;
