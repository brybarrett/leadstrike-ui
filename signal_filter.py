# signal_filter.py

HIGH_CONFIDENCE_THRESHOLD = 90
ALLOWED_TYPES = {"personal", "generic"}
KEYWORDS = {"director", "vp", "chief", "head", "lead", "president"}

def role_matches(position):
    pos = position.lower()
    return any(keyword in pos for keyword in KEYWORDS)

def filter_leads(leads):
    filtered = []
    for lead in leads:
        if lead["confidence"] < HIGH_CONFIDENCE_THRESHOLD:
            continue
        if lead["type"] not in ALLOWED_TYPES:
            continue
        if not role_matches(lead.get("position", "")):
            continue
        filtered.append(lead)
    return filtered
