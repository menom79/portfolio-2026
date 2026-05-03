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
│   ├── public/            ← Static assets
│   └── src/
│       ├── main.jsx       ← React app entry point
│       ├── App.jsx        ← Main app component
│       ├── index.css      ← Global styles
│       ├── hooks/
│       │   ├── useCV.js           ← Custom hook for CV data
│       │   └── useScrollReveal.js ← Scroll animation hook
│       └── components/
│           ├── Navbar.jsx / .css
│           ├── Hero.jsx / .css
│           ├── Experience.jsx / .css
│           ├── Skills.jsx / .css
│           ├── Education.jsx / .css
│           ├── Contact.jsx / .css
│           ├── PDFThumbnail.jsx
│           └── Section.css
└── README.md
```

---

## 🚀 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **Python** (version 3.8 or higher) - [Download here](https://www.python.org/downloads/)
- **Git** - [Download here](https://git-scm.com/downloads)

You can verify installations with:

```bash
node --version
npm --version
python --version
pip --version
```

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/menom79/portfolio-2026.git
cd portfolio-2026/portfolio
```

### 2. Backend Setup (Python / FastAPI)

```bash
cd backend

# Create a virtual environment (recommended)
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at:

- **API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs (Swagger UI)
- **ReDoc:** http://localhost:8000/redoc

### 3. Frontend Setup (React / Vite)

Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at:

- **Local:** http://localhost:3000
- **Network:** http://localhost:5173 (if port 3000 is busy)

The Vite dev server automatically proxies `/api/*` requests to the backend at `localhost:8000`.

---

## 📡 API Endpoints

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/api/cv`         | Complete CV data (JSON) |
| GET    | `/api/experience` | Work experience only    |
| GET    | `/api/skills`     | Skills and competencies |
| GET    | `/api/education`  | Education history       |

### Example API Response

```json
{
  "name": "Menom Haque",
  "title": "Software Engineer",
  "summary": "Experienced developer...",
  "experience": [...],
  "skills": [...],
  "education": [...],
  "contact": {...}
}
```

---

## 🚢 Building & Deployment

### Frontend Deployment (GitHub Pages)

```bash
cd frontend

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The site will be deployed to: https://menom79.github.io/portfolio-2026

### Backend Deployment

For production deployment of the FastAPI backend, consider these platforms:

- **Railway** - `railway up`
- **Render** - Connect GitHub repo
- **Fly.io** - `fly deploy`
- **Heroku** - `git push heroku main`

**Important:** Update the API URL in `frontend/vite.config.js` for production:

```javascript
// For production, change the proxy target
proxy: {
  '/api': {
    target: 'https://your-backend-url.com',
    changeOrigin: true,
  }
}
```

---

## 🔧 Troubleshooting

### Common Issues

**1. Port already in use**

```bash
# Find process using port 8000
netstat -ano | findstr :8000
# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or use a different port
uvicorn main:app --reload --port 8001
```

**2. CORS errors**

- Ensure backend allows your frontend origin
- Check `main.py` CORS middleware configuration

**3. Module not found errors**

```bash
# Backend
pip install -r requirements.txt

# Frontend
rm -rf node_modules package-lock.json
npm install
```

**4. Build fails**

```bash
# Clear cache and rebuild
cd frontend
npm run clean  # if available
npm run build
```

**5. API not responding**

- Verify backend is running on port 8000
- Check firewall settings
- Ensure no VPN/proxy interference

### Development Tips

- Use browser dev tools (F12) to inspect network requests
- Check console for JavaScript errors
- Use `uvicorn main:app --reload` for auto-restart on code changes
- Frontend hot-reload is enabled by default with Vite

---

## 📝 Development

### Adding New Sections

1. Create component in `frontend/src/components/`
2. Add CSS file alongside JSX
3. Update `App.jsx` to include the new component
4. Add API endpoint in `backend/main.py` if needed
5. Update data models in `main.py`

### Updating CV Data

Edit the CV data directly in `backend/main.py` within the API endpoints.

---

## 📄 License

This project is private and proprietary.

---

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please open a GitHub issue.

---

**Built with ❤️ by Menom Haque**
