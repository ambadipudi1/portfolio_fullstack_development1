import { Project, SkillCategory, Achievement, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ambadipudi Rupavani',
  headline: 'Full Stack Developer | AI & ML Enthusiast',
  supportingText:
    'Building practical full-stack applications with modern web technologies, databases, REST APIs, and AI-powered features.',
  bio1:
    'I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Malla Reddy College of Engineering and Technology. I enjoy building practical applications that combine frontend interfaces, backend APIs, databases, and AI capabilities.',
  bio2:
    'I am particularly interested in Full Stack Development, backend engineering, SQL and database systems, and AI-integrated applications.',
  email: 'rupaambadipudi@gmail.com',
  phone: '9701691282',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/ambadipudi1',
  linkedin: 'https://linkedin.com/in/ambadipudi-rupavani',
  graduationYear: '2027',
  degree: 'B.Tech – Computer Science and Engineering (AI & ML)',
  college: 'Malla Reddy College of Engineering and Technology (MRCET), Hyderabad',
  cgpa: '9.04/10',
  intermediateCollege: 'Sri Chaitanya Junior College',
  intermediateScore: '960/1000 (96%)',
};

export const PROJECTS: Project[] = [
  {
    id: 'rupas-query',
    title: "RUPA's Query",
    subtitle: 'Interactive SQL Learning & Mastery Platform',
    tagline: 'Interactive SQL learning platform with schema exploration, AI tutoring, and structured practice modules',
    description:
      "RUPA's Query is a full-stack SQL learning platform designed to provide interactive SQL practice, schema exploration, AI-assisted learning, and progress tracking.",
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'SQLite', 'Gemini API'],
    githubUrl: 'https://github.com/ambadipudi1/RupasQueryy',
    problem:
      'Students often practice SQL through disconnected tutorials and static question sets without an interactive environment for writing queries, understanding schemas, debugging mistakes, and tracking progress.',
    solution:
      'Build a unified SQL learning platform combining interactive SQL practice, schema exploration, progress tracking, gamification, and an AI Tutor.',
    engineering:
      'React frontend + Node/Express backend + SQLite persistence + Gemini API integration.',
    keyFeatures: [
      'Interactive SQL editor with syntax handling and execution preview',
      'Structured SQL practice modules from foundational queries to complex joins',
      'Live schema explorer with table relationship inspections',
      'Graded practice questions and timed SQL assessments',
      'AI Tutor powered by Gemini API with distinct interactive modes',
      'Explanation mode, Hint mode, Review mode, Debug mode, and Interview mode',
      'User authentication and personalized profile management',
      'Comprehensive progress tracking with XP system and milestones',
      'Daily streak tracking and skill mastery achievements',
    ],
    engineeringHighlights: [
      'Engineered an Express.js backend with SQLite for safe, isolated query evaluation and state persistence',
      'Structured prompt workflows with Gemini API to provide progressive hints without revealing answers directly',
      'Built a schema visualizer in React to help learners map entity relationships and foreign keys visually',
      'Implemented user session management, tracking XP points, streaks, and completed problem sets',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Select Problem & Explore Schema',
        description: 'Learner picks a SQL scenario and inspects table schemas, column types, and relational foreign keys.',
        tech: 'React UI + Schema Explorer',
      },
      {
        step: '02',
        title: 'Write & Test SQL Query',
        description: 'User enters SQL in the interactive editor and triggers real-time execution against sample SQLite tables.',
        tech: 'Node.js / Express + SQLite',
      },
      {
        step: '03',
        title: 'AI Tutoring & Debugging',
        description: 'If stuck or optimizing, the AI tutor provides tailored hints, error explanations, or interview questions.',
        tech: 'Gemini API (Multi-Mode)',
      },
      {
        step: '04',
        title: 'Track Mastery & Streaks',
        description: 'Execution results update XP score, continuous day streaks, and database mastery milestones.',
        tech: 'Persistent Profile Storage',
      },
    ],
  },
  {
    id: 'studentpath-ai',
    title: 'StudentPath AI',
    subtitle: 'Personalized Learning & Career Development Platform',
    tagline: 'Centralized milestone planner, skills organizer, and AI career advisor for computer science students',
    description:
      'StudentPath AI is a full-stack learning and career development platform that helps students organize learning goals, track progress, manage milestones, and receive AI-powered learning and career guidance.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'SQLite', 'Gemini API'],
    githubUrl: 'https://github.com/ambadipudi1/studentdevelopment-ai',
    problem:
      'Students often manage learning goals, progress, and career preparation across multiple disconnected tools.',
    solution:
      'Create a centralized platform for organizing learning objectives, development activities, progress, milestones, and AI-powered guidance.',
    engineering:
      'React frontend + Node/Express backend + SQLite database + Gemini API.',
    keyFeatures: [
      'Personalized learning goal creation and timeline scheduling',
      'Career development activities and technical milestone management',
      'Interactive visual dashboard for tracking course and skill progress',
      'User profiles with authenticated account data and saved roadmap states',
      'Periodic self-assessments to measure preparation readiness',
      'AI-powered career guidance and personalized study recommendations',
      'Persistent data storage with structured relational database tables',
      'Clean REST API architecture separating routing and business logic',
    ],
    engineeringHighlights: [
      'Designed RESTful API endpoints for milestones, profile updates, and goal completion states',
      'Configured SQLite database models for normalized storage of student activities and timeline entries',
      'Integrated Gemini API to generate contextual study suggestions tailored to student strengths and target roles',
      'Constructed modular React components with TypeScript type safety across state management',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Define Goals & Milestones',
        description: 'Student sets target engineering career paths, core course objectives, and completion dates.',
        tech: 'Interactive React Form',
      },
      {
        step: '02',
        title: 'Structured Tracking Dashboard',
        description: 'Daily progress, milestone checklists, and upcoming deadlines synchronize through REST APIs.',
        tech: 'Node/Express REST APIs',
      },
      {
        step: '03',
        title: 'AI Career Guidance',
        description: 'Gemini analyzes milestone velocity and suggests tailored practice resources and study plans.',
        tech: 'Gemini API Guidance Engine',
      },
      {
        step: '04',
        title: 'Review & Assessment',
        description: 'Regular self-assessments track readiness score and highlight areas requiring deeper practice.',
        tech: 'SQLite Relational Database',
      },
    ],
  },
  {
    id: 'iot-smart-waste-management',
    title: 'IoT-Based Smart Waste Management System',
    subtitle: 'Real-Time Sensor Monitoring & Waste Collection Platform',
    tagline: 'Sensor-driven monitoring dashboard for automated fill-level tracking and scheduled waste collection',
    description:
      'A smart waste management application designed to monitor waste-bin fill levels using IoT sensor data and support efficient waste collection.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'REST APIs', 'IoT Data Management'],
    githubUrl: 'https://github.com/ambadipudi1/iot-based-smart-waste-management-system',
    problem:
      'Waste collection can become inefficient when collection teams do not have timely information about bin fill levels.',
    solution:
      'Provide a monitoring dashboard that uses IoT sensor data and threshold-based alerts to identify bins that require attention.',
    engineering:
      'React frontend + Node.js backend + REST APIs + IoT data management.',
    keyFeatures: [
      'Real-time waste-bin fill-level visualization and status indicators',
      'Centralized monitoring dashboard for dispatchers and collection teams',
      'Configurable threshold-based alerts when bins exceed maximum capacity',
      'Collection dispatch management and route prioritization',
      'Role-based authentication and authorization for staff and administrators',
      'Structured IoT sensor telemetry processing and logging',
      'Cloud-storage support designed into project architecture for historical data',
      'Responsive interface optimized for desktop monitoring consoles and mobile field view',
    ],
    engineeringHighlights: [
      'Implemented RESTful endpoints in Node.js to receive and validate incoming simulated sensor telemetry',
      'Engineered threshold evaluation routines triggering alert states when fill level exceeds 80%',
      'Built a clear visual representation of bin capacities using dynamic status indicators and color hierarchies',
      'Created role-based auth middleware to safeguard dispatch controls and admin settings',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Sensor Telemetry Ingestion',
        description: 'IoT sensor modules measure bin depth and transmit fill-level percentages over HTTP REST APIs.',
        tech: 'IoT Data Management + REST APIs',
      },
      {
        step: '02',
        title: 'Threshold Evaluation',
        description: 'Backend checks incoming data against warning (75%) and critical (90%) fill thresholds.',
        tech: 'Node.js Backend Logic',
      },
      {
        step: '03',
        title: 'Dashboard Visualization',
        description: 'Field operators view bin status updates on an intuitive map/grid view with clear visual indicators.',
        tech: 'React Component Dashboard',
      },
      {
        step: '04',
        title: 'Collection Dispatch',
        description: 'Prioritized collection tasks are generated for high-fill bins, optimizing pickup frequency.',
        tech: 'Collection Management API',
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core languages used for algorithms, web development, and database queries.',
    skills: [
      { name: 'Python', category: 'Backend & AI' },
      { name: 'JavaScript', category: 'Web Development' },
      { name: 'TypeScript', category: 'Type-Safe Engineering' },
      { name: 'SQL', category: 'Database Queries' },
      { name: 'HTML', category: 'Semantic Markup' },
      { name: 'CSS', category: 'Styling & Layouts' },
    ],
  },
  {
    name: 'Frontend',
    description: 'Component architecture, single-page application routing, and modern styling.',
    skills: [
      { name: 'React.js', category: 'Component Architecture' },
      { name: 'Vite', category: 'Modern Build Tooling' },
      { name: 'Tailwind CSS', category: 'Utility-First Styling' },
      { name: 'React Router', category: 'Client-Side Routing' },
    ],
  },
  {
    name: 'Backend',
    description: 'Server architectures, RESTful API design, and backend business logic.',
    skills: [
      { name: 'Node.js', category: 'Runtime Environment' },
      { name: 'Express.js', category: 'REST API Framework' },
      { name: 'Django', category: 'Web Framework' },
      { name: 'Django REST Framework', category: 'API Serialization' },
      { name: 'REST APIs', category: 'Interface Architecture' },
    ],
  },
  {
    name: 'Databases',
    description: 'Data modeling, schema design, and persistent transactional storage.',
    skills: [
      { name: 'SQLite', category: 'Embedded Relational DB' },
      { name: 'MySQL', category: 'Relational Database Server' },
      { name: 'SQL', category: 'Complex Queries & Joins' },
      { name: 'Relational Database Concepts', category: 'Normalization & Schema Design' },
    ],
  },
  {
    name: 'AI / ML',
    description: 'Practical artificial intelligence integration and prompt engineering for software.',
    skills: [
      { name: 'Gemini API', category: 'Model Integration & Tooling' },
      { name: 'AI Application Development', category: 'Full-Stack AI Features' },
      { name: 'RAG Concepts', category: 'Retrieval Augmented Generation' },
      { name: 'Prompt Engineering', category: 'Structured Output Design' },
    ],
  },
  {
    name: 'Authentication & Security',
    description: 'Securing user sessions, protecting API routes, and password encryption.',
    skills: [
      { name: 'JWT', category: 'Token-Based Auth' },
      { name: 'bcrypt', category: 'Password Hashing' },
      { name: 'Authentication', category: 'Identity Verification' },
      { name: 'Authorization', category: 'Role-Based Access Control' },
    ],
  },
  {
    name: 'Tools & Platforms',
    description: 'Developer workflows, version control, API testing, and deployment platforms.',
    skills: [
      { name: 'Git', category: 'Version Control' },
      { name: 'GitHub', category: 'Collaboration & Repositories' },
      { name: 'VS Code', category: 'Primary IDE' },
      { name: 'Postman', category: 'API Testing & Inspection' },
      { name: 'Render', category: 'Cloud Deployment' },
      { name: 'Google Cloud Run', category: 'Containerized Deployment' },
    ],
  },
];

