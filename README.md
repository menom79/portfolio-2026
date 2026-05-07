# Menom Haque — Portfolio

A full-stack portfolio website showcasing professional experience, skills, education, and contact information.

**Tech Stack:** React + Vite (frontend), FastAPI + Python (backend)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-blue)](https://menom79.github.io/portfolio-2026)

---

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── main.py            ← FastAPI application & CV data models
│   └── requirements.txt   ← Python dependencies
├── frontend/
│   ├── index.html
│   ├── vite.config.js     ← Vite config with API proxy
│   ├── package.json       ← Node.js dependencies & scripts
│   ├── public/            ← Static assets (PDFs, favicon)
│   └── src/
│       ├── main.jsx       ← React app entry point
│       ├── App.jsx        ← Main app component
│       ├── index.css      ← Global styles
│       ├── hooks/
│       │   ├── useCV.js           ← CV data (hardcoded for static deploy)
│       │   └── useScrollReveal.js ← Scroll animation hook
│       └── components/
│           ├── Navbar.jsx / .css
│           ├── Hero.jsx / .css
│           ├── Experience.jsx / .css
│           ├── Skills.jsx / .css
│           ├── Education.jsx / .css
│           ├── Contact.jsx / .css
│           ├── CVButton.jsx / .css
│           └── Section.css
└── README.md
```

---

## 🚀 Prerequisites

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) — [Download](https://www.python.org/downloads/) *(optional — backend only)*
- **Git** — [Download](https://git-scm.com/downloads)

Verify installations:

```bash
node --version
npm --version
python --version
```

---

## 🛠️ Running Locally

### Frontend only (no backend needed)

The frontend uses hardcoded CV data and works fully standalone — no backend required.

```bash
cd frontend
npm install
npm run dev
```

Visit **http://localhost:3000**

---

### With backend (optional)

The backend exposes a REST API that serves CV data as JSON. It is not required for the live site but is useful for local development or future dynamic features.

```bash
cd backend

# Create a virtual environment (recommended)
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python -m uvicorn main:app --reload
```

Available at:
- **API:** http://localhost:8000
- **Swagger docs:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

The Vite dev server proxies `/api/*` requests to `localhost:8000` automatically.

---

## 📡 API Endpoints

| Method | Endpoint          | Description             |
|--------|-------------------|-------------------------|
| GET    | `/api/cv`         | Complete CV data (JSON) |
| GET    | `/api/experience` | Work experience only    |
| GET    | `/api/skills`     | Skills and competencies |
| GET    | `/api/education`  | Education history       |

---

## 🚢 Deployment

### Frontend (GitHub Pages)

```bash
cd frontend
npm run deploy
```

Deploys to: **https://menom79.github.io/portfolio-2026**

### Backend (optional — for future dynamic features)

Deploy to Railway, Render, or Fly.io. Then update the proxy target in `vite.config.js`:

```javascript
proxy: {
  '/api': {
    target: 'https://your-backend-url.com',
    changeOrigin: true,
  }
}
```

---

## 🔧 Troubleshooting

**Port already in use**
```bash
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

**Module not found**
```bash
# Backend
pip install -r requirements.txt

# Frontend
rmdir /s /q node_modules
npm install
```

**npm errors**
```bash
npm cache clean --force
npm install
```

---

## 📝 Adding New Sections

1. Create component in `frontend/src/components/`
2. Add a matching CSS file
3. Import and add it in `App.jsx`
4. Update CV data in `frontend/src/hooks/useCV.js`
5. Optionally add an API endpoint in `backend/main.py`

---

## 📄 License

Private and proprietary.

---

**Built by Menom Haque**
