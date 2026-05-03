from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Menom Haque Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Data models ────────────────────────────────────────────────
class ContactInfo(BaseModel):
    email: str
    phone: str
    location: str
    linkedin: str
    github: str

class Experience(BaseModel):
    id: int
    title: str
    company: str
    location: str
    period: str
    bullets: List[str]

class SkillGroup(BaseModel):
    category: str
    skills: List[str]

class Education(BaseModel):
    degree: str
    school: str
    location: str
    period: str
    gpa: str
    credits: str
    highlights: List[str]

class Achievement(BaseModel):
    text: str

class CVData(BaseModel):
    name: str
    title: str
    summary: str
    status: str
    contact: ContactInfo
    experience: List[Experience]
    skill_groups: List[SkillGroup]
    education: List[Education]
    achievements: List[Achievement]

# ── CV data ────────────────────────────────────────────────────
CV_DATA = CVData(
    name="Menom Haque",
    title="Backend & Full Stack Developer",
    status="Open to work · Finland & Remote",
    summary=(
        "Backend and full stack developer with a BEng in ICT (JAMK, 2025) and hands-on "
        "experience building RESTful APIs on AWS, test automation with Robot Framework/Selenium, "
        "and front-end development with Angular. Proven track record of delivering API "
        "infrastructure, improving software quality, and working in agile, English-speaking teams. "
        "Open to backend, full stack, QA/automation, or cloud roles — in Finland or remotely."
    ),
    contact=ContactInfo(
        email="mhmenom@gmail.com",
        phone="+358 465 218 175",
        location="Jyväskylä, Finland",
        linkedin="linkedin.com/in/menom",
        github="github.com/menom79",
    ),
    experience=[
        Experience(
            id=1,
            title="Back End Developer",
            company="MyHomesID Oy",
            location="Jyväskylä, Finland",
            period="Dec 2024 – Jun 2025",
            bullets=[
                "Designed and built the company's entire API infrastructure from scratch on AWS, "
                "including RESTful API design, implementation, documentation, and deployment via API Gateway.",
                "Established AWS API Gateway for secure internal and external API consumption — "
                "the first such infrastructure at the company.",
                "Onboarded and trained internal staff on the API project, tooling, and best practices.",
                "Collaborated with cross-functional teams in an English-language, international environment.",
            ],
        ),
        Experience(
            id=2,
            title="Junior Test Automation Engineer",
            company="WIMMA Lab · JAMK University of Applied Sciences",
            location="Jyväskylä, Finland",
            period="May 2023 – Jul 2023",
            bullets=[
                "Built and executed structured test automation suites using Robot Framework with Selenium, "
                "increasing test coverage across the project's web platform.",
                "Re-developed the WIMMA Lab 2023 website, improving UX and overall functionality.",
                "Identified and resolved software defects, contributing directly to improved software reliability.",
            ],
        ),
        Experience(
            id=3,
            title="Teaching Assistant · ICT Skills",
            company="JAMK University of Applied Sciences",
            location="Jyväskylä, Finland",
            period="Sep 2022 – Nov 2022",
            bullets=[
                "Delivered weekly technical classes and hands-on ICT support to students.",
                "Evaluated assignments and provided structured, constructive feedback.",
                "Recommended by supervisor for demanding IT roles and excellent communication skills.",
            ],
        ),
    ],
    skill_groups=[
        SkillGroup(category="Backend & Cloud", skills=["Python", "REST APIs", "AWS", "API Gateway", "Bash", "Node.js"]),
        SkillGroup(category="Frontend", skills=["Angular", "TypeScript", "React", "JavaScript", "HTML/CSS"]),
        SkillGroup(category="QA & Testing", skills=["Robot Framework", "Selenium", "Test Automation", "Manual Testing", "CI/CD"]),
        SkillGroup(category="Systems & Security", skills=["Linux", "Cyber Security", "Reverse Engineering", "IoT Systems", "Git"]),
        SkillGroup(category="Data & Practices", skills=["Data Analytics", "Discrete Math", "Agile/Scrum", "Full Stack Dev"]),
        SkillGroup(category="Languages", skills=["English · Professional", "Bengali · Native", "Finnish · Basic"]),
    ],
    education=[
        Education(
            degree="Bachelor of Engineering — Information & Communications Technology",
            school="JAMK University of Applied Sciences",
            location="Jyväskylä, Finland",
            period="2021 – Dec 2025",
            gpa="3.45 / 5.0",
            credits="257 credits completed",
            highlights=[
                "Specialisations: Software Engineering, Ethical Hacking, Cyber Security, IoT Systems, Data Analytics & AI",
                "Thesis: A Security Maturity Model for MERN Stack Applications in Bangladeshi SMEs",
                "WIMMA Lab 287-hour professional internship programme",
                "Hackathon Finalist 2022 · JAMK InnoFlash innovation programme",
            ],
        )
    ],
    achievements=[
        Achievement(text="WIMMA Lab 287-hour Professional Internship Certificate — JAMK Institute of IT (2023)"),
        Achievement(text="Hackathon Finalist — Road to Hackathon, JAMK (2022)"),
        Achievement(text="Occupational Safety Card — gained through academic and professional environments"),
    ],
)

# ── Routes ─────────────────────────────────────────────────────
@app.get("/")
def root():
    return {"message": "Menom Haque Portfolio API", "docs": "/docs"}

@app.get("/api/cv", response_model=CVData)
def get_cv():
    return CV_DATA

@app.get("/api/experience", response_model=List[Experience])
def get_experience():
    return CV_DATA.experience

@app.get("/api/skills", response_model=List[SkillGroup])
def get_skills():
    return CV_DATA.skill_groups

@app.get("/api/education", response_model=List[Education])
def get_education():
    return CV_DATA.education
