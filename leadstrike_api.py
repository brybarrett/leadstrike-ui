from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Removed auth_router due to missing authenticate_user
# from auth import router as auth_router
from dashboard import router as dashboard_router
# from growth_dashboard import router as growth_router  # 🔧 Removed to avoid import crash

import json

app = FastAPI()

# CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount routers (auth removed for demo)
# app.include_router(auth_router)
app.include_router(dashboard_router)
# app.include_router(growth_router)  # 🔧 Commented to avoid runtime error

# Simulated leads endpoint
@app.get("/simulated-leads")
def get_sim_leads():
    with open("leads_simulated.json", "r") as f:
        leads = json.load(f)
    return leads
