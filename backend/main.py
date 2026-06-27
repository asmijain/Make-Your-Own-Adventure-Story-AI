from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.config import settings
from routers import story, job, auth
from db.database import create_tables

create_tables()
app = FastAPI(
    title="Choose Your Own Adventure Game API",
    description="API to generate cool stories",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,  # allow us to use api from different origin
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True, # allow some credentials to send to backend
    allow_methods=["*"], # get, post, put , etc.
    allow_headers=["*"], # additional info that u can send with request
)

app.include_router(story.router, prefix=settings.API_PREFIX)

app.include_router(job.router, prefix=settings.API_PREFIX)

app.include_router(auth.router, prefix=settings.API_PREFIX)

if __name__ == "__main__":
    import uvicorn  # uvivorn is a web server, we used it to run the fastapi application
    uvicorn.run("main:app",host="0.0.0.0", port=8000, reload=True)
