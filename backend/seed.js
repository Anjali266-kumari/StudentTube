import dotenv from "dotenv";
import mongoose from "mongoose";
import Channel from "./models/Channel.js";

dotenv.config();

const data = [
  // ==================== 1st SEMESTER ====================

  {
    subject: "Engineering Maths",
    semester: "1",
    name: "Pradeep Giri Academy",
    handle: "@pradeepgiriacademy",
    thumbnail: "https://i.ytimg.com/vi/zKyuBNPKjYY/mqdefault.jpg",
    subscribers: "716K",
    videos: "300+",
    description:
      "Linear-Non Linear Programming Problems explained lecture-wise for engineering 2nd semester students.",
    url: "https://www.youtube.com/watch?v=zzQ2MqfSvQA&list=PLsaYUvTqpYBNjbEdC1timwVERdOPqh7QV",
    tags: ["Linear Programming", "Hindi", "Engineering Maths"],
  },

  {
    subject: "Engineering Mathematics-1",
    semester: "1",
    name: "Dr. Gajendra Purohit",
    handle: "@GajendraPurohit",
    thumbnail: "https://i.ytimg.com/vi/p5rBJj5CKCg/mqdefault.jpg",
    subscribers: "1.82M",
    videos: "",
    description:
      "Rank of Matrix Using Transformation | Normal Form, and other Engineering Mathematics-1 topics in Hindi by GP Sir.",
    url: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc",
    tags: ["First Year", "Matrices", "Hindi"],
  },

  {
    subject: "C Programming",
    semester: "1",
    name: "Jenny's Lectures CS IT",
    handle: "@JennyslecturesCSIT",
    thumbnail: "https://i.ytimg.com/vi/EjavYOFoJJ0/mqdefault.jpg",
    subscribers: "2.08M",
    videos: "",
    description: "C Programming tutorials for first year engineering students.",
    url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
    tags: ["First Year", "C Programming", "English"],
  },

  {
    subject: "Basic Electrical Engineering",
    semester: "1",
    name: "Delta Academy AE & JE Exams by Ranjan Sir",
    handle: "@DeltaacademyAEJE",
    thumbnail: "https://i.ytimg.com/vi/hGpmRXKL8aM/mqdefault.jpg",
    subscribers: "5.38K",
    videos: "",
    description:
      "Introduction to Basic Electrical Engineering 2023 | Crash Course by Ranjan Rai Sir, Delta Academy.",
    url: "https://www.youtube.com/watch?v=hGpmRXKL8aM&list=PLqcjmy5B6NTh_keSu8O2-4lhunGXo45cm",
    tags: ["First Year", "BEE", "Hindi"],
  },

  {
    subject: "Engineering Physics",
    semester: "1",
    name: "Goutam Varde",
    handle: "",
    thumbnail: "https://i.ytimg.com/vi/3QQWi8Rtaxg/mqdefault.jpg",
    subscribers: "232K",
    videos: "",
    description:
      "Electronic Materials (Atom and its Structure) | Physics for BE/BTech 1st year engineering.",
    url: "https://www.youtube.com/playlist?list=PL3qvHcrYGy1u112gfsHycdWaLTVRt8ame",
    tags: ["First Year", "Numericals", "Hindi"],
  },

  {
    subject: "Indian Knowledge System",
    semester: "1",
    name: "X-ray Brain (Degree Study)",
    handle: "",
    thumbnail: "https://i.ytimg.com/vi/bzSZxSxgw7U/mqdefault.jpg",
    subscribers: "5.42K",
    videos: "",
    description: "Indian Knowledge System - UG First Year complete playlist.",
    url: "https://www.youtube.com/playlist?list=PLsUxyMdqwSZykj9ApuzPW6APEdu5t28HB",
    tags: ["First Year", "IKS"],
  },

  {
    subject: "Biology For Engineers",
    semester: "1",
    name: "D Sumathi",
    handle: "",
    thumbnail: "https://i.ytimg.com/vi/smhWTB1Eh_E/mqdefault.jpg",
    subscribers: "21.5K",
    videos: "",
    description:
      "Cell as Basic Unit of Life | Cell Theory, Cell Shapes, Cell Structure, Cell Cycle.",
    url: "https://www.youtube.com/playlist?list=PLmcndht8X48xxRzmEr330TBmQRWCk-57I",
    tags: ["First Year", "Biology"],
  },

  // ==================== 2nd SEMESTER ====================

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    thumbnail: "https://i.ytimg.com/vi/eJaoJ4pA8RE/mqdefault.jpg",
    subscribers: "995K",
    videos: "",
    description:
      "What is Differential Equation? Why we study Differential Equation in BTech & BSc?",
    url: "https://www.youtube.com/watch?v=eJaoJ4pA8RE&list=PLdM-WZokR4tZSBbc5JJGkZYxhbWrm9OqY",
    tags: ["Second Semester", "Differential Equations", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    thumbnail: "https://i.ytimg.com/vi/OET0qwat15o/hqdefault.jpg",
    subscribers: "995K",
    videos: "",
    description:
      "Ordinary Differential Equation - concept, order and degree in Hindi.",
    url: "https://www.youtube.com/watch?v=OET0qwat15o&list=PLdM-WZokR4tbGKbeK8fDIdEN0NEcvAQlC",
    tags: ["Second Semester", "ODE", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Pradeep Giri Academy",
    handle: "@pradeepgiriacademy",
    thumbnail: "https://i.ytimg.com/vi/TH4Kd9mfIgI/mqdefault.jpg",
    subscribers: "717K",
    videos: "",
    description:
      "Differential Equation of First Order and First Degree | Engineering Mathematics.",
    url: "https://www.youtube.com/watch?v=TH4Kd9mfIgI&list=PLT3bOBUU3L9g0aergP43HK9ihc_UG7Kbx",
    tags: ["Second Semester", "Differential Equations", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Dream Maths",
    handle: "@DreamMaths",
    thumbnail: "https://i.ytimg.com/vi/14qwp08k0ng/hqdefault.jpg",
    subscribers: "419K",
    videos: "",
    description:
      "Introduction to Differential Equations | BBA, BCA, B.COM, B.TECH.",
    url: "https://www.youtube.com/watch?v=14qwp08k0ng&list=PLEHGYFbPuuMFt8aEwrYIWOQh-b6Qvn5N6",
    tags: ["Second Semester", "Differential Equations", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    thumbnail: "https://i.ytimg.com/vi/xydJU0CUR6o/hqdefault.jpg",
    subscribers: "995K",
    videos: "",
    description: "Partial Differential Equation - Formation of PDE in Hindi.",
    url: "https://www.youtube.com/watch?v=xydJU0CUR6o&list=PLdM-WZokR4tapVpJ_ACXtGB0oUQqMmfmM",
    tags: ["Second Semester", "PDE", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    thumbnail: "https://i.ytimg.com/vi/ohYA_zegWjU/hqdefault.jpg",
    subscribers: "995K",
    videos: "",
    description:
      "Partial Differential Equation 2.0 - Concept, order, degree of PDE.",
    url: "https://www.youtube.com/watch?v=ohYA_zegWjU&list=PLdM-WZokR4tYFgr-wbDT643Hy2M_n2P3w",
    tags: ["Second Semester", "PDE", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    thumbnail: "https://i.ytimg.com/vi/Cqsmb5eVzQk/hqdefault.jpg",
    subscribers: "995K",
    videos: "",
    description: "Probability - Random Experiment & Sample Space in Hindi.",
    url: "https://www.youtube.com/watch?v=Cqsmb5eVzQk&list=PLWpLtDYKhjfoDrzfLHxQCbOxyrxPEW1ZP",
    tags: ["Second Semester", "Probability", "Hindi"],
  },

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Pradeep Giri Academy",
    handle: "@pradeepgiriacademy",
    thumbnail: "https://i.ytimg.com/vi/Y0_260pKtkA/hqdefault.jpg",
    subscribers: "717K",
    videos: "",
    description:
      "Probability | Law of Probability and Conditional Probability.",
    url: "https://www.youtube.com/watch?v=d3I_uKmBT4E&list=PLT3bOBUU3L9jex8hXzVAszMS8NOILa7IV&index=4",
    tags: ["Second Semester", "Probability", "Hindi"],
  },

  {
    subject: "Elements of Electronics Engineering",
    semester: "2",
    name: "Engineering Funda",
    handle: "@EngineeringFunda",
    thumbnail: "https://i.ytimg.com/vi/hYv113KcelU/hqdefault.jpg",
    subscribers: "641K",
    videos: "",
    description: "Basic Electronics by Engineering Funda.",
    url: "https://www.youtube.com/watch?v=hYv113KcelU&list=PLgwJf8NK-2e76qHT4VOu9uTw8wj0i4blS",
    tags: ["Second Semester", "Electronics", "Hindi"],
  },

  {
    subject: "Elements of Electronics Engineering",
    semester: "2",
    name: "Gautam Varde",
    handle: "@GautamVarde",
    thumbnail: "https://i.ytimg.com/vi/icrAf1us2IQ/hqdefault.jpg",
    subscribers: "232K",
    videos: "",
    description: "Forward Bias (P N Junction Diode) theory & applications.",
    url: "https://www.youtube.com/watch?v=icrAf1us2IQ&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy",
    tags: ["Second Semester", "Electronics", "Hindi"],
  },

  {
    subject: "Engineering Drawing and Computer Graphics",
    semester: "2",
    name: "Manas Patnaik",
    handle: "@ManasPatnaik",
    thumbnail: "https://i.ytimg.com/vi/SB83cUaAiCM/hqdefault.jpg",
    subscribers: "493K",
    videos: "",
    description: "Introduction to Orthographic Projection - Hindi.",
    url: "https://www.youtube.com/watch?v=SB83cUaAiCM&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU",
    tags: ["Second Semester", "Engineering Drawing", "Hindi"],
  },

  {
    subject: "Engineering Drawing and Computer Graphics",
    semester: "2",
    name: "Manas Patnaik",
    handle: "@ManasPatnaik",
    thumbnail: "https://i.ytimg.com/vi/WG6H2pISUzQ/hqdefault.jpg",
    subscribers: "493K",
    videos: "",
    description:
      "Orthographic Projection - An Introduction | Engineering Graphics.",
    url: "https://www.youtube.com/watch?v=WG6H2pISUzQ&list=PLIhUrsYr8yHwDUrVYmUNYkEeZgZTvoIfS",
    tags: ["Second Semester", "Engineering Drawing", "English"],
  },

  {
    subject: "Engineering Drawing and Computer Graphics",
    semester: "2",
    name: "Tikle's Academy",
    handle: "@TIKLESACADEMY",
    thumbnail: "https://i.ytimg.com/vi/gp3oKSEnEFM/hqdefault.jpg",
    subscribers: "953K",
    videos: "",
    description:
      "Engineering Drawing & Engineering Graphics preparation guide.",
    url: "https://www.youtube.com/watch?v=gp3oKSEnEFM&list=PLDN15nk5uLiD3MEUiqsYPnZOHcVu7um6_",
    tags: ["Second Semester", "Engineering Drawing", "Hindi"],
  },

  {
    subject: "Engineering Mechanics",
    semester: "2",
    name: "Pradeep Giri Academy",
    handle: "@pradeepgiriacademy",
    thumbnail: "https://i.ytimg.com/vi/OvbSR3w61lQ/hqdefault.jpg",
    subscribers: "717K",
    videos: "",
    description:
      "System of Forces | Resolution of Forces | Engineering Mechanics.",
    url: "https://www.youtube.com/watch?v=OvbSR3w61lQ&list=PLT3bOBUU3L9hADhGPsZjSddwAC3BvJDnl",
    tags: ["Second Semester", "Engineering Mechanics", "Hindi"],
  },

  {
    subject: "Engineering Mechanics",
    semester: "2",
    name: "Tikle's Academy",
    handle: "@TIKLESACADEMY",
    thumbnail: "https://i.ytimg.com/vi/Vb1aMHC1_BM/hqdefault.jpg",
    subscribers: "953K",
    videos: "",
    description:
      "Complete Study of Free Body Diagram in Engineering Mechanics.",
    url: "https://www.youtube.com/watch?v=Vb1aMHC1_BM&list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI",
    tags: ["Second Semester", "Engineering Mechanics", "Hindi"],
  },

  // ==================== 3rd SEMESTER ====================

  {
    subject: "Engineering Mathematics",
    semester: "3",
    name: "Dr. Gajendra Purohit",
    handle: "@GajendraPurohit",
    thumbnail: "https://i.ytimg.com/vi/V3iEsLPAD68/mqdefault.jpg",
    subscribers: "1.82M",
    videos: "",
    description:
      "Statistics and Probability | Random Variable & Probability Distribution.",
    url: "https://www.youtube.com/watch?v=V3iEsLPAD68&list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK",
    tags: ["Third Semester", "Probability", "Hindi"],
  },

  {
    subject: "Engineering Mathematics",
    semester: "3",
    name: "Dream Maths",
    handle: "@DreamMaths",
    thumbnail: "https://i.ytimg.com/vi/arHKUMbsh9k/hq720.jpg",
    subscribers: "418K",
    videos: "",
    description: "Introduction to Hypothesis Testing | Statistics | B.Tech.",
    url: "https://www.youtube.com/watch?v=arHKUMbsh9k&list=PLEHGYFbPuuMEyKDmzvYvoMzSxUJnwx-JT",
    tags: ["Third Semester", "Statistics", "Hindi"],
  },

  {
    subject: "Engineering Mathematics",
    semester: "3",
    name: "Dr. Gajendra Purohit",
    handle: "@GajendraPurohit",
    thumbnail: "https://i.ytimg.com/vi/d9hpfrrZXac/mqdefault.jpg",
    subscribers: "1.82M",
    videos: "",
    description: "Queueing Theory | Overview and Introduction of Models.",
    url: "https://www.youtube.com/watch?v=d9hpfrrZXac&list=PLU6SqdYcYsfJxRfVS-vKgVa-Oz-THIJNk",
    tags: ["Third Semester", "Queuing Theory", "Hindi"],
  },

  {
    subject: "DSA in Java",
    semester: "3",
    name: "Kunal Kushwaha",
    handle: "@kunalkushwaha",
    thumbnail: "https://i.ytimg.com/vi/rZ41y93P2Qo/mqdefault.jpg",
    subscribers: "897K",
    videos: "",
    description: "Best Data Structures & Algorithms (DSA) Course.",
    url: "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
    tags: ["Third Semester", "DSA", "Java", "English"],
  },

  {
    subject: "DSA in Java",
    semester: "3",
    name: "Apna College",
    handle: "@ApnaCollegeOfficial",
    thumbnail: "https://i.ytimg.com/vi/yRpLlJmRo2w/mqdefault.jpg",
    subscribers: "7.68M",
    videos: "",
    description: "Introduction to Java Language | Complete Placement Course.",
    url: "https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
    tags: ["Third Semester", "DSA", "Java", "Hindi"],
  },

  {
    subject: "DSA in C",
    semester: "3",
    name: "Jenny's Lectures CS IT",
    handle: "@JennyslecturesCSIT",
    thumbnail: "https://i.ytimg.com/vi/AT14lCXuMKI/mqdefault.jpg",
    subscribers: "2.08M",
    videos: "",
    description:
      "Arrays in Data Structure | Declaration, Initialization, Memory representation.",
    url: "https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU",
    tags: ["Third Semester", "DSA", "C", "Hindi"],
  },

  {
    subject: "DSA in C++",
    semester: "3",
    name: "CodeHelp - by Babbar",
    handle: "@CodeHelp",
    thumbnail: "https://i.ytimg.com/vi/WQoB2z67hvY/mqdefault.jpg",
    subscribers: "849K",
    videos: "",
    description: "Lecture 1: Intro to Programming & Flowcharts.",
    url: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    tags: ["Third Semester", "DSA", "C++", "Hindi"],
  },

  {
    subject: "DSA in C++",
    semester: "3",
    name: "Apna College",
    handle: "@ApnaCollegeOfficial",
    thumbnail: "https://i.ytimg.com/vi/VTLCoHnyACE/hqdefault.jpg",
    subscribers: "7.68M",
    videos: "",
    description: "Flowchart & Pseudocode + Installation | DSA Series | C++.",
    url: "https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
    tags: ["Third Semester", "DSA", "C++", "Hindi"],
  },

  {
    subject: "Digital Electronics and Systems",
    semester: "3",
    name: "Engineering Funda",
    handle: "@EngineeringFunda",
    thumbnail: "https://i.ytimg.com/vi/1BkWqhkqUR4/hqdefault.jpg",
    subscribers: "641K",
    videos: "",
    description: "Digital Electronics by Engineering Funda.",
    url: "https://www.youtube.com/watch?v=1BkWqhkqUR4&list=PLgwJf8NK-2e7nYSG31YWEUfwgAp2uIOBY",
    tags: ["Third Semester", "Digital Electronics"],
  },

  {
    subject: "Digital Electronics and Systems",
    semester: "3",
    name: "Gate Smashers",
    handle: "@GateSmashers",
    thumbnail: "https://i.ytimg.com/vi/O0gtKDu_cJc/hqdefault.jpg",
    subscribers: "2.75M",
    videos: "",
    description:
      "Digital Logic syllabus and full playlist for college/university students.",
    url: "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
    tags: ["Third Semester", "Digital Electronics", "Hindi"],
  },

  {
    subject: "Digital Electronics and Systems",
    semester: "3",
    name: "Neso Academy",
    handle: "@nesoacademy",
    thumbnail: "https://i.ytimg.com/vi/M0mx8S05v60/hqdefault.jpg",
    subscribers: "3.2M",
    videos: "",
    description: "Digital Electronics and Signals.",
    url: "https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
    tags: ["Third Semester", "Digital Electronics", "English"],
  },

  {
    subject: "OOP in Java",
    semester: "3",
    name: "Kunal Kushwaha",
    handle: "@kunalkushwaha",
    thumbnail: "https://i.ytimg.com/vi/BSVKUk58K6U/hqdefault.jpg",
    subscribers: "897K",
    videos: "",
    description:
      "OOP Introduction & Concepts - Classes, Objects, Constructors, Keywords.",
    url: "https://www.youtube.com/watch?v=BSVKUk58K6U&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
    tags: ["Third Semester", "OOP", "Java", "English"],
  },

  {
    subject: "OOP in Java",
    semester: "3",
    name: "Apna College",
    handle: "@ApnaCollegeOfficial",
    thumbnail: "",
    subscribers: "7.68M",
    videos: "",
    description:
      "Java OOPs in One Shot | Object Oriented Programming | Java Language.",
    url: "https://www.youtube.com/watch?v=bSrm9RXwBaI",
    tags: ["Third Semester", "OOP", "Java", "Hindi"],
  },

  {
    subject: "DBMS",
    semester: "3",
    name: "Gate Smashers",
    handle: "@GateSmashers",
    thumbnail: "https://i.ytimg.com/vi/kBdlM6hNDAE/hqdefault.jpg",
    subscribers: "2.75M",
    videos: "",
    description: "DBMS for GATE, UGCNET and College/University Students.",
    url: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    tags: ["Third Semester", "DBMS", "Hindi"],
  },

  {
    subject: "DBMS",
    semester: "3",
    name: "Jenny's Lectures CS IT",
    handle: "@JennyslecturesCSIT",
    thumbnail: "https://i.ytimg.com/vi/T7AxM7Vqvaw/hqdefault.jpg",
    subscribers: "2.08M",
    videos: "",
    description: "Introduction to DBMS | Database Management System.",
    url: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
    tags: ["Third Semester", "DBMS", "Hindi"],
  },

  {
    subject: "DBMS",
    semester: "3",
    name: "Neso Academy",
    handle: "@nesoacademy",
    thumbnail: "https://i.ytimg.com/vi/OMwgGL3lHlI/hqdefault.jpg",
    subscribers: "3.2M",
    videos: "",
    description: "Introduction to Database Management Systems (DBMS).",
    url: "https://www.youtube.com/watch?v=OMwgGL3lHlI&list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX",
    tags: ["Third Semester", "DBMS", "English"],
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✔");

    // Clear existing channels
    await Channel.deleteMany({});

    // Insert complete channel data
    const inserted = await Channel.insertMany(data);

    console.log(`Seeded ${inserted.length} channels successfully!`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seedDB();
