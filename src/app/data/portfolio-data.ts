export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps/Tools' | 'Skills';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  company?: string;
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  detailedBio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  interests: Interest[];
  education: Education[];
}

export const PORTFOLIO_DATA: Profile = {
  name: 'Edward Prins',
  title: 'Senior Full Stack Engineer',
  tagline: 'Crafting high-performance web applications and exceptional user interfaces.',
  bio: 'Software Developer with 6+ years of experience leading incident response, modernizing legacy systems, and architecting cloud-native systems. I enjoy turning complex operational problems into reliable, well-tested software.',
  detailedBio: `I've spent the last six years building scalable, production-grade applications, drawing on a background in computer and mathematical sciences. For 3+ years, I've owned a mission-critical, real-time logistics dispatch platform end-to-end — used by ~220 dispatchers daily — transforming it from an untested, manually-deployed legacy stack into a fully automated, cloud-native system that ships changes safely and reliably from development through production.

  I lead the team's KTLO (Keep the Lights On) efforts, acting as first responder to production incidents and diagnosing issues across distributed, containerized systems. I also mentor incoming developers through a structured ramp-up, helping them build the skills and confidence to transition into specialized roles on the team.

  My design philosophy centers on writing clean, testable, and maintainable code, optimizing performance and observability, and continuously learning as a mentor who thrives in collaborative, forward-thinking teams.`,
  email: 'egprinsiii@gmail.com',
  github: 'https://github.com/eprins',
  linkedin: 'https://linkedin.com/in/edwardprins',
  skills: [
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },

    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'Redis', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Kafka', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'C', category: 'Backend' },

    { name: 'Kubernetes', category: 'DevOps/Tools' },
    { name: 'Linux', category: 'DevOps/Tools' },
    { name: 'Playwright', category: 'DevOps/Tools' },
    { name: 'Datadog', category: 'DevOps/Tools' },
    { name: 'Git', category: 'DevOps/Tools' },

    { name: 'System Design', category: 'Skills' },
    { name: 'Incident Response', category: 'Skills' },
    { name: 'Mentorship', category: 'Skills' },
    { name: 'Legacy Modernization', category: 'Skills' },
    { name: 'Microservices', category: 'Skills' },
    { name: 'Data Visualization', category: 'Skills' },
  ],
  experience: [
    {
      role: 'Senior Software Developer',
      company: 'IMC Logistics',
      duration: 'Apr. 2022 - Present',
      location: 'Memphis, TN',
      description: [
        'Led the KTLO (Keep the Lights On) team, acting as first responder to production incidents and mentoring incoming developers through a structured ramp-up before transitioning them to specialized teams.',
        'Owned full-stack development of a mission-critical, real-time logistics dispatch platform (Postgres triggers, in-memory cache service, REST API, Angular UI) used by ~220 dispatchers daily, modernizing all four tiers over 3+ years from an untested, manually-deployed legacy stack into a fully CI/CD-automated, Kubernetes/GitOps-deployed system with gated dev/test/prod promotion.',
        'Architected a configurable notifications system allowing users to subscribe to location- and event-based alerts across 16 trigger types, including arrivals, dispatches, deliveries, document milestones, and geofencing events.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'IMC Logistics',
      duration: 'Jul. 2021 - Apr. 2022',
      location: 'Memphis, TN',
      description: [
        'Acted as an early adopter and beta tester for GitLab CI/CD, Datadog APM/RUM, and Power BI reporting tools rolled out by other IT teams, while regularly collaborating with the Driver-facing IT team on shared initiatives.',
        'Built automation services eliminating manual workflows - including automated appointment scheduling, a document generation service removing the need for drivers to manually upload paperwork to get paid, and an EIR parsing service that auto-populated order data.'
      ]
    },
    {
      role: 'Contractor',
      company: 'IMC Logistics',
      duration: 'Jul. 2019 - Jul. 2021',
      location: 'Memphis, TN',
      description: [
        'Redesigned a legacy single-purpose feed parser into a generalized, config-driven equipment-pool ingestion platform, modernizing the codebase, adding multi-format support (delimited, XLSX, EDI) with ISO 6346 validation, and designing a diff-based sync engine - expanding partner coverage from 5 to 15 while improving data integrity and security posture.'
      ]
    },
    {
      role: 'Contractor',
      company: 'FedEx',
      duration: 'Jul. 2018 - Jun. 2019',
      location: 'Memphis, TN',
      description: [
        "Contributed to migrating Air Operations' vacation bidding application from Java Swing to Angular for mechanics across the FedEx Memphis airport hub - building reusable components, writing unit tests, and resolving bugs to ensure a smooth transition from the legacy desktop tool."
      ]
    },
    {
      role: 'Software Developer',
      company: 'Optimal Learning Lab',
      duration: 'Jan. 2016 - Apr. 2016',
      location: 'Memphis, TN',
      description: [
        'Developed a Chart.js-based reporting module within a Meteor.js stack (MongoDB, jQuery, Underscore.js, Require.js), enabling instructors to visualize overall class and individual student performance over time, built and tested in a Vagrant-managed virtual environment emulating production conditions.'
      ]
    }
  ],
  education: [
    {
      degree: 'B.S., Computer and Mathematical Sciences',
      school: 'The University of Memphis',
      duration: 'May 2017',
      location: 'Memphis, TN'
    }
  ],
  projects: [
    {
      title: 'Real-Time Dispatch Platform',
      description: 'Owned a mission-critical, real-time logistics dispatch platform end-to-end for 3+ years — used by ~220 dispatchers daily — modernizing all four tiers (Postgres triggers, in-memory cache, REST API, Angular UI) from an untested, manually-deployed legacy stack into a fully automated, cloud-native system.',
      technologies: ['Angular', 'Spring Boot', 'Kafka', 'Kubernetes', 'Server-Sent Events', 'Microservices', 'Playwright', 'Legacy Modernization'],
      company: 'IMC Logistics',
      icon: 'sync_alt'
    },
    {
      title: 'Notifications System',
      description: 'Architected a configurable notifications system allowing users to subscribe to location- and event-based alerts across 16 trigger types, including arrivals, dispatches, deliveries, document milestones, and geofencing events.',
      technologies: ['Angular', 'Spring Boot', 'Kafka', 'Kubernetes', 'System Design'],
      company: 'IMC Logistics',
      icon: 'notifications_active'
    },
    {
      title: 'Carrier & Terminal Automation Services',
      description: 'Built automation services eliminating manual dispatch workflows — including automated appointment scheduling, a document generation service removing the need for drivers to manually upload paperwork to get paid, and an EIR parsing service that auto-populated order data.',
      technologies: ['Spring Boot', 'Node.js', 'Kafka', 'Microservices', 'Kubernetes', 'System Design'],
      company: 'IMC Logistics',
      icon: 'local_shipping'
    },
    {
      title: 'Equipment-Pool Ingestion Platform',
      description: 'Redesigned a legacy single-purpose feed parser into a generalized, config-driven equipment-pool ingestion platform with multi-format support (delimited, XLSX, EDI), ISO 6346 validation, and a diff-based sync engine — expanding partner coverage from 5 to 15.',
      technologies: ['Node.js', 'Linux', 'Legacy Modernization'],
      company: 'IMC Logistics',
      icon: 'inventory_2'
    },
    {
      title: 'Air Operations Vacation Bidding Migration',
      description: "Contributed to migrating Air Operations' vacation bidding application from Java Swing to Angular for mechanics across the FedEx Memphis airport hub, building reusable components and unit tests.",
      technologies: ['Angular', 'Java', 'Legacy Modernization'],
      company: 'FedEx',
      icon: 'flight_takeoff'
    },
    {
      title: 'MoFaCTS Learning Analytics Reporting',
      description: 'Developed a Chart.js-based reporting module for MoFaCTS, a research platform studying optimized learning practice schedules, enabling instructors to visualize overall class and individual student performance over time.',
      technologies: ['Chart.js', 'Meteor.js', 'MongoDB', 'Node.js', 'Data Visualization', 'System Design'],
      company: 'Optimal Learning Lab',
      icon: 'insights'
    }
  ],
  interests: [
    {
      title: 'Researching',
      description: 'I love diving deep into both technical and non-technical topics — whether it\'s exploring a new framework, dissecting a system design problem, or just chasing curiosity down a rabbit hole.',
      icon: 'search'
    },
    {
      title: 'Sports',
      description: 'A dedicated fan of the Memphis Grizzlies, University of Memphis Tigers, Nashville Predators, and Seattle Seahawks — I love following the game and the community that comes with it.',
      icon: 'sports_basketball'
    },
    {
      title: 'Cooking',
      description: 'I enjoy experimenting in the kitchen, trying new recipes and techniques — it\'s a hands-on way to unwind and create something tangible outside of code.',
      icon: 'restaurant'
    },
    {
      title: 'Swimming',
      description: 'I swim regularly to stay active and clear my head — it\'s one of the few times I can fully disconnect and think through problems without distraction.',
      icon: 'pool'
    }
  ]
};
