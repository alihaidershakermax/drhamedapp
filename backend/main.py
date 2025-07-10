from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Baḥthi API", version="0.1.0")

# Allow all origins for development; tighten for production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["system"])
async def health_check():
    """Health-check endpoint used by load-balancers and uptime monitors."""
    return {"status": "ok"}


# Placeholder routers (auth, projects, ai).
from fastapi import APIRouter

auth_router = APIRouter(prefix="/auth", tags=["auth"])


@auth_router.post("/signup")
async def signup(email: str, password: str):
    # TODO: implement real signup logic (hash PW, persist user).
    return {"token": "dev-token", "email": email}


project_router = APIRouter(prefix="/projects", tags=["projects"])


@project_router.post("")
async def create_project(title: str, field: str, lang: str = "ar", style: str = "academic"):
    # TODO: save project to DB and return ID
    return {"projectId": 1, "title": title}


ai_router = APIRouter(prefix="/ai", tags=["ai"])


@ai_router.post("/generate")
async def generate(projectId: int):
    # TODO: enqueue job to orchestrator
    return {"jobId": 123, "projectId": projectId}


# Register routers
app.include_router(auth_router)
app.include_router(project_router)
app.include_router(ai_router)
