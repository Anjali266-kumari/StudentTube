export const popularTopics = [
  "C Programming",
  "Engineering Maths",
  "Physics",
  "Chemistry",
  "Engineering Mechanics",
  "Engineering Drawing",
  "Basic Electrical Engineering",
];

const channelsData = {
  "c programming": [
    {
      id: 1,
      name: "Jenny's Lectures CS IT",
      handle: "@JennyslecturesCSIT",
      thumbnail: "https://img.youtube.com/vi/ZzaPdXTrSb8/maxresdefault.jpg",
      subscribers: "1.7M",
      videos: "600+",
      description:
        "Best Hindi C programming channel — concepts explained step by step.",
      tags: ["C Language", "Hindi", "Beginner Friendly"],
      url: "https://www.youtube.com/@JennyslecturesCSIT",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ],

  "engineering maths": [
    {
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
  ],

  physics: [
    {
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
  ],

  chemistry: [
    {
      id: 30,
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
      id: 31,
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
      id: 32,
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
  ],

  "communication skills": [
    {
      id: 40,
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
      id: 41,
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
      id: 42,
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
      id: 43,
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
  ],

  "engineering mechanics": [
    {
      id: 50,
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
      id: 51,
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
      id: 52,
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
  ],

  "engineering drawing": [
    {
      id: 60,
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
      id: 61,
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
  ],

  "basic electrical engineering": [
    {
      id: 70,
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
      id: 71,
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
      id: 72,
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
      id: 73,
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
  ],
};

// Search function — case insensitive, partial match
export const getChannelsBySubject = (query) => {
  const q = query.toLowerCase().trim();
  const key = Object.keys(channelsData).find(
    (k) => k.includes(q) || q.includes(k),
  );
  return key ? channelsData[key] : null;
};

export default channelsData;
