export interface PersonalInfo {
  fullName: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  major: string;
  degree: string;
  gpa: string;
  graduation: string;
  highlights: string[];
}

export interface Achievement {
  value: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  fullName: "Anastasia Liem",
  role: "Talent Acquisition & Human Resources Professional",
  location: "Tangerang, Banten",
  phone: "+62xxxxxxxxxx",
  email: "anastasia.liem11@gmail.com",
  linkedIn: "linkedin.com/in/anastasialiem",
};

export const professionalSummary =
  "Anastasia Liem is a Human Resources professional with a Psychology background and hands-on experience in Talent Acquisition and HR Operations. She specializes in candidate sourcing, screening, recruitment coordination, psychological assessment, and HR administration. Known for strong communication, empathy, attention to detail, and a people-oriented mindset, Anastasia is passionate about building a career in strategic recruitment, talent development, and people management.";

export const experiences: Experience[] = [
  {
    company: "PT Intrias Mandiri Sejati",
    role: "Human Resource Representative",
    period: "Dec 2025 - Present",
    responsibilities: [
      "Employee administration",
      "Contract renewal monitoring",
      "HR documentation",
      "Leave monitoring",
      "Payroll Coordination",
      "Monthly reporting",
      "Onboarding support",
    ],
  },
  {
    company: "PT Mitra Bali Sukses",
    role: "Talent Acquisition Operations",
    period: "Feb 2025 - Dec 2025",
    responsibilities: [
      "Candidate sourcing",
      "Screening",
      "Interview scheduling",
      "Candidate interview",
      "Psychotest scoring",
      "Job offering",
      "Recruitment administration",
    ],
  },
];

export const education: Education = {
  institution: "Universitas Bunda Mulia",
  major: "Psychology",
  degree: "Bachelor of Psychology",
  gpa: "3.45 / 4.00",
  graduation: "2025",
  highlights: [
    "Quantitative research on self-efficacy",
    "Qualitative research on inferiority in elderly with disabilities",
    "Burnout measurement tool development",
  ],
};

export const achievements: Achievement[] = [
  {
    value: "100+",
    label: "Candidates Invited in One Day",
  },
  {
    value: "50–70",
    label: "Psychotests Assessed Daily",
  },
  {
    value: "< 3 Weeks",
    label: "Average Recruitment SLA",
  },
];

export const hardSkills: SkillCategory[] = [
  {
    category: "Recruitment",
    items: [
      "Candidate Sourcing",
      "Screening",
      "Interviewing",
      "Hiring Coordination",
    ],
  },
  {
    category: "Assessment Tools",
    items: [
      "C-FIT",
      "Holland",
      "DISC",
      "IST",
      "EPPS",
      "16PF",
      "PAPIKOSTIK",
      "Pauli",
      "Kraepelin",
      "Wartegg",
    ],
  },
  {
    category: "Technical",
    items: [
      "Microsoft Office",
      "Excel",
      "PowerPoint",
      "Canva",
      "SPSS",
    ],
  },
  {
    category: "HR Operations",
    items: [
      "Contract Administration",
      "Employee Documentation",
      "Leave Management",
      "Payroll Coordination",
    ],
  },
];

export const softSkills: string[] = [
  "Communication",
  "Active Listening",
  "Critical Thinking",
  "Empathy",
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
