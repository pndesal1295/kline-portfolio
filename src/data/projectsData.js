export const projects = [
  {
    name: "DepEd Performance Management System",
    year: "2026",
    type: "Capstone project — repo manager & developer",
    description:
      "A full-stack performance evaluation platform for DepEd, built with a team to replace a manual spreadsheet-based process with digitized IPCRF/OPCRF workflows. I led the offline-first architecture — IndexedDB-backed drafts and sync queues, background sync on reconnect, and an auth-staleness system to keep evaluations valid when a device has been offline for extended periods. I also took over the repo mid-project and drove it through to completion. The system enforces KRA assignments from the evaluation compendium to prevent cherry-picking and automates rating calculations for Ratees, Raters, and Admins.",
    shortDescription:
      "A full-stack performance evaluation system for DepEd that digitizes IPCRF/OPCRF workflows. I led its offline-first architecture, including local drafts, sync queues, reconnect syncing, and offline authentication handling.",
    stack: ["React", "Tailwind CSS", "ASP.NET Core", "MongoDB"],
    private: true,
    featured: true,
    images: [
      "/assets/projects/deped-pms1.png",
      "/assets/projects/deped-pms2.png",
      "/assets/projects/deped-pms3.png",
      "/assets/projects/deped-pms4.png",
    ],
  },
  {
    name: "Trastok Bot",
    year: "2026",
    type: "AI web application",
    description:
      "A Filipino-language AI chatbot that generates playful 'roasts' from user input, built on a Node/Express backend with LLM integration via the Groq API. Includes rate limiting to prevent abuse, an explicit consent flow before generating content, and safety filtering to keep output within bounds.",
    shortDescription:
      "A Filipino-language AI chatbot that generates playful roasts using the Groq API, with rate limiting, user consent, and safety filtering built in.",
    stack: ["Node.js", "Express", "JavaScript", "Groq API"],
    github: "https://github.com/pndesal1295/trashtalk-bot",
    live: "https://trastok-bot.onrender.com",
    images: ["/assets/projects/trastok-bot1.png", "/assets/projects/trastok-bot2.png"],
  },
  {
    name: "RAW WEATHER",
    year: "2026",
    type: "Web application",
    description:
      "A weather monitoring app with city search, browser geolocation, and current conditions. Pulls live data from WeatherAPI and surfaces active weather alerts for the user's location, with a responsive layout built for both desktop and mobile use.",
    shortDescription:
      "A responsive weather app with city search, geolocation, live current conditions, and active weather alerts powered by WeatherAPI.",
    stack: ["React", "Vite", "Tailwind", "WeatherAPI"],
    github: "https://github.com/pndesal1295/weather-alerts",
    live: "https://raw-weather.onrender.com",
    images: ["/assets/projects/raw-weather1.png", "/assets/projects/raw-weather2.png"],
  },
];
