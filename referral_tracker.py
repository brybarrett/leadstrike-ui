# referral_tracker.py

from user_db import load_users, save_users

def apply_referral(referrer_email, new_user_email):
    users = load_users()
    if referrer_email not in users or new_user_email not in users:
        return False

    users[referrer_email].setdefault("referrals", [])
    users[referrer_email]["referrals"].append(new_user_email)

    users[referrer_email].setdefault("credits", 0)
    users[referrer_email]["credits"] += 5  # 5 bonus leads per referral

    save_users(users)
    return True

def get_user_stats(email):
    users = load_users()
    if email not in users:
        return {"credits": 0, "referrals": []}
    u = users[email]
    return {
        "credits": u.get("credits", 0),
        "referrals": u.get("referrals", [])
    }
