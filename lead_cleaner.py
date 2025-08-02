# lead_cleaner.py

def clean_leads(leads):
    cleaned = []
    for lead in leads:
        email = lead.get("email", "").strip().lower()
        name = lead.get("company_name", "").strip().title()
        confidence = lead.get("confidence", 0)

        if not email or "@" not in email:
            continue

        cleaned.append({
            "company_name": name,
            "email": email,
            "position": lead.get("position", "").strip(),
            "type": lead.get("type", ""),
            "confidence": confidence,
            "domain": lead.get("domain", "").lower(),
        })

    return cleaned
