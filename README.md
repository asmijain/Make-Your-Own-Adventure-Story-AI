# Make Your Own Adventure Story AI

An AI-powered "choose your own adventure" story generator built with FastAPI and React. Users provide a theme, and the app generates a branching narrative tree using an LLM, then lets the user navigate the story by choosing between options at each step until they reach an ending.

## Live Demo

URL - https://adventure-story-ai-beta.vercel.app/

## Project Structure

```
.
├── backend/
│   ├── main.py                 # FastAPI app instance, CORS config, router registration
│   ├── db/
│   │   └── database.py          # SQLAlchemy engine, session, Base
│   ├── models/                  # SQLAlchemy ORM models (Story, StoryNode, StoryJob)
│   ├── schemas/                  # Pydantic request/response schemas
│   ├── routers/
│   │   └── story.py               # /stories/create and /stories/{id}/complete endpoints
│   ├── core/
│   │   └── story_generator.py      # Prompt construction + LLM call + response parsing
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/            # React components (story display, choice buttons, loading state)
│   │   ├── api/                    # Functions wrapping fetch calls to the backend
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js              # (or relevant config for your build tool)
└── README.md
```

## Tech Stack

**Backend**
- **Python 3**
- **FastAPI** — handles routing, request validation, and background task execution
- **SQLAlchemy** — ORM mapping Python classes to database tables (`Story`, `StoryNode`, `StoryJob`, etc.)
- **Pydantic** — defines and validates the shape of API requests/responses, separate from the database models
- **An LLM provider's API** (e.g. Groq) — generates the actual branching story content from a prompt template
- **SQLite** for local development / **PostgreSQL** in production on Render
- **Uvicorn** — ASGI server running the FastAPI app

**Frontend**
- **React** — component-based UI
- **JavaScript**
- **Fetch API** — communicates with the backend (story creation, polling job status, fetching the completed story tree)
- **CSS** — styling (component-based or global, depending on how the project is structured)

**Infrastructure / DevOps**
- **Vercel** — hosts and auto-deploys the frontend on push
- **Render** — hosts and auto-deploys the backend web service on push, also runs the PostgreSQL database in production

### Backend

```bash
cd backend
python -m venv venv
source venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:

```
GROQ_API_KEY=your_key_here
DATABASE_URL=sqlite:///./stories.db
```
Start the server:

```bash
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```
VITE_API_BASE_URL=http://localhost:8000
```

Start the dev server:

```bash
npm run dev
```
