import dotenv from "dotenv";
import mongoose from "mongoose";
import Channel from "./models/Channel.js";

dotenv.config();

const data = [
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
    subject: "Programming for Problem Solving",
    semester: "1",
    name: "Jenny's Lectures CS IT",
    handle: "@JennyslecturesCSIT",
    thumbnail: "https://i.ytimg.com/vi/EjavYOFoJJ0/mqdefault.jpg",
    subscribers: "2.08M",
    videos: "",
    description:
      "C_01 Introduction to C Language | Complete C Programming tutorials for first year engineering students.",
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
      "Electronic Materials (Atom and its Structure) | Physics for BE/BTech 1st year engineering, all universities.",
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
      "Cell as Basic Unit of Life | Cell Theory, Cell Shapes, Cell Structure, Cell Cycle - Unit 1 Basic Biology.",
    url: "https://www.youtube.com/playlist?list=PLmcndht8X48xxRzmEr330TBmQRWCk-57I",
    tags: ["First Year", "Biology"],
  },

  // ===== 2nd Semester =====

  {
    subject: "Engineering Maths",
    semester: "2",
    name: "Bhagwan Singh Vishwakarma",
    handle: "@BhagwanSinghVishwakarma",
    thumbnail: "https://i.ytimg.com/vi/eJaoJ4pA8RE/mqdefault.jpg",
    subscribers: "995K",
    videos: "",
    description:
      "What is Differential Equation? Why we study Differential Equation in BTech & BSc? (Lecture-1)",
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
      "Differential Equation of First Order and First Degree | Lecture 1 | Mathematics | Engineering.",
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
      "Introduction to Differential Equations | Order and Degree | BBA, BCA, B.COM, B.TECH.",
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
      "Partial Differential Equation 2.0 - Concept, order, degree of PDE & why we study it.",
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
    description:
      "Probability - Random Experiment & Sample Space in Hindi (Lecture-1).",
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
      "PROBABILITY | Law of Probability and Conditional Probability | Lecture 01 | All University.",
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
    description:
      "Forward Bias (P N Junction Diode) Diode theory & applications (Basic Electronics).",
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
      "Orthographic Projection - An Introduction | Engineering Drawing | Engineering Graphics.",
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
      "System of Forces | Resolution of Forces | Lecture 01 | Engineering Mechanics.",
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
      "Complete Study of Free Body Diagram in Engineering Mechanics and Applied Mechanics.",
    url: "https://www.youtube.com/watch?v=Vb1aMHC1_BM&list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI",
    tags: ["Second Semester", "Engineering Mechanics", "Hindi"],
  },

  // ===== 3rd Semester =====

  {
    subject: "Engineering Mathematics",
    semester: "3",
    name: "Dr. Gajendra Purohit",
    handle: "@GajendraPurohit",
    thumbnail: "https://i.ytimg.com/vi/V3iEsLPAD68/mqdefault.jpg",
    subscribers: "1.82M",
    videos: "",
    description:
      "Statistics and Probability | Overview of Random Variable & Probability Distribution.",
    url: "https://www.youtube.com/watch?v=V3iEsLPAD68&list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK",
    tags: ["Third Semester", "Probability", "Hindi"],
  },

  {
    subject: "Engineering Mathematics",
    semester: "3",
    name: "Dream Maths",
    handle: "@DreamMaths",
    thumbnail:
      "https://i.ytimg.com/vi/arHKUMbsh9k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAYKNTAAW0lXVbHFKkxiNi4fwZM5w",
    subscribers: "418K",
    videos: "",
    description:
      "Introduction to Hypothesis Testing | Statistics | BBA, BCA, B.Com, B.Tech.",
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
    description:
      "Queueing Theory | Overview and Introduction of Models in Queueing Theory by GP Sir.",
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
    description:
      "Best Data Structures & Algorithms (DSA) Course - Clear Any FAANG Interview!",
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
    description:
      "Introduction to Java Language | Lecture 1 | Complete Placement Course.",
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
      "1.1 Arrays in Data Structure | Declaration, Initialization, Memory representation.",
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
    thumbnail:
      "https://i.ytimg.com/vi/VTLCoHnyACE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLANRgL8BByNSNvuNhHjMmJmfD3GBQ",
    subscribers: "7.68M",
    videos: "",
    description:
      "Lecture 1: Flowchart & Pseudocode + Installation | DSA Series by Shradha Khapra Ma'am | C++.",
    url: "https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
    tags: ["Third Semester", "DSA", "C++", "Hindi"],
  },

  {
    subject: "Digital Electronics and Systems",
    semester: "3",
    name: "Engineering Funda",
    handle: "@EngineeringFunda",
    thumbnail:
      "https://i.ytimg.com/vi/1BkWqhkqUR4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAs0QFGiPvtRvAzM7ND_XLA2jIvug",
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
    thumbnail:
      "https://i.ytimg.com/vi/O0gtKDu_cJc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAY35PW-wK3w21CLSPgdN9RAKPpSQ",
    subscribers: "2.75M",
    videos: "",
    description:
      "Lec-1: Digital Logic Syllabus for GATE, UGCNET etc. | Full Playlist for College/University Students.",
    url: "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
    tags: ["Third Semester", "Digital Electronics", "Hindi"],
  },

  {
    subject: "Digital Electronics and Systems",
    semester: "3",
    name: "Neso Academy",
    handle: "@nesoacademy",
    thumbnail:
      "https://i.ytimg.com/vi/M0mx8S05v60/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAoWgATsGhxxcg72kJ65e70J7RFRg",
    subscribers: "3.2M",
    videos: "",
    description: "What is Signal?",
    url: "https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
    tags: ["Third Semester", "Digital Electronics", "English"],
  },

  {
    subject: "OOP in Java",
    semester: "3",
    name: "Kunal Kushwaha",
    handle: "@kunalkushwaha",
    thumbnail:
      "https://i.ytimg.com/vi/BSVKUk58K6U/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAtgfJEGoViXhZHDBYYUGrD1vuSjQ",
    subscribers: "897K",
    videos: "",
    description:
      "OOP 1 | Introduction & Concepts - Classes, Objects, Constructors, Keywords.",
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
      "Java OOPs in One Shot | Object Oriented Programming | Java Language | Placement Course.",
    url: "https://www.youtube.com/watch?v=bSrm9RXwBaI",
    tags: ["Third Semester", "OOP", "Java", "Hindi"],
  },

  {
    subject: "DBMS",
    semester: "3",
    name: "Gate Smashers",
    handle: "@GateSmashers",
    thumbnail:
      "https://i.ytimg.com/vi/kBdlM6hNDAE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDsIVMTcTTJfJmnAvUCFlyjT75F_Q",
    subscribers: "2.75M",
    videos: "",
    description:
      "Lec-1: DBMS Syllabus for GATE, UGCNET, NIELIT, DSSSB etc. | Full DBMS for College/University Students.",
    url: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    tags: ["Third Semester", "DBMS", "Hindi"],
  },

  {
    subject: "DBMS",
    semester: "3",
    name: "Jenny's Lectures CS IT",
    handle: "@JennyslecturesCSIT",
    thumbnail:
      "https://i.ytimg.com/vi/T7AxM7Vqvaw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA6hh3TSB8zVy68jT3ntuFlIswdgw",
    subscribers: "2.08M",
    videos: "",
    description: "Lec 1: Introduction to DBMS | Database Management System.",
    url: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
    tags: ["Third Semester", "DBMS", "Hindi"],
  },

  {
    subject: "DBMS",
    semester: "3",
    name: "Neso Academy",
    handle: "@nesoacademy",
    thumbnail:
      "https://i.ytimg.com/vi/OMwgGL3lHlI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLD4-zzw-0UM5mmd6jEbzki65aw_0w",
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

    // NOTE: This clears ALL existing channels before inserting.
    // Comment out the next line if you want to keep old data and only add new entries.
    await Channel.deleteMany();

    const inserted = await Channel.insertMany(data);
    console.log(`Seeded ${inserted.length} channel(s) successfully!`);

    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
}

seedDB();
