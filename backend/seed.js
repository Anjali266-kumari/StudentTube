const mongoose = require("mongoose");
require("dotenv").config();

const channelSchema = new mongoose.Schema({
  subject: String,
  name: String,
  handle: String,
  subscribers: String,
  videos: String,
  description: String,
  tags: [String],
  url: String,
  topPick: Boolean,
  emoji: String,
});

const Channel = mongoose.model("Channel", channelSchema);

const seedData = [
  // ── C PROGRAMMING ──────────────────────────────────
  {
    subject: "c programming",
    name: "Jenny's Lectures CS IT",
    handle: "@JennyslecturesCSIT",
    subscribers: "1.7M",
    videos: "600+",
    description:
      "Best Hindi C programming channel — concepts explained step by step.",
    tags: ["C Language", "Hindi", "Beginner Friendly"],
    url: "https://www.youtube.com/@JennyslecturesCSIT",
    topPick: true,
    emoji: "💻",
  },
  {
    subject: "c programming",
    name: "Neso Academy",
    handle: "@nesoacademy",
    subscribers: "2.2M",
    videos: "1000+",
    description:
      "Detailed C programming + CS fundamentals in English with animations.",
    tags: ["C Language", "English", "Animations"],
    url: "https://www.youtube.com/@nesoacademy",
    topPick: false,
    emoji: "🎓",
  },
  {
    subject: "c programming",
    name: "CodeWithHarry",
    handle: "@CodeWithHarry",
    subscribers: "5.2M",
    videos: "500+",
    description: "Hinglish mein C programming — beginner se advanced tak.",
    tags: ["C Language", "Hinglish", "Projects"],
    url: "https://www.youtube.com/@CodeWithHarry",
    topPick: false,
    emoji: "🧑‍💻",
  },
  {
    subject: "c programming",
    name: "Gate Smashers",
    handle: "@GateSmashers",
    subscribers: "1.5M",
    videos: "800+",
    description: "C programming + Data Structures in Hindi — exam-focused.",
    tags: ["C Language", "Hindi", "GATE"],
    url: "https://www.youtube.com/@GateSmashers",
    topPick: false,
    emoji: "🚪",
  },

  // ── ENGINEERING MATHS ──────────────────────────────
  {
    subject: "engineering maths",
    name: "3Blue1Brown",
    handle: "@3blue1brown",
    subscribers: "6.1M",
    videos: "130+",
    description:
      "Visual and intuitive math — best for understanding concepts deeply.",
    tags: ["Visual Math", "English", "Intuition"],
    url: "https://www.youtube.com/@3blue1brown",
    topPick: true,
    emoji: "🔵",
  },
  {
    subject: "engineering maths",
    name: "Krista King Math",
    handle: "@kristakingmath",
    subscribers: "430K",
    videos: "800+",
    description:
      "Calculus, Linear Algebra, Differential Equations — all topics covered clearly.",
    tags: ["Calculus", "Linear Algebra", "English"],
    url: "https://www.youtube.com/@kristakingmath",
    topPick: false,
    emoji: "📐",
  },
  {
    subject: "engineering maths",
    name: "Khan Academy",
    handle: "@khanacademy",
    subscribers: "8.4M",
    videos: "7000+",
    description:
      "Free, complete math from basics to advanced — best for filling gaps.",
    tags: ["All Topics", "Free", "English"],
    url: "https://www.youtube.com/@khanacademy",
    topPick: false,
    emoji: "🏫",
  },
  {
    subject: "engineering maths",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    subscribers: "900K",
    videos: "500+",
    description:
      "Engineering Maths in Hindi — Calculus, Matrices, ODE, PDE sab kuch.",
    tags: ["Hindi", "Engineering Maths", "University Level"],
    url: "https://www.youtube.com/@BhagwanSinghVishwakarma",
    topPick: false,
    emoji: "📊",
  },

  // ── PHYSICS ────────────────────────────────────────
  {
    subject: "physics",
    name: "Pradeep Giri Academy",
    handle: "@pradeepgiriacademy",
    subscribers: "500K+",
    videos: "300+",
    description:
      "Engineering Physics 1st year ke liye — Mumbai University, SPPU, DBATU aligned.",
    tags: ["Hindi", "Engineering Physics", "1st Year"],
    url: "https://www.youtube.com/@pradeepgiriacademy",
    topPick: true,
    emoji: "⚛️",
  },
  {
    subject: "physics",
    name: "Fadu Engineer",
    handle: "@faduengineer",
    subscribers: "200K+",
    videos: "200+",
    description:
      "Engineering Physics in Hindi — mast style mein samjhate hain 1st year students ko.",
    tags: ["Hindi", "Engineering Physics", "1st Year"],
    url: "https://www.youtube.com/channel/UCV7iwGgy08lH2tVLRDT_Deg",
    topPick: false,
    emoji: "⚡",
  },
  {
    subject: "physics",
    name: "Gautam Varde",
    handle: "@gautamvarde",
    subscribers: "100K+",
    videos: "150+",
    description:
      "Engineering Physics BTech 1st year — numericals aur concepts clearly explained.",
    tags: ["Hindi", "Numericals", "BTech 1st Year"],
    url: "https://www.youtube.com/@gautamvarde",
    topPick: false,
    emoji: "🔬",
  },
  {
    subject: "physics",
    name: "Physics Wallah",
    handle: "@PhysicsWallah",
    subscribers: "10M+",
    videos: "3000+",
    description:
      "Best Hindi physics channel — concepts aur problems dono ke liye.",
    tags: ["Hindi", "Physics", "Alakh Pandey"],
    url: "https://www.youtube.com/@PhysicsWallah",
    topPick: false,
    emoji: "🌟",
  },

  // ── CHEMISTRY ──────────────────────────────────────
  {
    subject: "chemistry",
    name: "Unacademy JEE",
    handle: "@UnacademyJEEEnglish",
    subscribers: "1.4M",
    videos: "2000+",
    description:
      "Engineering Chemistry concepts — Organic, Inorganic, Physical Chemistry.",
    tags: ["Chemistry", "Hindi/English", "Concepts"],
    url: "https://www.youtube.com/@UnacademyJEEEnglish",
    topPick: true,
    emoji: "🧪",
  },
  {
    subject: "chemistry",
    name: "Khan Academy",
    handle: "@khanacademy",
    subscribers: "8.4M",
    videos: "7000+",
    description:
      "Chemistry basics to advanced — free, clear English explanations.",
    tags: ["English", "Free", "All Topics"],
    url: "https://www.youtube.com/@khanacademy",
    topPick: false,
    emoji: "🏫",
  },
  {
    subject: "chemistry",
    name: "Tyler DeWitt",
    handle: "@TylerDeWitt",
    subscribers: "840K",
    videos: "300+",
    description: "Chemistry made fun and easy — best for beginners, English.",
    tags: ["Beginner", "English", "Fun"],
    url: "https://www.youtube.com/@TylerDeWitt",
    topPick: false,
    emoji: "🎉",
  },

  // ── COMMUNICATION SKILLS ───────────────────────────
  {
    subject: "communication skills",
    name: "Speak English With Vanessa",
    handle: "@SpeakEnglishWithVanessa",
    subscribers: "4M",
    videos: "500+",
    description:
      "English speaking, fluency, pronunciation — best for everyday communication.",
    tags: ["Speaking", "English Fluency", "Pronunciation"],
    url: "https://www.youtube.com/@SpeakEnglishWithVanessa",
    topPick: true,
    emoji: "🗣️",
  },
  {
    subject: "communication skills",
    name: "TED",
    handle: "@TED",
    subscribers: "22M",
    videos: "4000+",
    description:
      "World's best speakers — public speaking aur presentation skills ke liye.",
    tags: ["Public Speaking", "Presentations", "English"],
    url: "https://www.youtube.com/@TED",
    topPick: false,
    emoji: "🎤",
  },
  {
    subject: "communication skills",
    name: "English With Lucy",
    handle: "@EnglishWithLucy",
    subscribers: "12M",
    videos: "400+",
    description:
      "British English — grammar, vocabulary, writing and speaking skills.",
    tags: ["Grammar", "Vocabulary", "Writing"],
    url: "https://www.youtube.com/@EnglishWithLucy",
    topPick: false,
    emoji: "🇬🇧",
  },
  {
    subject: "communication skills",
    name: "CareerVidz",
    handle: "@CareerVidz",
    subscribers: "570K",
    videos: "200+",
    description:
      "Interview prep, group discussions, email writing — professional communication.",
    tags: ["Interview", "GD", "Professional"],
    url: "https://www.youtube.com/@CareerVidz",
    topPick: false,
    emoji: "💼",
  },

  // ── ENGINEERING MECHANICS ──────────────────────────
  {
    subject: "engineering mechanics",
    name: "Pradeep Giri Academy",
    handle: "@pradeepgiriacademy",
    subscribers: "500K+",
    videos: "300+",
    description:
      "Engineering Mechanics 1st year ke liye best channel — sab university syllabus covered.",
    tags: ["Hindi", "Engineering Mechanics", "1st Year"],
    url: "https://www.youtube.com/@pradeepgiriacademy",
    topPick: true,
    emoji: "⚙️",
  },
  {
    subject: "engineering mechanics",
    name: "Tikle's Academy",
    handle: "@TIKLESACADEMY",
    subscribers: "400K+",
    videos: "1000+",
    description:
      "Engineering Mechanics + Applied Mechanics in Hindi — B.Tech, Polytechnic ke liye.",
    tags: ["Hindi", "Applied Mechanics", "Polytechnic"],
    url: "https://www.youtube.com/channel/UCNQHebTzfRahptcsmuOVufg",
    topPick: false,
    emoji: "🔧",
  },
  {
    subject: "engineering mechanics",
    name: "Manas Patnaik",
    handle: "@manaspatnaikofficial",
    subscribers: "300K+",
    videos: "400+",
    description:
      "Engineering Mechanics with amazing animations — English mein clearly explained.",
    tags: ["English", "Animations", "Mechanical"],
    url: "https://www.youtube.com/channel/UC0KjIJ7bcyqXgZV8u6IEJiA",
    topPick: false,
    emoji: "🎯",
  },

  // ── ENGINEERING DRAWING ────────────────────────────
  {
    subject: "engineering drawing",
    name: "Manas Patnaik",
    handle: "@manaspatnaikofficial",
    subscribers: "300K+",
    videos: "400+",
    description:
      "Best Engineering Drawing channel — animations se projections, sections, development sab sikho.",
    tags: ["English", "Animations", "Drawing"],
    url: "https://www.youtube.com/channel/UC0KjIJ7bcyqXgZV8u6IEJiA",
    topPick: true,
    emoji: "✏️",
  },
  {
    subject: "engineering drawing",
    name: "Tikle's Academy",
    handle: "@TIKLESACADEMY",
    subscribers: "400K+",
    videos: "1000+",
    description:
      "Engineering Drawing + Graphics in Hindi — B.Tech, ITI, Polytechnic sab ke liye.",
    tags: ["Hindi", "Engineering Graphics", "Polytechnic"],
    url: "https://www.youtube.com/channel/UCNQHebTzfRahptcsmuOVufg",
    topPick: false,
    emoji: "📏",
  },

  // ── BASIC ELECTRICAL ENGINEERING ───────────────────
  {
    subject: "basic electrical engineering",
    name: "Engineers ki Pathshala",
    handle: "@engineerskipathshala1111",
    subscribers: "893K",
    videos: "2700+",
    description:
      "1st & 2nd year engineering ke liye — BEE concepts clearly explain karte hain Umesh Dhande Sir.",
    tags: ["Hindi", "BEE", "1st Year"],
    url: "https://www.youtube.com/@engineerskipathshala1111",
    topPick: true,
    emoji: "⚡",
  },
  {
    subject: "basic electrical engineering",
    name: "Last Moment Tuitions",
    handle: "@Lastmomenttuitions",
    subscribers: "1M+",
    videos: "700+",
    description:
      "Dost jaisa padhata hai — BEE notes, previous papers, MCQs sab ek jagah.",
    tags: ["Hindi/English", "BEE", "Exam Prep"],
    url: "https://www.youtube.com/@Lastmomenttuitions",
    topPick: false,
    emoji: "📚",
  },
  {
    subject: "basic electrical engineering",
    name: "Perfect Computer Engineer",
    handle: "@perfectcomputerengineer",
    subscribers: "100K+",
    videos: "300+",
    description:
      "Basic Electrical Engineering concepts — clean aur simple explanations.",
    tags: ["English", "BEE", "Clean Explanation"],
    url: "https://www.youtube.com/channel/UCfGkxkJDQG7fBbX9mBtYz0A",
    topPick: false,
    emoji: "💡",
  },
  {
    subject: "basic electrical engineering",
    name: "Tikle's Academy",
    handle: "@TIKLESACADEMY",
    subscribers: "400K+",
    videos: "1000+",
    description:
      "Electrical Engineering in Hindi — B.Tech, Polytechnic ke liye complete coverage.",
    tags: ["Hindi", "Electrical Engineering", "Polytechnic"],
    url: "https://www.youtube.com/channel/UCNQHebTzfRahptcsmuOVufg",
    topPick: false,
    emoji: "🔌",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");
    await Channel.deleteMany({});
    console.log("🗑️  Old data cleared");
    await Channel.insertMany(seedData);
    console.log(`🌱 Seeded ${seedData.length} channels successfully!`);
    await mongoose.disconnect();
    console.log("✅ Done!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

seedDB();
