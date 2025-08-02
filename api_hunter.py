# api_hunter.py

import os
import requests
from dotenv import load_dotenv

load_dotenv()
HUNTER_API_KEY = os.getenv("HUNTER_API_KEY")

def search_emails_by_domain(domain, max_results=5):
    url = f"https://api.hunter.io/v2/domain-search?domain={domain}&api_key={HUNTER_API_KEY}&limit={max_results}"
    response = requests.get(url)
    if response.status_code != 200:
        return []

    data = response.json()
    if not data.get("data") or not data["data"].get("emails"):
        return []

    leads = []
    for email_entry in data["data"]["emails"]:
        leads.append({
            "company_name": data["data"]["organization"],
            "email": email_entry.get("value"),
            "position": email_entry.get("position", "Unknown"),
            "type": email_entry.get("type", "generic"),
            "confidence": email_entry.get("confidence"),
            "domain": data["data"]["domain"]
        })
    return leads
