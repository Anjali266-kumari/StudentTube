import { useState, useRef, useEffect } from "react";
import channelsData from "../data/channels";

const suggestions = [
  { label: "🚀 Full-Stack Web Dev Path", query: "web dev path" },
  { label: "🧠 Machine Learning & AI Path", query: "ml path" },
  { label: "🌳 Data Structures Masterclass", query: "dsa path" },
  { label: "📐 Math & Physics Foundations", query: "math physics path" },
];

const PREDEFINED_ANSWERS = {
  "web dev path": `Here is your step-by-step roadmap to master **Web Development** using our top-ranked educators:

1. **Foundations & Core Layouts (CSS/HTML)**
   - Recommend starting with **Kevin Powell** (@KevinPowell). He is the absolute gold standard for mastering CSS layouts, Flexbox, Grid, and responsive web design.
   
2. **JavaScript & Full Stack Crash Courses**
   - Head over to **Traversy Media** (@traversymedia) (our Top Pick) for thorough, beginner-friendly crash courses on JS, Node.js, and DB integrations.
   
3. **Advanced Frontend & Fast Explainers**
   - Use **Fireship** (@Fireship) for rapid-fire 100-second explainers on new web technologies.
   - Watch **Theo - t3.gg** (@t3dotgg) for modern TypeScript, Next.js, and opinions on real-world web architecture.`,

  "ml path": `To build a solid foundation in **Machine Learning and Artificial Intelligence**, follow this educational sequence:

1. **Deep Mathematical Intuition**
   - Start with **3Blue1Brown** (@3blue1brown) (our Top Pick). His visual explanations of neural networks, calculus, and linear algebra are legendary.
   
2. **Algorithm & Statistical Concepts**
   - Watch **StatQuest with Josh Starmer** (@statquest) to understand the mathematics behind ML models without getting lost in notations.
   
3. **Code From Scratch & LLMs**
   - Go deep with **Andrej Karpathy** (@AndrejKarpathy) (former Tesla AI Director) for building Neural Networks and GPT architectures from scratch in Python.
   
4. **Practical Application & Frameworks**
   - Check out **Sentdex** (@sentdex) for Python ML libraries and reinforcement learning, and **fast.ai** (@fastdotai) for Jeremy Howard's top-down deep learning courses.
   
5. **Stay Updated with AI Research**
   - Watch **Two Minute Papers** (@TwoMinutePapers) to keep up with the latest advancements and AI research papers in 5 minutes.`,

  "dsa path": `Mastering **Data Structures & Algorithms** is crucial for placements and technical interviews. Here is the recommended roadmap:

1. **Whiteboard Explanations (Core Concepts)**
   - Start with **Abdul Bari** (@abdul_bari) (our Top Pick). His whiteboard explanations of trees, graphs, and dynamic programming are exceptionally clear.
   
2. **Coding Practice & Interview Patterns**
   - Follow **NeetCode** (@NeetCode) for structured LeetCode roadmaps, visual pattern analyses, and clean coding walkthroughs.
   
3. **Beginner Friendly Intro**
   - Use **CS Dojo** (@CSDojo) for a friendly, Google-engineer-guided introduction to time complexity and basic data structures.`,

  "math physics path": `Here is the roadmap to master **Mathematics & Classical Physics**:

1. **Visual Calculus & Linear Algebra**
   - **3Blue1Brown** (@3blue1brown) (our Top Pick) provides the ultimate visual playlists for Linear Algebra and the Essence of Calculus.
   
2. **Rigorous College-Level Lectures**
   - Deep dive into college-level classical mechanics and electromagnetism with **Lectures by Walter Lewin** (@lecturesbywalterlewin) (MIT professor lectures).
   
3. **Conceptual Physics & Experiments**
   - Watch **Physics Girl** (@physicsgirl) by Dianna Cowern for engaging, conceptual physics experiments and curiosity-driven science.`
};

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am StudentGuide AI, your personalized study advisor. Select a roadmap below or ask me about subjects you want to learn!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const searchDatabase = (query) => {
    const term = query.toLowerCase().trim();
    const matches = [];

    // Search channels
    Object.entries(channelsData).forEach(([subject, list]) => {
      list.forEach((channel) => {
        const matchesSubject = subject.toLowerCase().includes(term);
        const matchesName = channel.name.toLowerCase().includes(term);
        const matchesTags = channel.tags.some(t => t.toLowerCase().includes(term));
        const matchesDesc = channel.description.toLowerCase().includes(term);

        if (matchesSubject || matchesName || matchesTags || matchesDesc) {
          if (!matches.some(m => m.id === channel.id)) {
            matches.push({ ...channel, subject });
          }
        }
      });
    });

    return matches;
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMessage = {
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const normalizedQuery = textToSend.toLowerCase().trim();
      let replyText = "";

      // Check predefined roadmaps
      if (PREDEFINED_ANSWERS[normalizedQuery]) {
        replyText = PREDEFINED_ANSWERS[normalizedQuery];
      } else if (normalizedQuery.includes("web dev") || normalizedQuery.includes("html") || normalizedQuery.includes("css") || normalizedQuery.includes("javascript")) {
        replyText = PREDEFINED_ANSWERS["web dev path"];
      } else if (normalizedQuery.includes("machine learning") || normalizedQuery.includes("ml") || normalizedQuery.includes("ai") || normalizedQuery.includes("deep learning")) {
        replyText = PREDEFINED_ANSWERS["ml path"];
      } else if (normalizedQuery.includes("data structure") || normalizedQuery.includes("dsa") || normalizedQuery.includes("algorithm") || normalizedQuery.includes("leetcode")) {
        replyText = PREDEFINED_ANSWERS["dsa path"];
      } else if (normalizedQuery.includes("math") || normalizedQuery.includes("physics") || normalizedQuery.includes("calculus") || normalizedQuery.includes("algebra")) {
        replyText = PREDEFINED_ANSWERS["math physics path"];
      } else {
        // Search custom keywords in channel DB
        const dbMatches = searchDatabase(textToSend);
        if (dbMatches.length > 0) {
          replyText = `I found **${dbMatches.length}** educators matching **"${textToSend}"** in our system:\n\n` + 
            dbMatches.map((ch, idx) => 
              `${idx + 1}. **${ch.name}** [${ch.handle}] (${ch.subscribers} subs) - *${ch.subject.toUpperCase()}*\n   * "${ch.description}"\n   * Link: [Visit Channel](${ch.url})`
            ).join("\n\n");
        } else {
          replyText = `I couldn't find a direct channel match for **"${textToSend}"**. \n\nTry checking our structured study roadmaps by clicking the quick links below or search topics like **"Machine Learning"**, **"React"**, **"Whiteboard"**, or **"Organic Chemistry"**!`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1200);
  };

  const handleSuggestionClick = (query) => {
    handleSend(query);
  };

  // Convert markdown-like syntax to bold/italic/links for basic chat preview
  const formatText = (text) => {
    return text.split("\n").map((line, lineIdx) => {
      let content = line;
      // Bold text formatting **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;
      
      while ((match = boldRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="font-semibold text-white">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }

      // Re-process parts for links [text](url)
      const finalParts = [];
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;

      parts.forEach((part) => {
        if (typeof part !== "string") {
          finalParts.push(part);
          return;
        }

        let linkLastIndex = 0;
        let linkMatch;
        while ((linkMatch = linkRegex.exec(part)) !== null) {
          if (linkMatch.index > linkLastIndex) {
            finalParts.push(part.substring(linkLastIndex, linkMatch.index));
          }
          finalParts.push(
            <a
              key={linkMatch.index}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium underline decoration-indigo-400/30 hover:decoration-indigo-300 transition-all"
            >
              {linkMatch[1]}
            </a>
          );
          linkLastIndex = linkRegex.lastIndex;
        }
        if (linkLastIndex < part.length) {
          finalParts.push(part.substring(linkLastIndex));
        }
      });

      return (
        <div key={lineIdx} className={lineIdx > 0 ? "mt-2" : ""}>
          {finalParts.length > 0 ? finalParts : content}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl flex flex-col h-[600px]">
        {/* Header */}
        <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800/85 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base">StudentGuide AI</h3>
              <p className="text-xs text-indigo-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Online · Study Advisor
              </p>
            </div>
          </div>
          <span className="text-xs text-slate-500 bg-slate-950/50 px-2.5 py-1 rounded-md border border-slate-800">
            Powered by channels DB
          </span>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950/20">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-3 max-w-[85%] ${
                msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-lg bg-indigo-900/60 border border-indigo-700/30 flex items-center justify-center flex-shrink-0 text-xs font-bold text-indigo-300">
                  AI
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white rounded-br-none shadow-lg shadow-indigo-600/15"
                    : "bg-slate-900/90 text-slate-300 rounded-bl-none border border-slate-800/80"
                }`}
              >
                {formatText(msg.text)}
                <span className={`block text-[10px] mt-1.5 ${msg.sender === "user" ? "text-indigo-200 text-right" : "text-slate-500"}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-lg bg-indigo-900/60 border border-indigo-700/30 flex items-center justify-center flex-shrink-0 text-xs font-bold text-indigo-300">
                AI
              </div>
              <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-2.5 h-2.5 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-2.5 h-2.5 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Suggestions Quick Bar */}
        {messages.length === 1 && (
          <div className="px-6 py-3 bg-slate-900/40 border-t border-slate-900 flex flex-wrap gap-2">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(s.query)}
                className="text-xs bg-slate-900 hover:bg-slate-850 hover:border-slate-700 text-slate-300 border border-slate-800/80 px-3 py-1.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        {/* Input area */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="p-4 bg-slate-900/80 border-t border-slate-800/85 flex gap-2 items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything: e.g. Recommend linear algebra channels..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="h-11 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-medium text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/10 cursor-pointer disabled:cursor-not-allowed"
          >
            Send
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