export const CAPABILITIES = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive React interfaces, reusable components, dashboards, routing, and interactive user experiences.',
    iconName: 'Layout',
    points: [
      'Component-driven architecture in React & TypeScript',
      'Clean state management and responsive viewport scaling',
      'Accessible forms, dashboards, and visual data displays',
    ],
  },
  {
    title: 'Backend Development',
    description:
      'Building REST APIs, authentication systems, authorization, server-side logic, and backend application architecture.',
    iconName: 'Server',
    points: [
      'RESTful API routing with Node.js, Express, and Django',
      'JWT token validation and password hashing with bcrypt',
      'Input validation, middleware design, and error boundaries',
    ],
  },
  {
    title: 'Database Development',
    description:
      'Working with SQL, relational database concepts, SQLite, MySQL, persistent storage, and structured application data.',
    iconName: 'Database',
    points: [
      'Relational schema design and foreign key integrity',
      'SQL querying including joins, aggregations, and subqueries',
      'Persistent storage integration for real-time application states',
    ],
  },
  {
    title: 'AI Integration',
    description:
      'Integrating Gemini API into applications where AI provides useful functionality such as tutoring, debugging, personalization, and guidance.',
    iconName: 'Cpu',
    points: [
      'Structured prompt engineering for deterministic application responses',
      'Context-aware assistance (explanation, hint, review, and debug modes)',
      'Purposeful integration that enhances user workflows without generic hype',
    ],
  },
];

