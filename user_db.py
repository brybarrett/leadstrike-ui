import json
import os
import hashlib

USER_DB_PATH = "users.json"  # Adjust if your user file is stored elsewhere

def load_users():
    if not os.path.exists(USER_DB_PATH):
        return {}
    with open(USER_DB_PATH, "r") as f:
        return json.load(f)

def save_users(users):
    with open(USER_DB_PATH, "w") as f:
        json.dump(users, f, indent=2)

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def create_user(email, password, referrer=None):
    users = load_users()
    if email in users:
        return False

    users[email] = {
        "password": hash_password(password),
        "queries": [],
        "credits": 5,  # default free leads
        "referrer": referrer,
        "referrals": []
    }

    if referrer and referrer in users:
        from referral_tracker import apply_referral
        apply_referral(referrer, email)

    save_users(users)
    return True

def get_queries(email):
    users = load_users()
    if email in users:
        return users[email].get("queries", [])
    return []
