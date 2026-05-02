# Menom Haque — Portfolio

Full stack portfolio site: **React + Vite** frontend, **FastAPI (Python)** backend.

---

## Project Structure

```
portfolio/
├── backend/
│   ├── main.py            ← FastAPI app & CV data
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── hooks/
        │   ├── useCV.js
        │   └── useScrollReveal.js
        └── components/
            ├── Navbar.jsx / .css
            ├── Hero.jsx / .css
            ├── Experience.jsx / .css
            ├── Skills.jsx / .css
            ├── Education.jsx / .css
            └── Contact.jsx / .css
```

---

## Running Locally

### 1. Backend (Python / FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# → http://localhost:8000
# → API docs at http://localhost:8000/docs
```

### 2. Frontend (React / Vite)

```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

The Vite dev server proxies `/api/*` requests to `localhost:8000` automatically.

---

## API Endpoints

| Method | Path             | Description         |
|--------|------------------|---------------------|
| GET    | `/api/cv`        | Full CV data (JSON) |
| GET    | `/api/experience`| Experience only     |
| GET    | `/api/skills`    | Skills only         |
| GET    | `/api/education` | Education only      |

---

## Deploying

**Frontend:** Run `npm run build` → deploy `dist/` to Netlify, Vercel, or GitHub Pages.

**Backend:** Deploy `main.py` to Railway, Render, or Fly.io. Update the API URL in `vite.config.js` for production.
