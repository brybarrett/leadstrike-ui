# lead_deduper.py

def deduplicate_leads(leads):
    seen = set()
    unique = []
    for lead in leads:
        key = (lead["company_name"].lower(), lead["email"].lower())
        if key not in seen:
            seen.add(key)
            unique.append(lead)
    return unique
