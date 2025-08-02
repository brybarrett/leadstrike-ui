# auth.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from user_db import create_user, authenticate_user
from jwt_helper import create_token

router = APIRouter()

class AuthRequest(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(req: AuthRequest):
    if not create_user(req.email, req.password):
        raise HTTPException(status_code=400, detail="User already exists")
    return {"message": "Signup successful"}

@router.post("/login")
def login(req: AuthRequest):
    if not authenticate_user(req.email, req.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_token(req.email)
    return {"token": token}
