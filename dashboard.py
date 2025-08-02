# dashboard.py

from fastapi import APIRouter, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jwt_helper import decode_token
from user_db import get_queries
from referral_tracker import get_user_stats

router = APIRouter()
security = HTTPBearer()

@router.get("/dashboard")
def user_dashboard(credentials: HTTPAuthorizationCredentials = security):
    email = decode_token(credentials.credentials)
    if not email:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return {
        "email": email,
        "queries": get_queries(email)
    }

@router.get("/referrals")
def get_referral_stats(credentials: HTTPAuthorizationCredentials = security):
    email = decode_token(credentials.credentials)
    if not email:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return get_user_stats(email)
