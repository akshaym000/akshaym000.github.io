/*
 * Portfolio content. Edit the text and links here; leave script.js alone unless
 * you want to change how the page renders. Use an empty string for unknown URLs.
 */
window.PORTFOLIO = {
  name: "Akshay M",
  location: "Mysore, Karnataka, India",
  photo: "", // Example: "images/akshay.jpg"
  focusAreas: ["Computer Science", "Python", "Mathematics", "Statistics", "SQL", "Power BI"],
  about: [
    "I’ve always enjoyed figuring out how things work — especially when there’s a problem that doesn’t have an obvious answer.",
    "That curiosity led me to data and business analytics. What I enjoy most isn’t just working with numbers or building dashboards; it’s taking a messy problem, breaking it down, finding the patterns hidden in the data, and turning them into insights that can support better decisions.",
    "As a B.E. Information Science student, I’ve built hands-on experience with Python, SQL, Excel, Power BI, and data visualization. Through projects and case studies, I’ve worked with real-world datasets, explored and cleaned data, developed analytical solutions, and translated findings into practical recommendations.",
    "Alongside analytics, I have a strong interest in mathematics, probability, statistics, and quantitative problem-solving. I enjoy understanding the logic behind a problem and working through it systematically, rather than simply relying on a tool or a predefined approach.",
    "My interests lie at the intersection of Data Analytics, Business Analytics, Business Intelligence, Mathematics, and quantitative problem-solving.",
    "I’m continuously learning, experimenting, and taking on projects that push me to become a better analyst — not just by learning another tool, but by getting better at asking the right questions, understanding the underlying problem, and finding meaningful solutions."
  ],
  email: "akshaym.work000@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/akshaym000" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/akshay-m-963573292/" }
  ],
  projects: [
    {
      name: "Project Cortex",
      category: "PERSONAL PROJECT · 2026",
      year: "INDEPENDENT BUILD",
      description: "A personal project exploring a knowledge-graph concept for EPC data-centre delivery, where project information can be scattered across vendors and stages. I developed a pipeline to structure it, using AI for extraction while keeping critical calculations deterministic and checking outputs against source data.",
      tags: ["Knowledge graphs", "Data pipelines", "AI validation"],
      url: "https://drive.google.com/drive/folders/1W-f-hfillLSCn7JxsgFYxXwpgld0xl8b?usp=sharing", demo: "", visual: "cortex", caption: "MAKING FRAGMENTED DATA TRACEABLE"
    },
    {
      name: "Quantitative Research -Short-Term Equity Momentum",
      category: "INDEPENDENT RESEARCH · 2026",
      year: "RESEARCH NOTE",
      description: "Tested whether past five-day returns predicted the next five days across S&P 500 stocks. The process included out-of-sample checks, controls, and multiple-testing corrections; survivorship bias remains a stated limitation, not a clean investable result.",
      tags: ["Python", "Hypothesis testing", "Validation"],
      url: "https://github.com/akshaym000/quant-equity-momentum-research", demo: "", visual: "momentum", caption: "TEST THE IDEA, THEN TEST IT AGAIN"
    },
    {
      name: "Sales, products & customers",
      category: "SQL DATA PROJECT · 2025",
      year: "DATA WAREHOUSE",
      description: "Designed a star-schema warehouse for sales, customer, and product data. SQL reporting views use customer-value and product-performance segments to explore revenue drivers, repeat purchases, and patterns over time.",
      tags: ["SQL", "Star schema", "Window functions"],
      url: "https://github.com/akshaym000/SQL-Data-Analytics-Project", demo: "", visual: "sql", caption: "FROM RAW TRANSACTIONS TO USEFUL SIGNAL"
    },
    {
      name: "Cyclistic bike-share analysis",
      category: "GOOGLE DATA ANALYTICS CAPSTONE · 2025",
      year: "CASE STUDY",
      description: "Explored a year of ride data to understand how annual members and casual riders use the service differently. Cleaned and analyzed the data, checked patterns across time and ride type, and shaped the findings into a recommendation.",
      tags: ["R", "SQL", "Power BI", "Storytelling"],
      url: "", demo: "", visual: "cycling", caption: "TURNING BEHAVIORAL PATTERNS INTO A STORY"
    },
    {
      name: "MindDrive",
      category: "PERSONAL PROJECT",
      year: "ONGOING · IN DEVELOPMENT",
      description: "An ongoing personal project. I’m still working on it and will share more about the idea and progress as it develops.",
      tags: ["Personal project", "In progress"],
      url: "", demo: "", visual: "minddrive", caption: "AN IDEA TAKING SHAPE"
    }
  ],
  caseStudies: [
    {
      title: "India’s insurance sector & 100% FDI",
      category: "PERSONAL CASE STUDY · 2026",
      description: "An independent analysis of how full foreign direct investment in India’s insurance sector could affect capital, competition, distribution, and policyholder protection. I structured the question into an issue tree and examined regulatory and market evidence to understand the possible implications.",
      tags: ["Policy", "Insurance", "Market analysis"],
      url: "https://docs.google.com/presentation/d/1yMBtZ_Xa6Ek_AHlzlu78z8jVnKm9_dD7/edit?usp=sharing&ouid=103426562933755095375&rtpof=true&sd=true"
    }
  ],
  publications: [
    {
      title: "Concentration Without Distribution: Urban Primacy, Structural Costs & the Scale-Mismatch Problem in Indian State Urban Systems",
      category: "INDEPENDENT POLICY RESEARCH · 2026",
      detail: "~5,000 words · Karnataka and Bengaluru case study",
      description: "Examines urban concentration and investment in Indian state urban systems. Develops a Metropolitan Dependence Ratio and a six-stage State Urban Investment Methodology to make the questions more measurable.",
      url: "https://drive.google.com/file/d/1wJwCrn1dOhYghvTR550MSIYjjSV0OcW5/view?usp=sharing"
    }
  ],
  education: [
    { date: "2023–2027", title: "B.E. in Information Science Engineering", place: "Vidyavardhaka College of Engineering · Mysore", detail: "Expected 2027 · CGPA 8.38/10 through semester six · Coursework includes databases, big data analytics, machine learning, and algorithms." },
    { date: "2021–2023", title: "2nd PUC · Science", place: "Pramathi P.U. College · Mysore", detail: "84.5% · Science, mathematics, and computer science." },
    { date: "2021", title: "SSLC · Class X", place: "St Joseph’s High School · Krishnarajanagara", detail: "98.08%." }
  ],
  interests: ["Books & comics", "Chess", "Video games", "Writing · Fluxology on Substack"],
  languages: ["Kannada · Native", "English · Proficient", "Hindi · Proficient", "German · Beginner"],
  now: {
    updated: "September 2026",
    learning: "Mathematics, calculus, probability, statistics, and quantitative methods.",
    building: "Personal AI, data, and software projects.",
    writing: "Research, long-form writing, and Fluxology.",
    exploring: "Finance, economics, technology, and related areas."
  },
  certificates: [
    { title: "Google Data Analytics Professional Certificate", issuer: "Google / Coursera · Jul 2025", url: "https://coursera.org/share/9e6177b36aebeeaa3a944ffc46b53660" },
    { title: "McKinsey Forward Program", issuer: "McKinsey & Company · Jun 2026", url: "https://www.credly.com/badges/ec825ebb-f356-4fc0-800d-77bfce6b4d46/public_url" },
    { title: "Business Intelligence and Data Analytics", issuer: "Arizona State University · edX · Aug 2024", detail: "CCANSR101 · Microsoft Excel and Data Analytics", url: "https://courses.edx.org/certificates/5dc920a33cea4ce7a3761458211cce8b" },
    { title: "Career Essentials in Business Analysis", issuer: "Microsoft & LinkedIn · Aug 2024", url: "https://www.linkedin.com/learning/certificates/70c256a7df2018c92bf95c4f0b97008c274ac8d4a72b25d7914638eb2144f3e1" }
  ],
  writing: [
    { title: "Fluxology on Substack", url: "" }
  ]
};