export const DEVELOPMENT_APPROACH = [
  {
    step: '01',
    title: 'Identify the Problem',
    description: 'Understand the actual user need and existing workflow.',
  },
  {
    step: '02',
    title: 'Design the Solution',
    description: 'Break the problem into frontend, backend, database, API, and user experience components.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop the application using appropriate technologies.',
  },
  {
    step: '04',
    title: 'Integrate AI Where Useful',
    description: 'Use AI only when it provides meaningful functionality.',
  },
  {
    step: '05',
    title: 'Test & Improve',
    description: 'Debug, validate, and improve the application based on actual behavior.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Google / Kaggle AI Agents & Vibe Coding',
    organizer: 'Google & Kaggle',
    focus: 'AI Agents, Modern Prototyping & AI Application Engineering',
    description:
      'Active participant exploring autonomous agent workflows, modern AI tooling, and integrating large language models into practical developer applications.',
  },
  {
    title: 'Infosys Pragati Path',
    organizer: 'Infosys',
    focus: 'Technical Upskilling, Software Foundations & Professional Growth',
    description:
      'Selected student participant engaged in industry-relevant programming skills, software engineering methodologies, and technical problem-solving tracks.',
  },
  {
    title: 'Smart India Hackathon / Hackathon Participation',
    organizer: 'SIH / Technical Competitions',
    focus: 'Collaborative Problem Solving & Rapid Full-Stack Prototyping',
    description:
      'Participated in collaborative team hackathons focused on engineering practical software solutions for real-world civic and institutional challenges.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Malla Reddy College of Engineering and Technology (MRCET)',
    degree: 'B.Tech – Computer Science and Engineering (AI & ML)',
    timeline: 'Expected Graduation: 2027',
    score: 'CGPA: 9.04 / 10',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Strong academic standing with consistent 9.04/10 CGPA',
      'Core coursework: Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, Full Stack Web Engineering, AI & ML Principles',
    ],
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (12th Grade)',
    timeline: 'Completed',
    score: 'Score: 960 / 1000 (96%)',
    location: 'Telangana, India',
    highlights: [
      'Outstanding academic performance securing 96% aggregate',
      'Strong mathematical and analytical foundation for computational problem solving',
    ],
  },
];
