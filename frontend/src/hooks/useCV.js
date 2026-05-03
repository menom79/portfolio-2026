import { useState, useEffect } from 'react'

const CV_DATA = {
  name: "Menom Haque",
  title: "Backend & Full Stack Developer",
  status: "Open to work · Finland & Remote",
  summary: "Backend and full stack developer with a BEng in ICT (JAMK, 2025) and hands-on experience building RESTful APIs on AWS, test automation with Robot Framework/Selenium, and front-end development with Angular. Proven track record of delivering API infrastructure, improving software quality, and working in agile, English-speaking teams. Open to backend, full stack, QA/automation, or cloud roles — in Finland or remotely.",
  contact: {
    email: "mhmenom@gmail.com",
    phone: "+358 465 218 175",
    location: "Jyväskylä, Finland",
    linkedin: "linkedin.com/in/menom",
    github: "github.com/menom79",
  },
  experience: [
    {
      id: 1,
      title: "Back End Developer",
      company: "MyHomesID Oy",
      location: "Jyväskylä, Finland",
      period: "Dec 2024 – Jun 2025",
      bullets: [
        "Designed and built the company's entire API infrastructure from scratch on AWS, including RESTful API design, implementation, documentation, and deployment via API Gateway.",
        "Established AWS API Gateway for secure internal and external API consumption — the first such infrastructure at the company.",
        "Onboarded and trained internal staff on the API project, tooling, and best practices.",
        "Collaborated with cross-functional teams in an English-language, international environment.",
      ],
    },
    {
      id: 2,
      title: "Junior Test Automation Engineer",
      company: "WIMMA Lab · JAMK University of Applied Sciences",
      location: "Jyväskylä, Finland",
      period: "May 2023 – Jul 2023",
      bullets: [
        "Built and executed structured test automation suites using Robot Framework with Selenium, increasing test coverage across the project's web platform.",
        "Re-developed the WIMMA Lab 2023 website, improving UX and overall functionality.",
        "Identified and resolved software defects, contributing directly to improved software reliability.",
      ],
    },
    {
      id: 3,
      title: "Teaching Assistant · ICT Skills",
      company: "JAMK University of Applied Sciences",
      location: "Jyväskylä, Finland",
      period: "Sep 2022 – Nov 2022",
      bullets: [
        "Delivered weekly technical classes and hands-on ICT support to students.",
        "Evaluated assignments and provided structured, constructive feedback.",
        "Recommended by supervisor for demanding IT roles and excellent communication skills.",
      ],
    },
  ],
  skill_groups: [
    { category: "Backend & Cloud", skills: ["Python", "REST APIs", "AWS", "API Gateway", "Bash", "Node.js"] },
    { category: "Frontend", skills: ["Angular", "TypeScript", "React", "JavaScript", "HTML/CSS"] },
    { category: "QA & Testing", skills: ["Robot Framework", "Selenium", "Test Automation", "Manual Testing", "CI/CD"] },
    { category: "Systems & Security", skills: ["Linux", "Cyber Security", "Reverse Engineering", "IoT Systems", "Git"] },
    { category: "Data & Practices", skills: ["Data Analytics", "Discrete Math", "Agile/Scrum", "Full Stack Dev"] },
    { category: "Languages", skills: ["English · Professional", "Bengali · Native", "Finnish · Basic"] },
  ],
  education: [
    {
      degree: "Bachelor of Engineering — Information & Communications Technology",
      school: "JAMK University of Applied Sciences",
      location: "Jyväskylä, Finland",
      period: "2021 – Dec 2025",
      gpa: "3.45 / 5.0",
      credits: "257 credits completed",
      highlights: [
        "Specialisations: Software Engineering, Ethical Hacking, Cyber Security, IoT Systems, Data Analytics & AI",
        "Thesis: A Security Maturity Model for MERN Stack Applications in Bangladeshi SMEs — Grade 3/5",
        "WIMMA Lab 287-hour professional internship programme",
        "Hackathon Finalist 2022 · JAMK InnoFlash innovation programme",
      ],
    },
  ],
}

export function useCV() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Use hardcoded data — no backend needed for static deployment
    setData(CV_DATA)
    setLoading(false)
  }, [])

  return { data, loading, error }
}